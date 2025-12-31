import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeMenu, onMenuClick }) => {
  const menuItems = [
    { id: 1, name: 'Dashboard', icon: '📊', hasNotification: false },
    { id: 2, name: 'Attendance', icon: '⏱️', hasNotification: false },
    { id: 3, name: 'Employees', icon: '👥', hasNotification: false },
    { id: 4, name: 'Reports', icon: '📈', hasNotification: false },
    { id: 5, name: 'Settings', icon: '⚙️', hasNotification: false },

  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Sapna Construnction</h1>
      </div>
      
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              className={`menu-item ${activeMenu === item.name ? 'active' : ''}`}
              onClick={() => onMenuClick(item.name)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-text">{item.name}</span>
              {item.hasNotification && (
                <span className="notification-badge">New</span>
              )}
              {activeMenu === item.name ? (
                <span className="menu-checkbox checked">✓</span>
              ) : (
                <span className="menu-checkbox">□</span>
              )}
            </button>
          </li>
        ))}
      </ul>
      
      <div className="sidebar-footer">
        <p>Employee Attendance System</p>
        <p className="version">v1.0.0</p>
      </div>
    </div>
  );
};

export default Sidebar;