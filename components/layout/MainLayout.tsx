import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = ({ children, currentPage, setCurrentPage, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className={`relative flex h-screen flex-col overflow-y-auto overflow-x-hidden transition-all duration-300 ease-linear ${sidebarOpen ? 'lg:ml-72' : 'lg:ml-20'}`}>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} onLogout={onLogout} />
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
