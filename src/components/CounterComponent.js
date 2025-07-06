import React, { memo } from "react";
import { useAppContext } from "../hooks/useAppContext";

export const CounterComponent = memo(() => {
  const { count, setCount } = useAppContext();
  console.log("🔢 CounterComponent re-rendered");

  return (
    <div className="p-4 border border-purple-300 rounded bg-purple-50">
      <h3 className="font-bold text-purple-800">Counter</h3>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-2 px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Increment
      </button>
    </div>
  );
});
