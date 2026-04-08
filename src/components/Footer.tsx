import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* ... inside component return */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="mb-6 block inline-block">
                            <Logo variant="typographic" className="h-8" />
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-8">
                            Helping businesses act earlier through intelligence, automation, and technology.
                            We design systems that help leaders see clearly, decide faster, and grow predictably.
                        </p>
                        <div className="flex gap-4">
                            <a href="mailto:hr@latentiq.ai" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Capabilities</h4>
                        <ul className="space-y-4">
                            <li><Link to="/services?category=data-ai" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary transition-colors">Data & AI</Link></li>
                            <li><Link to="/services?category=web-app" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary transition-colors">Web & App</Link></li>
                            <li><Link to="/services?category=design" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary transition-colors">Design</Link></li>
                            <li><Link to="/services?category=marketing" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary transition-colors">Marketing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/team" className="text-gray-400 hover:text-primary transition-colors">Our Team</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link to="/careers" className="text-gray-400 hover:text-primary transition-colors">Careers</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} LatentIQ. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
