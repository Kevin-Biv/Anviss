import css from './App.module.css';
import React from 'react';
import Home from './Home';
import Header from './Header';
import LandingPage from './LandingPage';
import StoreContextProvider from 'contexts/StoreContext';
import {
  MemoryRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <StoreContextProvider>
        <div className={css.container}>
          <Header />
          <main>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/:buildingId" element={<Home />} />
            </Routes>
          </main>
        </div>
      </StoreContextProvider>
    </Router>
  );
}

export default App;
