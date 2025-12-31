import React, { useState } from 'react';
import AttendanceTable from '../components/AttendanceTable/AttendanceTable';

const Attendance = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="page-content">
      <div className="attendance-header">
        <h1>Attendance Management</h1>
        <p>Monitor and manage employee attendance records in real-time</p>
      </div>
      
      <div className="attendance-stats">
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <div className="stat-label">This Week</div>
            <div className="stat-value">95%</div>
            <div className="stat-change">+2% from last week</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-label">This Month</div>
            <div className="stat-value">92%</div>
            <div className="stat-change">+5% from last month</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⏰</div>
          <div className="stat-content">
            <div className="stat-label">Late Arrivals</div>
            <div className="stat-value">8</div>
            <div className="stat-change">-3 from last week</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-content">
            <div className="stat-label">Overtime Hours</div>
            <div className="stat-value">42</div>
            <div className="stat-change">+12 from last month</div>
          </div>
        </div>
      </div>
      
      <div className="attendance-filters">
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            All Employees <span className="filter-count">42</span>
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'present' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('present')}
          >
            Present Today <span className="filter-count">38</span>
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'absent' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('absent')}
          >
            Absent Today <span className="filter-count">2</span>
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'late' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('late')}
          >
            Late Today <span className="filter-count">1</span>
          </button>
        </div>
        
        <div className="search-container">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search employees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <span className="filter-icon">⚙️</span>
          </div>
          <div className="date-display">
            📅 Today, {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
      
      <div className="attendance-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button className="action-btn primary">✅ Mark Attendance</button>
          <button className="action-btn secondary">📤 Import Data</button>
          <button className="action-btn success">📥 Export to CSV</button>
          <button className="action-btn warning">📊 View History</button>
          <button className="action-btn outline">⚙️ Advanced Filters</button>
        </div>
      </div>
      
      <div className="attendance-table-container">
        <div className="table-header">
          <h3>Today's Attendance Records</h3>
          <div className="table-actions">
            <button className="table-btn">🔄 Refresh</button>
            <button className="table-btn">🖨️ Print</button>
          </div>
        </div>
        <AttendanceTable />
      </div>
    </div>
  );
};

export default Attendance;