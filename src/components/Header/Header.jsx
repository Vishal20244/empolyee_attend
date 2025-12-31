import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h2>Dashboard</h2>
        <div className="breadcrumb">Home / Dashboard</div>
      </div>
      <div className="header-right">
        <div className="user-profile">
          <div className="avatar">AD</div>
          <div className="user-info">
            <span className="user-name">Admin User</span>
            <span className="user-role">System Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;          