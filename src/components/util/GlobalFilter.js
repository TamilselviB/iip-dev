import React from 'react';

function GlobalFilter({ filter, setFilter }) {
  return (
    <div style={{ marginBottom: '5px' }}>
      <span style={{ fontSize: '18px', color: '#F04763' }}>
        Search &nbsp;{''}
        <input
          value={filter || ''}
          onChange={e => setFilter(e.target.value)}
          style={{ height: '40px', width: '341px', borderRadius: '4px', border: '2px solid' }}
        />
      </span>
    </div>
  );
}

export default GlobalFilter;
