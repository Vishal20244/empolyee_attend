import React, { useState } from 'react';
import '../DashboardPage/DashboardPage.css';
import {
  FiUsers,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiCalendar,
  FiEye,
  FiDownload,
  FiFilter
} from 'react-icons/fi';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState('today');
  const [viewMode, setViewMode] = useState('daily');

  const attendanceStats = [
    {
      label: 'Total Present',
      value: '142',
      color: '#10b981',
      icon: <FiCheckCircle />,
      change: '+5% from yesterday'
    },
    {
      label: 'Late Arrivals',
      value: '12',
      color: '#f59e0b',
      icon: <FiClock />,
      change: '-2% from yesterday'
    },
    {
      label: 'On Leave',
      value: '8',
      color: '#3b82f6',
      icon: <FiCalendar />,
      change: '3 scheduled'
    },
    {
      label: 'Absent',
      value: '6',
      color: '#ef4444',
      icon: <FiAlertCircle />,
      change: 'Needs follow-up'
    }
  ];

  const attendanceRecords = [
    { id: 1, name: 'John Doe', department: 'Engineering', checkIn: '09:00 AM', checkOut: '06:00 PM', status: 'Present' },
    { id: 2, name: 'Jane Smith', department: 'Marketing', checkIn: '09:15 AM', checkOut: '05:45 PM', status: 'Late' },
    { id: 3, name: 'Mike Johnson', department: 'Sales', checkIn: '09:05 AM', checkOut: '06:10 PM', status: 'Present' },
    { id: 4, name: 'Sarah Williams', department: 'HR', checkIn: '--', checkOut: '--', status: 'On Leave' },
    { id: 5, name: 'David Brown', department: 'Finance', checkIn: '08:55 AM', checkOut: '--', status: 'Working' },
  ];

  const timeFilters = [
    { id: 'today', label: 'Today' },
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
  ];

  return (
    <div className="dashboard-page">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Attendance Dashboard</h1>
          <p>Monitor and manage employee attendance in real-time</p>
        </div>
        <div className="header-actions">
          <div className="date-filter">
            {timeFilters.map(filter => (
              <button
                key={filter.id}
                className={`time-btn ${selectedDate === filter.id ? 'active' : ''}`}
                onClick={() => setSelectedDate(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <button className="export-btn">
            <FiDownload /> Export Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {attendanceStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon-wrapper" style={{ backgroundColor: `${stat.color}20` }}>
              <div style={{ color: stat.color }}>
                {stat.icon}
              </div>
            </div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
              <span className="stat-change">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Attendance Overview */}
        <div className="overview-card">
          <div className="card-header">
            <h3>Attendance Overview</h3>
            <div className="view-toggle">
              <button 
                className={`view-btn ${viewMode === 'daily' ? 'active' : ''}`}
                onClick={() => setViewMode('daily')}
              >
                Daily
              </button>
              <button 
                className={`view-btn ${viewMode === 'weekly' ? 'active' : ''}`}
                onClick={() => setViewMode('weekly')}
              >
                Weekly
              </button>
              <button 
                className={`view-btn ${viewMode === 'monthly' ? 'active' : ''}`}
                onClick={() => setViewMode('monthly')}
              >
                Monthly
              </button>
            </div>
          </div>
          
          <div className="chart-placeholder">
            <div className="placeholder-content">
              <div className="chart-bar" style={{ height: '80%' }}>
                <div className="bar-fill present" style={{ height: '70%' }}></div>
                <span>Mon</span>
              </div>
              <div className="chart-bar" style={{ height: '80%' }}>
                <div className="bar-fill present" style={{ height: '85%' }}></div>
                <span>Tue</span>
              </div>
              <div className="chart-bar" style={{ height: '80%' }}>
                <div className="bar-fill late" style={{ height: '60%' }}></div>
                <span>Wed</span>
              </div>
              <div className="chart-bar" style={{ height: '80%' }}>
                <div className="bar-fill present" style={{ height: '90%' }}></div>
                <span>Thu</span>
              </div>
              <div className="chart-bar" style={{ height: '80%' }}>
                <div className="bar-fill absent" style={{ height: '45%' }}></div>
                <span>Fri</span>
              </div>
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-dot present"></span>
                <span>Present (75%)</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot late"></span>
                <span>Late (15%)</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot absent"></span>
                <span>Absent (10%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Attendance */}
        <div className="attendance-card">
          <div className="card-header">
            <h3>Recent Attendance</h3>
            <button className="filter-btn">
              <FiFilter /> Filter
            </button>
          </div>
          
          <div className="attendance-table">
            <table>
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map(record => (
                  <tr key={record.id}>
                    <td>
                      <div className="employee-cell">
                        <div className="avatar">{record.name.charAt(0)}</div>
                        <span>{record.name}</span>
                      </div>
                    </td>
                    <td>{record.department}</td>
                    <td>{record.checkIn}</td>
                    <td>{record.checkOut}</td>
                    <td>
                      <span className={`status-tag ${record.status.toLowerCase().replace(' ', '-')}`}>
                        {record.status}
                      </span>
                    </td>
                    <td>
                      <button className="view-btn-small">
                        <FiEye /> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;