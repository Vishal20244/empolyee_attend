import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import EmployeePage from './pages/EmployeePage/EmployeesPage';
import AttendancePage from './pages/AttendancePage/AttendancePage';
import ReportPage from './pages/ReportPage/ReportsPage';
import SettingPage from './pages/SettingPage/SettingsPage';
import './App.css';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="app-container">
      <Router>
        <Sidebar onCollapse={setIsSidebarCollapsed} />
        <div
          className="main-content"
          style={{
            marginLeft: isSidebarCollapsed ? '30px' : '250px',
            transition: 'margin-left 0.3s ease'
          }}
        >
          <Header />
          <div className="content-area">
            <Routes>
              {/* Set default route to employees */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              
              {/* Dashboard route - this should work now */}
              <Route path="/dashboard" element={<DashboardPage />} />
              
              {/* Employees route */}
              <Route path="/employees" element={<EmployeePage />} />
              
              {/* Other routes */}
              <Route path="/attendance" element={<AttendancePage />} />
              <Route path="/reports" element={<ReportPage />} />
              <Route path="/settings" element={<SettingPage />} />
              
              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;