import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TodoList from './src/components/TodoList/TodoList';
import DashboardCards from './components/DashboardCards';
import AttendanceChart from './components/AttendanceChart';
import AttendanceTable from './components/AttendanceTable';
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
          {activeMenu === 'Dashboard' && (
            <>
              <div className="dashboard-maintenance-banner">
                This dashboard is under maintenance!
              </div>
              <DashboardCards />
              <div className="chart-todo-container">
                <AttendanceChart />
                <TodoList />
              </div>
              <AttendanceTable />
            </>
          )}
          
          {activeMenu === 'Attendance' && (
            <div className="page-content">
              <h1>Attendance Management</h1>
              <p>View and manage employee attendance records here.</p>
            </div>
          )}
          
          {activeMenu === 'Employees' && (
            <div className="page-content">
              <h1>Employee Management</h1>
              <p>Manage employee profiles and details.</p>
            </div>
          )}
          
          {activeMenu === 'Reports' && (
            <div className="page-content">
              <h1>Attendance Reports</h1>
              <p>Generate and view attendance reports.</p>
            </div>
          )}
          
          {activeMenu === 'Settings' && (
            <div className="page-content">
              <h1>System Settings</h1>
              <p>Configure attendance system settings.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;