import React from 'react';
import { Stats } from './components/Stats';
import { CountrySelector } from './components/CountrySelector';

import './App.css';

export function App() {
  return (
    <div className="app">
      <header className="app-header mb0">
        <h2>COVID-19 Tracker</h2>
      </header>
      <h3 className="mt0">Coronavirus Global Total:</h3>
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
      <img src="https://covid19.mathdro.id/api/og" className="app-image" alt="covid-chart" />
      <footer class="app-footer">
        <span class="ackno">API provided by <a className="ack-link" href="https://github.com/mathdroid/covid-19-api">@mathdroid</a></span>
        <span class="ackno">This was created in a code-along with the legendary <a className="ack-link" href="https://www.youtube.com/watch?v=B85s0cjlitE">Wes Bos</a></span>
      </footer>
    </div>
  );
}
