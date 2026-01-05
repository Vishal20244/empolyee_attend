import React from 'react';
import DashboardCards from '../../components/DashboardCard/DashboardCards';
import AttendanceChart from '../../components/AttendanceChart/AttendanceChart';
import AttendanceTable from '../../components/AttendanceTable/AttendanceTable';
import '../DashboardCard/DashboardCards.css'

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back! Here's what's happening with your attendance system.</p>
      </div>

      <div className="maintenance-banner">            

        <span className="warning-icon">⚠️</span>
        <span>This dashboard is under maintenance! Some features may be limited.</span>
      </div>

      <DashboardCards />

      <div className="dashboard-content">
        <div className="chart-section">
          <AttendanceChart />
        </div>
        <div className="todo-section">
       
        </div>
      </div>

      <div className="table-section">
        <AttendanceTable />
      </div>
    </div>
  );
};

export default Dashboard;