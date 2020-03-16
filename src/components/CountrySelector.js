import React, { useState } from 'react';
import { useStats } from '../lib/getStats';
import { Stats } from './Stats';

export function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('GBR');
  if (loading) return <p><span role="img" aria-label="mask-emoji">😷</span>Loading...</p>;
  if (error) return <p>`Ruh-roh! You have encountered an error: ${error}`</p>;

  return (
    <div  className="mx1">
      <h2>Currently Showing {selectedCountry}</h2>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => (
          <option
            selected={selectedCountry === countries.iso3[code]}
            key={code}
            value={code}
          >
            {country}
          </option>
        ))}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
}
