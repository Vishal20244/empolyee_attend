import React, { useState } from 'react';
import { FiBell, FiSearch, FiUser, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, message: 'New employee added', time: '10 min ago' },
    { id: 2, message: 'Attendance report ready', time: '1 hour ago' },
    { id: 3, message: 'System update available', time: '2 hours ago' },
  ]);

  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </div>
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>

      <div className="header-right">
        <div className="notification-wrapper">
          <button 
            className="notification-btn" 
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <FiBell />
            <span className="notification-badge">3</span>
          </button>
          
          {showNotifications && (
            <div className="notification-dropdown">
              <div className="notification-header">
                <h4>Notifications</h4>
                <span className="badge">3 new</span>
              </div>
              <div className="notification-list">
                {notifications.map((notification) => (
                  <div key={notification.id} className="notification-item">
                    <div className="notification-content">
                      <p className="notification-message">{notification.message}</p>
                      <span className="notification-time">{notification.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="notification-footer">
                <button className="view-all-btn">View All Notifications</button>
              </div>
            </div>
          )}
        </div>

        <div className="user-profile">
          <div className="avatar">
            <FiUser />
          </div>
          <div className="user-info">
            <span className="user-name">Admin User</span>
            <span className="user-role">Administrator</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <h3>Menu</h3>
              <button className="close-menu" onClick={() => setMobileMenuOpen(false)}>
                <FiX />
              </button>
            </div>
            <div className="mobile-menu-items">
              <a href="/dashboard" className="mobile-menu-item">Dashboard</a>
              <a href="/employees" className="mobile-menu-item">Employees</a>
              <a href="/attendance" className="mobile-menu-item">Attendance</a>
              <a href="/reports" className="mobile-menu-item">Reports</a>
              <a href="/settings" className="mobile-menu-item">Settings</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;