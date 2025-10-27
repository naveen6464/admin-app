import React, { useState, useCallback } from 'react';
import Login from './pages/Login';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Blogs from './pages/Blogs';
import WhitePapers from './pages/WhitePapers';
import Settings from './pages/Settings';
import { DataProvider } from './context/DataContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [initialAction, setInitialAction] = useState(null);

  const handleLogin = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard setCurrentPage={setCurrentPage} setInitialAction={setInitialAction} />;
      case 'blogs':
        return <Blogs initialAction={initialAction} setInitialAction={setInitialAction} />;
      case 'whitepapers':
        return <WhitePapers initialAction={initialAction} setInitialAction={setInitialAction} />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard setCurrentPage={setCurrentPage} setInitialAction={setInitialAction}/>;
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <DataProvider>
      <MainLayout currentPage={currentPage} setCurrentPage={setCurrentPage} onLogout={handleLogout}>
        {renderContent()}
      </MainLayout>
    </DataProvider>
  );
};

export default App;
