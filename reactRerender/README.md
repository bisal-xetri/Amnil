# React Rendering, Re-rendering, React.memo, and Profiler 🚀

Understanding how React handles rendering is essential for building performant apps. This document explains rendering, re-rendering, how to avoid unnecessary re-renders using `React.memo`, and how to analyze performance with the React Profiler.

---

## 🔄 What is Rendering in React?

Rendering is the process by which React converts your component tree into DOM elements. Every time React renders:

- It builds a virtual DOM.
- Compares it with the previous render (diffing).
- Updates only the parts of the DOM that have changed (reconciliation).

---

## 🔁 What Triggers a Re-render?

A **re-render** happens when:

- Component’s **state** changes.
- Component’s **props** change.
- Parent component re-renders (which also re-renders its children by default).

### Example:

```jsx
// ReactMemo.jsx
import { useState } from "react";
import Counts from "./Counts";

function ReactMemo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-4 h-52 flex flex-col justify-end items-center">
        <h1 className="text-4xl">{count}</h1>
        <button
          className="bg-cyan-500 mt-3 py-1 px-3 cursor-pointer text-white rounded hover:bg-cyan-600"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
      <Counts />
    </>
  );
}

export default ReactMemo;
```

In this setup, when the `count` state in `ReactMemo` changes, React re-renders the `ReactMemo` component and its child, `Counts`.

---

## ⚠️ Common Misconception

> “A component re-renders only when its props change.”

❌ Not true. If the **parent** component re-renders, all of its **children** re-render as well — even if their props didn’t change.

---

## 🧠 Preventing Unnecessary Re-renders with `React.memo`

**React.memo** is a higher-order component that prevents a component from re-rendering if its props haven’t changed.

### Example:

```jsx
// Counts.jsx
import { memo, useRef } from "react";

function Counts() {
  const renderCount = useRef(0);
  return (
    <div className="mt-3 font-display text-center">
      <p>Counts component renders</p>
      <span className="text-red-600">{renderCount.current++} times</span>
    </div>
  );
}

// Without memo:
// export default Counts;

// With memo:
export default memo(Counts);
```

✅ Use `React.memo` when:

- The component renders the same output given the same props.
- The component is pure and not dependent on context/state outside its scope.

---

## 🛠 React Profiler

The **React Profiler** helps you analyze component performance:

- ✅ See which components re-rendered.
- ✅ Understand **why** they re-rendered.
- ✅ Know how long the renders took.

### How to Use:

1. Install **React Developer Tools** extension.
2. Open your app in the browser.
3. Go to the **“Profiler”** tab in DevTools.
4. Click **“Record”** and interact with your app.
5. Analyze which components rendered and how much time they took.
