import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Global Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import Components
import PortfolioNavbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactUS from './components/pages/ContactUs';

// Set the base URL for the router.
// process.env.PUBLIC_URL is the value you set in the "homepage" field in package.json
// (e.g., /PersonalPortfolio). This is crucial for subdirectories like GitHub Pages.
const BASE_PATH = process.env.PUBLIC_URL || '';

function App() {
  return (
    // We add the 'basename' prop to tell the router that the app lives in a subdirectory.
    <Router basename={BASE_PATH}>
      {/* The Navbar should always be outside of the <Routes> so it always shows */}
      <PortfolioNavbar />

      {/* This main container helps ensure the content is visible below the navbar */}
      <main>
        <Routes>
          {/* The path="/" now correctly refers to the root of the BASE_PATH,
              which is /PersonalPortfolio/. */}
          <Route path="/" element={<Home />} />

          {/* Ensure child paths are defined correctly */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUS />} />

          {/* Optional: Add a catch-all 404 route at the very end.
            <Route path="*" element={<NotFound />} />
          */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
