import React from 'react';
import { useStats } from '../lib/getStats';

export function Stats({ url }) {
  const { stats, loading, error } = useStats(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div className="stats-table__grid mb3 mx1">
      <div className="stats-table__grid-item">
        <h3>Confirmed</h3>
        <span className="mr1" role="img" aria-label="mask-emoji">🦠</span>
        <span>{stats.confirmed ? stats.confirmed.value: 0}</span>
      </div>
      <div className="stats-table__grid-item">
        <h3>Deaths</h3>
        <span className="mr1" role="img" aria-label="mask-emoji">☠️</span>
        <span>{stats.deaths ? stats.deaths.value : 0}</span>
      </div>
      <div className="stats-table__grid-item">
        <h3>Recovered</h3>
        <span className="mr1" role="img" aria-label="mask-emoji">💉</span>
        <span>{stats.recovered ? stats.recovered.value: 0}</span>
      </div>
    </div>
  );
}
