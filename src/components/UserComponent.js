import React, { memo } from "react";
import { useAppContext } from "../hooks/useAppContext";

export const UserComponent = memo(() => {
  const { user } = useAppContext();
  console.log("👤 UserComponent re-rendered");

  return (
    <div className="p-4 border border-blue-300 rounded bg-blue-50">
      <h3 className="font-bold text-blue-800">User Info</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
});
