import React, { useState } from "react";
import { ProblematicProvider } from "./contexts/ProblematicProvider";
import { OptimizedProvider } from "./contexts/OptimizedProvider";
import { UserComponent } from "./components/UserComponent";
import { ThemeComponent } from "./components/ThemeComponent";
import { CounterComponent } from "./components/CounterComponent";
import { UserEditor } from "./components/UserEditor";

function Demo({ useOptimized = false }) {
  const Provider = useOptimized ? OptimizedProvider : ProblematicProvider;

  return (
    <Provider>
      <div className="space-y-4">
        <div className="text-center p-2 bg-gray-100 rounded">
          <h2 className="text-xl font-bold">
            {useOptimized ? "✅ Optimized" : "❌ Problematic"} Context Demo
          </h2>
          <p className="text-sm text-gray-600">
            Check console to see which components re-render
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UserComponent />
          <ThemeComponent />
          <CounterComponent />
          <UserEditor />
        </div>
      </div>
    </Provider>
  );
}

export default function App() {
  const [showOptimized, setShowOptimized] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold mb-4">
          React Context Re-render Issue
        </h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setShowOptimized(false)}
            className={`px-4 py-2 rounded ${
              !showOptimized ? "bg-red-600 text-white" : "bg-gray-200"
            }`}
          >
            Show Problematic
          </button>
          <button
            onClick={() => setShowOptimized(true)}
            className={`px-4 py-2 rounded ${
              showOptimized ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            Show Optimized
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Open browser console and click buttons to see re-render behavior
        </p>
      </div>

      <Demo useOptimized={showOptimized} />
    </div>
  );
}
