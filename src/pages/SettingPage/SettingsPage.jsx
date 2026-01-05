import React, { useState } from 'react';
import { FiSave, FiUpload, FiBell, FiShield, FiGlobe } from 'react-icons/fi';
import '../SettingPage/SettingsPage.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    companyName: 'AttendancePro',
    timezone: 'UTC',
    workingHours: {
      start: '09:00',
      end: '18:00'
    },
    notifications: {
      email: true,
      push: true,
      sms: false
    },
    security: {
      twoFactor: true,
      passwordExpiry: 90
    }
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const [category, field] = name.split('.');
      setSettings(prev => ({
        ...prev,
        [category]: {
          ...prev[category],
          [field]: checked
        }
      }));
    } else {
      setSettings(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-page">
      <div className="page-header">
        <div className="header-content">
          <h1>System Settings</h1>
          <p>Configure attendance system settings</p>
        </div>
        <button className="primary-btn" onClick={handleSave}>
          <FiSave /> Save Changes
        </button>
      </div>

      <div className="settings-content">
        <div className="settings-grid">
          {/* General Settings */}
          <div className="settings-card">
            <div className="card-header">
              <FiGlobe className="header-icon" />
              <h3>General Settings</h3>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={settings.companyName}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label>Timezone</label>
                <select
                  name="timezone"
                  value={settings.timezone}
                  onChange={handleInputChange}
                >
                  <option value="UTC">UTC</option>
                  <option value="EST">EST</option>
                  <option value="PST">PST</option>
                  <option value="IST">IST</option>
                </select>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Work Start Time</label>
                  <input
                    type="time"
                    name="workingHours.start"
                    value={settings.workingHours.start}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Work End Time</label>
                  <input
                    type="time"
                    name="workingHours.end"
                    value={settings.workingHours.end}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="settings-card">
            <div className="card-header">
              <FiBell className="header-icon" />
              <h3>Notification Settings</h3>
            </div>
            <div className="card-body">
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="notifications.email"
                    checked={settings.notifications.email}
                    onChange={handleInputChange}
                  />
                  <span>Email Notifications</span>
                </label>
                
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="notifications.push"
                    checked={settings.notifications.push}
                    onChange={handleInputChange}
                  />
                  <span>Push Notifications</span>
                </label>
                
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="notifications.sms"
                    checked={settings.notifications.sms}
                    onChange={handleInputChange}
                  />
                  <span>SMS Notifications</span>
                </label>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="settings-card">
            <div className="card-header">
              <FiShield className="header-icon" />
              <h3>Security Settings</h3>
            </div>
            <div className="card-body">
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="security.twoFactor"
                    checked={settings.security.twoFactor}
                    onChange={handleInputChange}
                  />
                  <span>Two-Factor Authentication</span>
                </label>
              </div>
              
              <div className="form-group">
                <label>Password Expiry (Days)</label>
                <input
                  type="number"
                  name="security.passwordExpiry"
                  value={settings.security.passwordExpiry}
                  onChange={handleInputChange}
                  min="1"
                  max="365"
                />
              </div>
            </div>
          </div>

          {/* Import/Export */}
          <div className="settings-card">
            <div className="card-header">
              <FiUpload className="header-icon" />
              <h3>Data Management</h3>
            </div>
            <div className="card-body">
              <div className="data-actions">
                <button className="secondary-btn">
                  Export All Data
                </button>
                <button className="secondary-btn">
                  Backup Database
                </button>
                <button className="secondary-btn danger">
                  Reset Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;