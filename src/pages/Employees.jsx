import React, { useState } from 'react';
import AttendanceTable from '../components/AttendanceTable/AttendanceTable';
import {
  FiUsers,
  FiUserCheck,
  FiUserX,
  FiUserPlus,
  FiSearch,
  FiFilter,
  FiDownload,
  FiUpload,
  FiEdit,
  FiTrash2,
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiStar,
  FiMoreVertical
} from 'react-icons/fi';
import { FaUserTie, FaBirthdayCake, FaIdBadge } from 'react-icons/fa';

const Employees = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const employeeStats = [
    { 
      label: 'Total Employees', 
      value: '42', 
      color: 'var(--primary)', 
      icon: <FiUsers />,
      trend: '+2 this month'
    },
    { 
      label: 'Active Today', 
      value: '38', 
      color: 'var(--success)', 
      icon: <FiUserCheck />,
      trend: '90.5% attendance'
    },
    { 
      label: 'On Leave', 
      value: '3', 
      color: 'var(--warning)', 
      icon: <FiUserX />,
      trend: '7.1% of staff'
    },
    { 
      label: 'New This Month', 
      value: '2', 
      color: 'var(--info)', 
      icon: <FiUserPlus />,
      trend: '4.8% growth'
    }
  ];

  const departments = [
    { id: 'all', label: 'All Departments', count: 42 },
    { id: 'engineering', label: 'Engineering', count: 15, color: '#3498db' },
    { id: 'marketing', label: 'Marketing', count: 8, color: '#2ecc71' },
    { id: 'sales', label: 'Sales', count: 10, color: '#e74c3c' },
    { id: 'hr', label: 'Human Resources', count: 5, color: '#9b59b6' },
    { id: 'finance', label: 'Finance', count: 4, color: '#f39c12' },
  ];


  return (
    <div className="page-content">
      <div className="page-header glass-effect">
        <div className="header-content">
          <h1>Employee Directory</h1>
          <p>Manage employee profiles, roles, and department assignments</p>
        </div>
        <button className="add-employee-btn gradient-primary">
          <FiUserPlus /> Add New Employee
        </button>
      </div>
      
      <div className="cards-row">
        {employeeStats.map((item, index) => (
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
              <div className="stat-trend">
                {item.trend}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="employee-management">
        <div className="management-header">
          <div className="department-filters">
            {departments.map(dept => (
              <button
                key={dept.id}
                className={`department-btn ${activeTab === dept.id ? 'active' : ''}`}
                onClick={() => setActiveTab(dept.id)}
                style={dept.color ? { '--dept-color': dept.color } : {}}
              >
                <span className="dept-label">{dept.label}</span>
                <span className="dept-count">{dept.count}</span>
              </button>
            ))}
          </div>
          
          <div className="management-actions">
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search employees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <button className="action-btn outline">
              <FiFilter /> Filter
            </button>
            <button className="action-btn outline">
              <FiDownload /> Export
            </button>
            <button className="action-btn outline">
              <FiUpload /> Import
            </button>
          </div>
        </div>
        
        <div className="employee-content">
          <div className="employee-table-section">
            <div className="section-header">
              <h3>Employee Directory</h3>
              <span className="result-count">Showing {departments.find(d => d.id === activeTab)?.count || 42} employees</span>
            </div>
            <div className="table-container fade-in">
              <AttendanceTable />
            </div>
          </div>
          
          {/* <div className="employee-sidebar"> */}
            {/* <div className="sidebar-section top-performers">
              <h3><FiStar /> Top Performers</h3>
              <div className="performers-list">
                {topPerformers.map(performer => (
                  <div key={performer.id} className="performer-card">
                    <div className="performer-avatar">
                      {performer.avatar}
                    </div>
                    <div className="performer-info">
                      <h4>{performer.name}</h4>
                      <p>{performer.role}</p>
                      <div className="performer-stats">
                        <span className="attendance-stat">
                          <FiUserCheck /> {performer.attendance}
                        </span>
                        <span className="rating-stat">
                          <FiStar /> {performer.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
             */}
            {/* <div className="sidebar-section quick-actions">
              <h3>Quick Actions</h3>
              <div className="quick-action-buttons">
                <button className="quick-action-btn">
                  <FiMail /> Send Email
                </button>
                <button className="quick-action-btn">
                  <FiEdit /> Bulk Edit
                </button>
                <button className="quick-action-btn">
                  <FiTrash2 /> Delete Selected
                </button>
                <button className="quick-action-btn">
                  <FaIdBadge /> Generate IDs
                </button>
              </div>
            </div>
             */}
            {/* <div className="sidebar-section birthdays">
              <h3><FaBirthdayCake /> Upcoming Birthdays</h3>
              <div className="birthday-list">
                <div className="birthday-item">
                  <div className="birthday-avatar">MB</div>
                  <div className="birthday-info">
                    <h4>Michael Brown</h4>
                    <p>Tomorrow • Sales</p>
                  </div>
                </div>
                <div className="birthday-item">
                  <div className="birthday-avatar">SJ</div>
                  <div className="birthday-info">
                    <h4>Sarah Johnson</h4>
                    <p>Dec 25 • Marketing</p>
                  </div>
                </div>
              </div>
            </div>
             */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Employees;