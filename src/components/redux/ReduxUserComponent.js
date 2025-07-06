import React, { memo } from "react";
import { useSelector } from "react-redux";

export const ReduxUserComponent = memo(() => {
  // Only subscribes to user state - won't re-render when theme/counter changes
  const user = useSelector((state) => state.user);
  console.log("👤 Redux UserComponent re-rendered");

  return (
    <div className="p-4 border border-blue-400 rounded bg-blue-100">
      <h3 className="font-bold text-blue-900">User Info (Redux)</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
});
