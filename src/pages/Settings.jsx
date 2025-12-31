import React, { useState } from 'react';
import {
  FiSettings,
  FiBell,
  FiClock,
  FiCheckCircle,
  FiSave,
  FiUser,
  FiShield,
  FiDatabase,
  FiGlobe,
  FiMail,
  FiLock,
  FiRefreshCw,
  FiUpload,
  FiDownload,
  FiHelpCircle,
  FiMoon,
  FiSun
} from 'react-icons/fi';
import { FaBusinessTime, FaUserClock } from 'react-icons/fa';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    lateAlerts: true,
    weeklyReports: true,
    monthlyReports: true
  });
  
  const [generalSettings, setGeneralSettings] = useState({
    companyName: 'Simple Admin Corp',
    workHours: '9-6',
    gracePeriod: 15,
    timezone: 'UTC+5:30',
    dateFormat: 'MM/DD/YYYY',
    language: 'English'
  });

  const settingTabs = [
    { id: 'general', label: 'General', icon: <FiSettings /> },
    { id: 'notifications', label: 'Notifications', icon: <FiBell /> },
    { id: 'attendance', label: 'Attendance', icon: <FaUserClock /> },
    { id: 'security', label: 'Security', icon: <FiShield /> },
    { id: 'backup', label: 'Backup', icon: <FiDatabase /> },
    { id: 'advanced', label: 'Advanced', icon: <FiGlobe /> }
  ];

  const settingsData = [
    { 
      label: 'Work Hours', 
      value: '9 AM-6 PM', 
      color: 'var(--primary)', 
      icon: <FaBusinessTime />
    },
    { 
      label: 'Grace Period', 
      value: '15 min', 
      color: 'var(--warning)', 
      icon: <FiClock />
    },
    { 
      label: 'Auto-Approval', 
      value: 'Enabled', 
      color: 'var(--success)', 
      icon: <FiCheckCircle />
    },
    { 
      label: 'Notifications', 
      value: 'Active', 
      color: 'var(--info)', 
      icon: <FiBell />
    }
  ];

  const handleNotificationChange = (key) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key]
    });
  };

  const handleGeneralSettingChange = (key, value) => {
    setGeneralSettings({
      ...generalSettings,
      [key]: value
    });
  };

  const handleSaveSettings = () => {
    alert('Settings saved successfully!');
  };

  const handleExportSettings = () => {
    const settings = { generalSettings, notifications, theme };
    const dataStr = JSON.stringify(settings, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'settings-backup.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="page-content">
      <div className="page-header glass-effect">
        <div className="header-content">
          <h1>System Settings</h1>
          <p>Configure and customize your attendance system</p>
        </div>
        <div className="theme-toggle">
          <button 
            className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}
          >
            <FiSun /> Light
          </button>
          <button 
            className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
          >
            <FiMoon /> Dark
          </button>
        </div>
      </div>
      
      <div className="cards-row">
        {settingsData.map((item, index) => (
          <div 
            key={index} 
            className="stat-card hover-lift"
            style={{ '--card-accent': item.color }}
          >
            <div className="stat-icon-wrapper" style={{ backgroundColor: `${item.color}20` }}>
              {item.icon}
            </div>
            <div className="stat-content">
              <div className="stat-header">
                <span className="stat-label">{item.label}</span>
                <span className="stat-value">{item.value}</span>
              </div>
              <div className="stat-action">
                <button className="edit-btn">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="settings-container">
        <div className="settings-sidebar">
          <div className="sidebar-header">
            <h3>Settings</h3>
          </div>
          <div className="sidebar-tabs">
            {settingTabs.map(tab => (
              <button
                key={tab.id}
                className={`sidebar-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
          <div className="sidebar-footer">
            <button className="sidebar-btn" onClick={handleExportSettings}>
              <FiDownload /> Export Settings
            </button>
            <button className="sidebar-btn">
              <FiHelpCircle /> Help & Support
            </button>
          </div>
        </div>
        
        <div className="settings-content">
          <div className="settings-tab-content">
            {activeTab === 'general' && (
              <div className="settings-section">
                <h3><FiSettings /> General Settings</h3>
                <div className="settings-grid">
                  <div className="setting-group">
                    <label>
                      <FiUser /> Company Name
                    </label>
                    <input
                      type="text"
                      value={generalSettings.companyName}
                      onChange={(e) => handleGeneralSettingChange('companyName', e.target.value)}
                      className="setting-input"
                    />
                  </div>
                  
                  <div className="setting-group">
                    <label>
                      <FaBusinessTime /> Work Hours
                    </label>
                    <select
                      value={generalSettings.workHours}
                      onChange={(e) => handleGeneralSettingChange('workHours', e.target.value)}
                      className="setting-select"
                    >
                      <option value="8-5">8:00 AM - 5:00 PM</option>
                      <option value="9-6">9:00 AM - 6:00 PM</option>
                      <option value="10-7">10:00 AM - 7:00 PM</option>
                      <option value="flexible">Flexible Hours</option>
                    </select>
                  </div>
                  
                  <div className="setting-group">
                    <label>
                      <FiClock /> Grace Period (minutes)
                    </label>
                    <div className="range-input">
                      <input
                        type="range"
                        min="0"
                        max="60"
                        step="5"
                        value={generalSettings.gracePeriod}
                        onChange={(e) => handleGeneralSettingChange('gracePeriod', e.target.value)}
                      />
                      <span className="range-value">{generalSettings.gracePeriod} min</span>
                    </div>
                  </div>
                  
                  <div className="setting-group">
                    <label>
                      <FiGlobe /> Timezone
                    </label>
                    <select
                      value={generalSettings.timezone}
                      onChange={(e) => handleGeneralSettingChange('timezone', e.target.value)}
                      className="setting-select"
                    >
                      <option value="UTC+5:30">UTC+5:30 (IST)</option>
                      <option value="UTC+0">UTC+0 (GMT)</option>
                      <option value="UTC-5">UTC-5 (EST)</option>
                      <option value="UTC-8">UTC-8 (PST)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'notifications' && (
              <div className="settings-section">
                <h3><FiBell /> Notification Settings</h3>
                <div className="settings-grid">
                  {Object.entries(notifications).map(([key, value]) => (
                    <div key={key} className="setting-group checkbox">
                      <label>
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={() => handleNotificationChange(key)}
                        />
                        <span className="checkbox-label">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </span>
                      </label>
                      <span className="setting-description">
                        Receive {key.replace(/([A-Z])/g, ' $1').toLowerCase()} notifications
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'attendance' && (
              <div className="settings-section">
                <h3><FaUserClock /> Attendance Settings</h3>
                <div className="settings-grid">
                  <div className="setting-group">
                    <label>Auto Clock-Out</label>
                    <select className="setting-select">
                      <option>Enabled (After 9 hours)</option>
                      <option>Disabled</option>
                      <option>Enabled (After 8 hours)</option>
                    </select>
                  </div>
                  
                  <div className="setting-group">
                    <label>Weekend Policy</label>
                    <select className="setting-select">
                      <option>5-day work week</option>
                      <option>6-day work week</option>
                      <option>Flexible weekends</option>
                    </select>
                  </div>
                  
                  <div className="setting-group">
                    <label>Overtime Calculation</label>
                    <select className="setting-select">
                      <option>After 8 hours daily</option>
                      <option>After 40 hours weekly</option>
                      <option>Custom hours</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="settings-actions">
            <button className="action-btn secondary">
              <FiRefreshCw /> Reset to Default
            </button>
            <button className="action-btn primary" onClick={handleSaveSettings}>
              <FiSave /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;