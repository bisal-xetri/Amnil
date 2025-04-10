import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todo App
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <AddTodo />
          <Todo />
        </div>
      </div>
    </div>
  );
};

export default App;
