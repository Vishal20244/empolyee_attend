import React from 'react';
import '../AttendancePage/AttendancePage.css';

const Attendance = () => {
  return (
    <div className="attendance-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Attendance Management</h1>
          <p>View and manage employee attendance records</p>
        </div>
        <button className="primary-btn">Mark Attendance</button>
      </div>

      <div className="attendance-content">
        <div className="attendance-card">
          <div className="card-header">
            <h3>Today's Attendance</h3>
            <span className="date">November 23, 2024</span>
          </div>
          <div className="attendance-stats">
            <div className="stat-item">
              <div className="stat-value">38</div>
              <div className="stat-label">Present</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3</div>
              <div className="stat-label">Absent</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">1</div>
              <div className="stat-label">Late</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">2</div>
              <div className="stat-label">On Leave</div>
            </div>
          </div>
        </div>

        <div className="attendance-table-card">
          <div className="table-header">
            <h3>Recent Attendance Records</h3>
            <button className="secondary-btn">View All</button>
          </div>
          <div className="table-container">
            <table className="attendance-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>Total Hours</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>09:00 AM</td>
                  <td>06:00 PM</td>
                  <td>9.0 hrs</td>
                  <td><span className="status present">Present</span></td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>09:15 AM</td>
                  <td>06:00 PM</td>
                  <td>8.75 hrs</td>
                  <td><span className="status late">Late</span></td>
                </tr>
                <tr>
                  <td>Mike Johnson</td>
                  <td>-</td>
                  <td>-</td>
                  <td>0 hrs</td>
                  <td><span className="status absent">Absent</span></td>
                </tr>
                <tr>
                  <td>Sarah Williams</td>
                  <td>09:00 AM</td>
                  <td>05:30 PM</td>
                  <td>8.5 hrs</td>
                  <td><span className="status present">Present</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;