import React from 'react';
import { FiDownload, FiPrinter, FiFilter } from 'react-icons/fi';
import '../ReportPage/ReportsPage.css';

const Reports = () => {
  const reports = [
    { id: 1, name: 'Monthly Attendance Report', date: 'Nov 2024', type: 'PDF', size: '2.4 MB' },
    { id: 2, name: 'Employee Performance Report', date: 'Oct 2024', type: 'Excel', size: '3.1 MB' },
    { id: 3, name: 'Leave Analysis Report', date: 'Oct 2024', type: 'PDF', size: '1.8 MB' },
    { id: 4, name: 'Department-wise Report', date: 'Sep 2024', type: 'Excel', size: '4.2 MB' },
  ];

  return (
    <div className="reports-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Attendance Reports</h1>
          <p>Generate and view attendance reports</p>
        </div>
        <button className="primary-btn">Generate Report</button>
      </div>

      <div className="reports-content">
        <div className="reports-actions">
          <div className="search-filter">
            <input type="text" placeholder="Search reports..." />
            <button className="secondary-btn">
              <FiFilter /> Filter
            </button>
          </div>
          
          <div className="export-actions">
            <button className="secondary-btn">
              <FiDownload /> Export All
            </button>
            <button className="secondary-btn">
              <FiPrinter /> Print
            </button>
          </div>
        </div>

        <div className="reports-grid">
          {reports.map(report => (
            <div key={report.id} className="report-card">
              <div className="report-icon">
                {report.type === 'PDF' ? '📄' : '📊'}
              </div>
              <div className="report-info">
                <h4>{report.name}</h4>
                <div className="report-meta">
                  <span className="report-date">{report.date}</span>
                  <span className="report-type">{report.type}</span>
                  <span className="report-size">{report.size}</span>
                </div>
              </div>
              <div className="report-actions">
                <button className="action-btn view">View</button>
                <button className="action-btn download">Download</button>
              </div>
            </div>
          ))}
        </div>

        <div className="report-types">
          <h3>Available Report Types</h3>
          <div className="type-cards">
            <div className="type-card">
              <div className="type-icon">📊</div>
              <h4>Monthly Reports</h4>
              <p>Detailed monthly attendance analysis</p>
            </div>
            <div className="type-card">
              <div className="type-icon">👥</div>
              <h4>Department Reports</h4>
              <p>Department-wise attendance breakdown</p>
            </div>
            <div className="type-card">
              <div className="type-icon">📈</div>
              <h4>Performance Reports</h4>
              <p>Employee performance metrics</p>
            </div>
            <div className="type-card">
              <div className="type-icon">🏖️</div>
              <h4>Leave Reports</h4>
              <p>Leave analysis and patterns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;