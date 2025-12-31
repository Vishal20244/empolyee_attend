import React, { useState } from 'react';

const Reports = () => {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className="page-content">
      <div className="reports-header">
        <div>
          <h1>Attendance Reports</h1>
          <p>Generate, view and analyze detailed attendance reports</p>
        </div>
        <button className="generate-report-btn">
          📄 Generate Custom Report
        </button>
      </div>
      
      <div className="reports-stats">
        <div className="report-stat-card">
          <div className="report-stat-icon">📄</div>
          <div className="report-stat-content">
            <div className="report-stat-label">Monthly Report</div>
            <div className="report-stat-value ready">Ready</div>
            <div className="report-progress">
              <div className="progress-bar" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="report-stat-card">
          <div className="report-stat-icon">📊</div>
          <div className="report-stat-content">
            <div className="report-stat-label">Weekly Report</div>
            <div className="report-stat-value pending">Pending</div>
            <div className="report-progress">
              <div className="progress-bar" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="report-stat-card">
          <div className="report-stat-icon">⏰</div>
          <div className="report-stat-content">
            <div className="report-stat-label">Late Report</div>
            <div className="report-stat-value">3 Items</div>
            <div className="report-progress">
              <div className="progress-bar" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="report-stat-card">
          <div className="report-stat-icon">📈</div>
          <div className="report-stat-content">
            <div className="report-stat-label">Overtime Report</div>
            <div className="report-stat-value ready">Ready</div>
            <div className="report-progress">
              <div className="progress-bar" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="reports-controls">
        <div className="view-controls">
          <button 
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            ⏹️ Grid
          </button>
          <button 
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            📋 List
          </button>
        </div>
        
        <div className="search-controls">
          <div className="report-search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search reports..."
              className="search-input"
            />
          </div>
          <button className="action-btn">⚙️ Filter</button>
          <button className="action-btn">🔄 Refresh</button>
        </div>
      </div>
      
      <div className="reports-section">
        <div className="section-header">
          <h3>Available Reports</h3>
          <div className="section-info">
            <span className="results-count">6 reports available</span>
            <select className="sort-select">
              <option>Sort by: Date</option>
              <option>Sort by: Name</option>
              <option>Sort by: Downloads</option>
            </select>
          </div>
        </div>
        
        <div className={`reports-grid ${viewMode}`}>
          <div className="report-card">
            <div className="report-card-header">
              <div className="report-icon">📊</div>
              <div className="report-actions">
                <button className="star-btn">★</button>
                <button className="more-btn">⋮</button>
              </div>
            </div>
            <div className="report-card-body">
              <h4>Monthly Attendance</h4>
              <p>Complete monthly attendance summary with analytics</p>
              <div className="report-meta">
                <span className="meta-item">📅 Dec 1, 2023</span>
                <span className="meta-item">PDF • 2.4 MB</span>
              </div>
              <div className="report-stats">
                <span className="stat-item">📥 124 downloads</span>
              </div>
            </div>
            <div className="report-card-footer">
              <button className="footer-btn primary">👁️ Preview</button>
              <button className="footer-btn">📥 Download</button>
              <button className="footer-btn">↗️ Share</button>
            </div>
          </div>
          
          <div className="report-card">
            <div className="report-card-header">
              <div className="report-icon">⏰</div>
              <div className="report-actions">
                <button className="star-btn">☆</button>
                <button className="more-btn">⋮</button>
              </div>
            </div>
            <div className="report-card-body">
              <h4>Late Arrivals</h4>
              <p>Detailed report on employee late arrivals patterns</p>
              <div className="report-meta">
                <span className="meta-item">📅 Nov 28, 2023</span>
                <span className="meta-item">Excel • 1.8 MB</span>
              </div>
              <div className="report-stats">
                <span className="stat-item">📥 89 downloads</span>
              </div>
            </div>
            <div className="report-card-footer">
              <button className="footer-btn primary">👁️ Preview</button>
              <button className="footer-btn">📥 Download</button>
              <button className="footer-btn">↗️ Share</button>
            </div>
          </div>
          
          <div className="report-card">
            <div className="report-card-header">
              <div className="report-icon">📅</div>
              <div className="report-actions">
                <button className="star-btn">★</button>
                <button className="more-btn">⋮</button>
              </div>
            </div>
            <div className="report-card-body">
              <h4>Leave Analysis</h4>
              <p>Analysis of employee leave patterns and trends</p>
              <div className="report-meta">
                <span className="meta-item">📅 Nov 25, 2023</span>
                <span className="meta-item">PDF • 3.2 MB</span>
              </div>
              <div className="report-stats">
                <span className="stat-item">📥 67 downloads</span>
              </div>
            </div>
            <div className="report-card-footer">
              <button className="footer-btn primary">👁️ Preview</button>
              <button className="footer-btn">📥 Download</button>
              <button className="footer-btn">↗️ Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;