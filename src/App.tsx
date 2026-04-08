import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';

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
    <SEO />
    <Hero />
    <Pillars />
    <AboutSection />
    <EngagementSection />
  </>
);
const Services = () => <><SEO title="Services | LatentIQ" description="Explore our AI and Data consulting services." url="https://latentiq.com/services" /><ServicesPage /></>;
const About = () => <><SEO title="About Us | LatentIQ" description="Learn about LatentIQ's mission and expertise." url="https://latentiq.com/about" /><AboutSection /></>;
const Team = () => <><SEO title="Our Team | LatentIQ" description="Meet the people driving AI innovation at LatentIQ." url="https://latentiq.com/team" /><TeamPage /></>;
const Careers = () => <><SEO title="Careers | LatentIQ" description="Join LatentIQ and build the future of AI." url="https://latentiq.com/careers" /><CareersPage /></>;
const Contact = () => <><SEO title="Contact Us | LatentIQ" description="Get in touch with LatentIQ for consulting and solutions." url="https://latentiq.com/contact" /><ContactPage /></>;
const PrivacyPolicyView = () => <><SEO title="Privacy Policy | LatentIQ" url="https://latentiq.com/privacy-policy" /><PrivacyPolicyPage /></>;
const TermsOfServiceView = () => <><SEO title="Terms of Service | LatentIQ" url="https://latentiq.com/terms-of-service" /><TermsOfServicePage /></>;

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
            <Route path="/privacy-policy" element={<PrivacyPolicyView />} />
            <Route path="/terms-of-service" element={<TermsOfServiceView />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
