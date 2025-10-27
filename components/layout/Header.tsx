import React, { useState } from 'react';

const Header = ({ sidebarOpen, setSidebarOpen, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-30 flex w-full bg-white drop-shadow-md">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-sm md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-50 block rounded-lg border border-gray-200 bg-white p-1.5 shadow-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>

        <div className="hidden sm:block">
          <form>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-100 rounded-md border border-gray-200 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <span className="absolute top-1/2 left-3 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </span>
            </div>
          </form>
        </div>

        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-4">
            <span className="hidden text-right lg:block">
              <span className="block text-sm font-medium text-gray-800">Admin</span>
              <span className="block text-xs">Content Manager</span>
            </span>
            <img src="https://picsum.photos/seed/avatar/40/40" alt="User" className="h-10 w-10 rounded-full" />
          </button>

          {dropdownOpen && (
            <div
              onMouseLeave={() => setDropdownOpen(false)}
              className="absolute right-0 mt-4 flex w-60 flex-col rounded-lg border border-gray-200 bg-white shadow-lg"
            >
              <ul className="flex flex-col gap-5 border-b border-gray-200 px-6 py-4">
                <li><a href="#" className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary">Profile</a></li>
                <li><a href="#" className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary">Settings</a></li>
              </ul>
              <button onClick={onLogout} className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out text-red-500 hover:text-red-700">
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
