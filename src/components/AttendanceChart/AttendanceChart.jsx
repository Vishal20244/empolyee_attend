import React from 'react';
import './AttendanceChart.css';

const AttendanceChart = () => {
  // Mock data for attendance chart
  const attendanceData = [
    { day: 'Mon', present: 40, absent: 2 },
    { day: 'Tue', present: 38, absent: 4 },
    { day: 'Wed', present: 42, absent: 0 },
    { day: 'Thu', present: 39, absent: 3 },
    { day: 'Fri', present: 41, absent: 1 },
    { day: 'Sat', present: 20, absent: 22 },
    { day: 'Sun', present: 5, absent: 37 },
  ];

  const maxAttendance = Math.max(...attendanceData.map(d => d.present + d.absent));

  return (
    <div className="attendance-chart">
      <div className="chart-header">
        <h3>Weekly Attendance</h3>
        <select className="time-selector">
          <option>This Week</option>
          <option>Last Week</option>
          <option>This Month</option>
        </select>
      </div>
      <div className="chart-container">
        <div className="chart-bars">
          {attendanceData.map((data, index) => {
            const presentPercentage = (data.present / maxAttendance) * 100;
            const absentPercentage = (data.absent / maxAttendance) * 100;
            
            return (
              <div key={index} className="bar-column">
                <div className="bar-label">{data.day}</div>
                <div className="bar-container">
                  <div 
                    className="bar present-bar" 
                    style={{ height: `${presentPercentage}%` }}
                    title={`Present: ${data.present}`}
                  ></div>
                  <div 
                    className="bar absent-bar" 
                    style={{ height: `${absentPercentage}%` }}
                    title={`Absent: ${data.absent}`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-color present"></span>
          <span>Present</span>
        </div>
        <div className="legend-item">
          <span className="legend-color absent"></span>
          <span>Absent</span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceChart;