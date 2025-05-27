import React, { useState } from 'react';
import RFQCard from './RFQCard';

const Main = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('all');

  const filteredData = data.filter(rfq => {
    const matchesSearch = rfq.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = status === 'all' || rfq.status === status;
    return matchesSearch && matchesStatus;
  });

  return (
    <main>
      <div className="controls">
        <input type="search" placeholder="Search RFQs by product, category..." onChange={e => setSearchTerm(e.target.value)} />
        <select onChange={e => setStatus(e.target.value)}>
          <option value="all">All Statuses</option>
          <option value="Open">Open</option>
          <option value="Pending">Pending</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      <div className="rfq-cards">
        {filteredData.length > 0 ? (
          filteredData.map(rfq => <RFQCard key={rfq.id} rfq={rfq} />)
        ) : (
          <div>No RFQs found matching your criteria</div>
        )}
      </div>
    </main>
  );
};

export default Main;
