import React from 'react';
import './DashboardCards.css';

const DashboardCards = () => {
  const cards = [
    {
      id: 1,
      title: 'Total Employees',
      value: '42',
      icon: '👥',
      color: '#3498db',
      change: '+2 this month'
    },
    {
      id: 2,
      title: 'Present Today',
      value: '38',
      icon: '✅',
      color: '#2ecc71',
      change: '90.5% attendance'
    },
    {
      id: 3,
      title: 'On Leave',
      value: '3',
      icon: '🏖️',
      color: '#e74c3c',
      change: '7.1% of staff'
    },
    {
      id: 4,
      title: 'Late Arrivals',
      value: '1',
      icon: '⏰',
      color: '#f39c12',
      change: '2.4% of staff'
    }
  ];

  return (
    <div className="dashboard-cards">
      {cards.map((card) => (
        <div className="card" key={card.id} style={{ borderTopColor: card.color }}>
          <div className="card-content">
            <div className="card-icon" style={{ backgroundColor: card.color }}>
              {card.icon}
            </div>
            <div className="card-details">
              <div className="card-title">{card.title}</div>
              <div className="card-value">{card.value}</div>
              <div className="card-change">{card.change}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;