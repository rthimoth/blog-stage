import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/header';
import Home from './pages/homePage';
import CV from './pages/cv';
import Portfolio from './pages/portfolio';

function App() {
  return (
    <Router>
      <Header />
      <div>
        {/* <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/cv">CV</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
