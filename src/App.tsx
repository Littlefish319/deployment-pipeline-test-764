import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">System Functional</h1>
      <p className="mb-8 text-gray-300">Deployment Pipeline Test Successful.</p>
      
      <button 
        onClick={() => setCount(c => c + 1)}
        className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded transition-colors"
      >
        Interactivity Check: {count}
      </button>
    </div>
  );
}