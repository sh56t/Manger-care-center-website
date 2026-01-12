import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { Donors } from './pages/Sponsors';
import { GetInvolved } from './pages/GetInvolved';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Impact } from './pages/Impact';
import { AnnualReport } from './pages/AnnualReport';
import { ReferralGuidelines } from './pages/ReferralGuidelines';
import { WhatsAppButton } from './components/WhatsAppButton';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Redirects to the home page when the app first loads
const InitialRedirect = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Navigate to root '/' on mount
    navigate('/');
  }, []); // Empty dependency array means this runs once on mount

  return null;
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <InitialRedirect />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/annual-report" element={<AnnualReport />} />
            <Route path="/referral-guidelines" element={<ReferralGuidelines />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
};

export default App;