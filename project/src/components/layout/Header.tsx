import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop2, LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/auth';

export function Header() {
  const { user, logout } = useAuthStore();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Laptop2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LMS</span>
            </Link>
            <nav className="ml-8 flex space-x-4">
              {user?.role === 'admin' ? (
                <>
                  <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </Link>
                  <Link to="/laptops" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                    Laptops
                  </Link>
                  <Link to="/employees" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                    Employees
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/my-laptops" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                    My Laptops
                  </Link>
                  <Link to="/report-issue" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                    Report Issue
                  </Link>
                </>
              )}
            </nav>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-700 mr-4">{user?.name}</span>
            <button
              onClick={logout}
              className="p-2 rounded-full text-gray-500 hover:text-indigo-600 hover:bg-gray-100"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}