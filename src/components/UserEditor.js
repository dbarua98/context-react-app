import React, { memo } from "react";
import { useAppContext } from "../hooks/useAppContext";

export const UserEditor = memo(() => {
  const { user, setUser } = useAppContext();
  console.log("✏️ UserEditor re-rendered");

  return (
    <div className="p-4 border border-orange-300 rounded bg-orange-50">
      <h3 className="font-bold text-orange-800">Edit User</h3>
      <button
        onClick={() => setUser({ ...user, name: user.name + "!" })}
        className="mt-2 px-3 py-1 bg-orange-600 text-white rounded hover:bg-orange-700"
      >
        Add ! to name
      </button>
    </div>
  );
});
