import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4">
      <div className="text-center">
        <AlertCircle className="w-20 h-20 text-purple-500 mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-purple-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-neutral-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;