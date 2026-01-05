import React from 'react';
import './AttendanceTable.css';

const AttendanceTable = () => {
  const employees = [
    { id: 1, name: 'John Smith', department: 'Engineering', status: 'Present', checkIn: '08:45 AM', checkOut: '05:30 PM' },
    { id: 2, name: 'Sarah Johnson', department: 'Marketing', status: 'Present', checkIn: '09:00 AM', checkOut: '05:15 PM' },
    { id: 3, name: 'Michael Brown', department: 'Sales', status: 'Late', checkIn: '09:25 AM', checkOut: '05:45 PM' },
    { id: 4, name: 'Emily Davis', department: 'HR', status: 'On Leave', checkIn: '-', checkOut: '-' },
    { id: 5, name: 'Robert Wilson', department: 'Engineering', status: 'Present', checkIn: '08:50 AM', checkOut: '05:20 PM' },
    { id: 6, name: 'Lisa Anderson', department: 'Finance', status: 'Present', checkIn: '08:55 AM', checkOut: '05:40 PM' },
    { id: 7, name: 'David Miller', department: 'Operations', status: 'Absent', checkIn: '-', checkOut: '-' },
    { id: 8, name: 'David Miller', department: 'Operations', status: 'Absent', checkIn: '-', checkOut: '-' },
    { id: 9, name: 'David Miller', department: 'Operations', status: 'Absent', checkIn: '-', checkOut: '-' },
    { id: 10, name: 'David Miller', department: 'Operations', status: 'Absent', checkIn: '-', checkOut: '-' },
   

  ];

  const getStatusClass = (status) => {
    switch(status) {
      case 'Present': return 'status-present';
      case 'Late': return 'status-late';
      case 'Absent': return 'status-absent';
      case 'On Leave': return 'status-leave';
      default: return '';
    }
  };

  return (
    <div className="attendance-table">
      <div className="table-header">
        <h3>Today's Attendance</h3>
        <button className="export-btn">Export Data</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Department</th>
              <th>Status</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <div className="employee-info">
                    <div className="employee-avatar">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="employee-name">{employee.name}</div>
                  </div>
                </td>
                <td>{employee.department}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(employee.status)}`}>
                    {employee.status}
                  </span>
                </td>
                <td>{employee.checkIn}</td>
                <td>{employee.checkOut}</td>
                <td>
                  <button className="action-btn view-btn">View</button>
                  <button className="action-btn edit-btn">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-footer">
        <div className="table-summary">
          Showing 8 of 42 employees
        </div>
        <div className="table-pagination">
          <button className="pagination-btn prev">Previous</button>
          <span className="page-numbers">1 of 6</span>
          <button className="pagination-btn next">Next</button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTable;