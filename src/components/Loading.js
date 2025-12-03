import React from 'react';

export default function Loading({ message = 'Loading...' }) {
  return (
    <div className="flex items-center justify-center h-full py-12" role="status" aria-live="polite">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-red-500 border-t-transparent mr-4" />
      <span className="text-red-700 font-medium">{message}</span>
    </div>
  );
}
