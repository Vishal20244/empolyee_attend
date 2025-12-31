import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';  
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Employees from './pages/Employees';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import './App.css';

function App() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  
  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  return (
    <div className="app-container">
      <Sidebar activeMenu={activeMenu} onMenuClick={handleMenuClick} />
      <div className="main-content">
        <Header />
        <div className="content-area">
          {activeMenu === 'Dashboard' && <Dashboard />}
          {activeMenu === 'Attendance' && <Attendance />}
          {activeMenu === 'Employees' && <Employees />}
          {activeMenu === 'Reports' && <Reports />}
          {activeMenu === 'Settings' && <Settings />}
        </div>
      </div>
    </div>
  );
}

export default App;