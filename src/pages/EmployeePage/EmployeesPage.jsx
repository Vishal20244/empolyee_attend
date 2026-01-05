import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../EmployeePage/EmployeesPage.css'
import '../AddEmployee/AddEmployee'
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
  FiEye
} from 'react-icons/fi';
import './EmployeesPage.css';

const Employees = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const employeeStats = [
    {
      label: 'Total Employees',
      value: '42',
      color: '#667eea',
      icon: <FiUsers />,
      trend: '+2 this month'
    },
    {
      label: 'Active Today',
      value: '38',
      color: '#10b981',
      icon: <FiUserCheck />,
      trend: '90.5% attendance'
    },
    {
      label: 'On Leave',
      value: '3',
      color: '#f59e0b',
      icon: <FiUserX />,
      trend: '7.1% of staff'
    },
    {
      label: 'New This Month',
      value: '2',
      color: '#3b82f6',
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

  const employees = [
    { id: 1, name: 'John Doe', email: 'john@example.com', department: 'Engineering', status: 'Active', joinDate: '2023-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'Marketing', status: 'Active', joinDate: '2023-02-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', department: 'Sales', status: 'On Leave', joinDate: '2023-03-10' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', department: 'HR', status: 'Active', joinDate: '2023-04-05' },
    { id: 5, name: 'David Brown', email: 'david@example.com', department: 'Finance', status: 'Active', joinDate: '2023-05-12' },
  ];

  const handleAddEmployee = () => {
    navigate('/add-employee');
  };

  const handleViewEmployee = (id) => {
    navigate(`employee${id}`);
  };

  const handleEditEmployee = (id) => {
    navigate(`employee/edit/${id}`);
  };

  const handleDeleteEmployee = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      console.log('Deleting employee:', id);
    }
  };

  return (
    <div className="employees-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Employee Directory</h1>
          <p>Manage employee profiles, roles, and department assignments</p>
        </div>
        <button className="primary-btn" onClick={handleAddEmployee}>
          <FiUserPlus /> Add New Employee
        </button>
      </div>

      <div className="stats-cards">
        {employeeStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
              <span className="stat-trend">{stat.trend}</span>
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
              />
            </div>
            <button className="secondary-btn">
              <FiFilter /> Filter
            </button>
            <button className="secondary-btn">
              <FiDownload /> Export
            </button>
            <button className="secondary-btn">
              <FiUpload /> Import
            </button>
          </div>
        </div>

        <div className="employee-table-container">
          <div className="table-header">
            <h3>Employee Directory</h3>
            <span className="result-count">Showing {employees.length} employees</span>
          </div>
          
          <div className="table-responsive">
            <table className="employee-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Join Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(employee => (
                  <tr key={employee.id}>
                    <td>
                      <div className="employee-info">
                        <div className="avatar">
                          {employee.name.charAt(0)}
                        </div>
                        <div>
                          <div className="name">{employee.name}</div>
                          <div className="email">{employee.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{employee.department}</td>
                    <td>
                      <span className={`status-badge ${employee.status.toLowerCase().replace(' ', '-')}`}>
                        {employee.status}
                      </span>
                    </td>
                    <td>{employee.joinDate}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn view" onClick={() => handleViewEmployee(employee.id)}>
                          <FiEye />
                        </button>
                        <button className="action-btn edit" onClick={() => handleEditEmployee(employee.id)}>
                          <FiEdit />
                        </button>
                        <button className="action-btn delete" onClick={() => handleDeleteEmployee(employee.id)}>
                          <FiTrash2 />
                        </button>
                      </div>
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

export default Employees;