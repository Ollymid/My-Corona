import React from 'react';
import { Stats } from './components/Stats';
import { CountrySelector } from './components/CountrySelector';

import './App.css';

export function App() {
  return (
    <div className="app">
      <header className="app-header">
        COVID-19 Tracker
      </header>
      <h3>Coronavirus Global Total:</h3>
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>

      <img src="https://covid19.mathdro.id/api/og" className="app-image" alt="covid-chart" />
    </div>
  );
}
