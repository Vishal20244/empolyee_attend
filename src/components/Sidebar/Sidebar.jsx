import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiFileText,
  FiSettings,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', icon: <FiHome />, path: '/dashboard' },
    { name: 'Employees', icon: <FiUsers />, path: '/employees' },
    { name: 'Attendance', icon: <FiCalendar />, path: '/attendance' },
    { name: 'Reports', icon: <FiFileText />, path: '/reports' },
    { name: 'Settings', icon: <FiSettings />, path: '/settings' },
  ];

  const handleLogout = () => {
    //  logout logic here
    console.log('Logging out...');
    navigate('/login');
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {!isCollapsed && (
          <div className="logo">
            <FiCalendar className="logo-icon" />
            <h2>AttendancePro</h2>
          </div>
        )}
        <button
          className="collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `menu-item ${isActive ? 'active' : ''}`
            }
            end={item.path === '/dashboard'}
          >
            <div className="menu-icon">{item.icon}</div>
            {!isCollapsed && <span className="menu-text">{item.name}</span>}
          </NavLink>
        ))}
      </div>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          <FiLogOut className="logout-icon" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 