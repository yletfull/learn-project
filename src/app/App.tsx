import React, { Suspense } from 'react';
import './styles/index.scss';
import Navbar from 'widgets/Navbar';
import Sidebar from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

function App() {
  return (
    <div className="app">
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
