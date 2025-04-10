import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState("");

  const handleUpdate = (todo) => {
    setEditTodo(todo.id);
    setEditText(todo.text);
  };

  const handleSaveUpdate = (id) => {
    if (editText.trim() !== "") {
      dispatch(updateTodo({ id, text: editText }));
      setEditTodo(null);
      setEditText("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editTodo === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 bg-zinc-700 text-white px-2 py-1 rounded mr-2"
              />
            ) : (
              <span className="text-white">{todo.text}</span>
            )}

            <div className="flex gap-2">
              {editTodo === todo.id ? (
                <button
                  onClick={() => handleSaveUpdate(todo.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleUpdate(todo)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
