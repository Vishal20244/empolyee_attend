import React, { useEffect } from 'react';
import DashboardCards from '../components/DashboardCard/DashboardCards';
import AttendanceChart from '../components/AttendanceChart/AttendanceChart';
import TodoList from '../components/TodoList/TodoList';
import AttendanceTable from '../components/AttendanceTable/AttendanceTable';
import { FiAlertTriangle, FiTrendingUp, FiUsers, FiDownload, FiCalendar, FiClock } from 'react-icons/fi';
import { FaChartLine, FaUserPlus } from 'react-icons/fa';

const Dashboard = () => {

  useEffect(() => {
   
  }, []);

  const recentActivities = [
    { id: 1, user: 'John Smith', action: 'Checked in', time: '08:45 AM', status: 'success' },
    { id: 2, user: 'Sarah Johnson', action: 'Checked out', time: '05:15 PM', status: 'info' },
    { id: 3, user: 'Michael Brown', action: 'Late arrival', time: '09:25 AM', status: 'warning' },
    { id: 4, user: 'Emily Davis', action: 'Leave request', time: '10:00 AM', status: 'info' },
  ];

  return (
    <>
     
    
      
      <DashboardCards />
      
      <div className="chart-todo-container">
        <div className="chart-section">
          <div className="section-header">
            <h3><FiTrendingUp /> Weekly Attendance Analytics</h3>
            <select className="time-selector">
              <option>This Week</option>
              <option>Last Week</option>
              <option>This Month</option>
            </select>
          </div>
          <AttendanceChart />
        </div>
        
        <div className="todo-section">
          <div className="section-header">
            <h3><FiUsers /> Recent Activities</h3>
            <span className="badge">{recentActivities.length} new</span>
          </div>
          <div className="activities-list">
            {recentActivities.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  <div className={`status-indicator ${activity.status}`}></div>
                </div>
                <div className="activity-content">
                  <div className="activity-header">
                    <span className="activity-user">{activity.user}</span>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                  <p className="activity-action">{activity.action}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="view-all-btn">View All Activities →</button>
        </div>
      </div>
      
      <div className="table-section">
        <div className="section-header">
          <h3>Today's Attendance Overview</h3>
          <button className="export-btn">
            <FiDownload /> Export CSV
          </button>
        </div>
        <AttendanceTable />
      </div>
    </>
  );
};

export default Dashboard;