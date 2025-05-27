import React from 'react';

const RFQCard = ({ rfq }) => {
  return (
    <div className="rfq-card">
      <div className="badge">{rfq.status}</div>
      <img src={`https://source.unsplash.com/random/600x400/?${rfq.image}`} alt={rfq.title} />
      <div className="title">{rfq.title}</div>
      <div className="info">{rfq.description}</div>
      <div className="info"><strong>Expires:</strong> {new Date(rfq.expiry).toLocaleDateString()}</div>
      <div className="info"><strong>Quotes Received:</strong> {rfq.quotes}</div>
      {rfq.status === 'Open' ? (
        <a href={`submit-quote.html?rfqId=${rfq.id}`} className="quote-btn">Submit Quote</a>
      ) : (
        <button className="quote-btn" disabled>{rfq.status}</button>
      )}
    </div>
  );
};

export default RFQCard;
