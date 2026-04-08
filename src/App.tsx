import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Placeholder components for routing
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import AboutSection from './components/AboutSection';
import EngagementSection from './components/EngagementSection';
import ServicesPage from './components/Services';
import ContactPage from './components/Contact';

import TeamPage from './components/Team';
import CareersPage from './components/Careers';
import PrivacyPolicyPage from './components/PrivacyPolicy';
import TermsOfServicePage from './components/TermsOfService';

const Home = () => (
  <>
    <Hero />
    <Pillars />
    <AboutSection />
    <EngagementSection />
  </>
);
const Services = () => <ServicesPage />;
const About = () => <AboutSection />;
const Team = () => <TeamPage />;
const Careers = () => <CareersPage />;
const Contact = () => <ContactPage />;

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-background min-h-screen text-white font-sans selection:bg-primary/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
