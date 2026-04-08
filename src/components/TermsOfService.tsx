import { motion } from 'framer-motion';
import { FileText, CheckCircle2, ShieldAlert, Scale, Globe, Mail, ArrowRight } from 'lucide-react';

const TermsOfService = () => {
    const sections = [
        { id: "nature", title: "1. Services" },
        { id: "supremacy", title: "2. Supremacy" },
        { id: "scope", title: "3. Scope" },
        { id: "obligations", title: "4. Obligations" },
        { id: "ip", title: "5. Intellectual Property" },
        { id: "data", title: "6. Data" },
        { id: "confidentiality", title: "7. Confidentiality" },
        { id: "commercials", title: "8. Payments" },
        { id: "warranty", title: "9. Warranty" },
        { id: "liability", title: "10. Liability" },
        { id: "contact", title: "16. Contact" }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 bg-background text-gray-300 relative selection:bg-primary/30">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 opacity-50"></div>

            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-6">
                        <Scale size={14} />
                        <span>Legal Agreement</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Terms of Service</h1>
                    <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2"><FileText size={16} /> Effective: 09 Feb 2025</span>
                        <span className="flex items-center gap-2"><Globe size={16} /> Global</span>
                    </div>
                </motion.div>

                {/* Quick Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
                >
                    <h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Navigation</h5>
                    <div className="flex flex-wrap gap-3">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="px-4 py-2 rounded-lg bg-black/20 hover:bg-primary/20 hover:text-primary border border-white/5 transition-all text-sm whitespace-nowrap"
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-16"
                >
                    {/* Introduction */}
                    <div className="prose prose-invert max-w-none prose-lg">
                        <p className="lead text-xl text-gray-200 leading-relaxed">
                            These Terms of Service govern the access to and use of Latentiq’s website, platforms, software systems, analytics solutions, AI systems, dashboards, and professional services.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 border-y border-white/10 py-8">
                        <div>
                            <h4 className="text-white font-semibold mb-2 text-sm uppercase text-gray-500">Legal Entity</h4>
                            <p className="text-lg text-white">Latentiq</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2 text-sm uppercase text-gray-500">Contact</h4>
                            <a href="mailto:hr@latentiq.ai" className="text-lg text-primary hover:text-white transition-colors flex items-center gap-2">
                                hr@latentiq.ai <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                    <section id="nature" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-white mb-6">1. Nature of Services</h2>
                        <p className="text-gray-300 mb-6">Latentiq is a data science–led AI intelligence and software engineering company providing:</p>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {['Analytics & decision intelligence', 'Predictive AI & data science systems', 'Custom software & engineering', 'AI automation & agent workflows'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/5 text-gray-300">
                                    <CheckCircle2 size={18} className="text-primary shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="supremacy" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-white mb-6">2. Contractual Supremacy</h2>
                        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                            <p className="text-white text-lg">In the event of a conflict between these Terms and any executed agreement (such as an SOW or MSA), the <strong className="text-primary">executed agreement shall prevail</strong>.</p>
                        </div>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        <section id="scope" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-white mb-4">3. Scope Control</h2>
                            <p className="text-gray-400">Only deliverables explicitly documented in signed agreements are in scope. Additional requirements require request formal change approval.</p>
                        </section>
                        <section id="obligations" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-white mb-4">4. Client Obligations</h2>
                            <p className="text-gray-400">Clients must provide timely access to data and approvals. Delays from client dependencies are not attributable to Latentiq.</p>
                        </section>
                    </div>

                    <section id="ip" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-white mb-6">5. Intellectual Property</h2>
                        <div className="space-y-4">
                            <div className="bg-surface/30 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">Latentiq IP</h3>
                                <p className="text-gray-400">We retain ownership of frameworks, accelerators, methodologies, reusable assets, pre-existing libraries, models, and non-client-specific learnings.</p>
                            </div>
                            <div className="bg-surface/30 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">Client IP</h3>
                                <p className="text-gray-400">Upon full settlement of dues, the Client shall own custom deliverables developed specifically for them, as defined in the agreement.</p>
                            </div>
                        </div>
                    </section>

                    <section id="data" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-white mb-6">6. Data Ownership</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary font-bold shrink-0">A</div>
                                <div>
                                    <h4 className="text-white font-semibold">Client Ownership</h4>
                                    <p className="text-gray-400 text-sm">The Client retains full ownership of all data shared.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary font-bold shrink-0">B</div>
                                <div>
                                    <h4 className="text-white font-semibold">Our Role</h4>
                                    <p className="text-gray-400 text-sm">Latentiq acts strictly as a Data Processor / Service Provider.</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section id="warranty" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-white mb-6">9. Professional Warranty</h2>
                        <div className="bg-surface/30 rounded-xl p-8 border border-white/5">
                            <p className="mb-6 text-gray-300">Services are rendered with professional skill and care. However, we do not warrant guaranteed business outcomes or absolute prediction accuracy.</p>
                            <div className="flex gap-4 p-4 bg-yellow-500/5 text-yellow-500 rounded-lg border border-yellow-500/10">
                                <ShieldAlert size={24} className="shrink-0" />
                                <p className="text-sm">All AI, analytics, and dashboards are decision-support systems. Final decisions remain the Client’s responsibility.</p>
                            </div>
                        </div>
                    </section>

                    <section id="liability" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-white mb-6">10. Limitation of Liability</h2>
                        <p className="text-gray-400 text-lg">To the maximum extent permitted by law, Latentiq shall not be liable for indirect or consequential damages. Total liability shall not exceed the fees paid for the specific engagement.</p>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="scroll-mt-32 pt-16 border-t border-white/10 text-center">
                        <h2 className="text-3xl font-bold text-white mb-8">Questions?</h2>
                        <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-white/10 via-white/20 to-white/10">
                            <a
                                href="mailto:hr@latentiq.ai"
                                className="block px-12 py-6 bg-black rounded-xl hover:bg-neutral-900 transition-colors group"
                            >
                                <span className="text-gray-400 text-sm uppercase tracking-widest mb-2 block">Email Us</span>
                                <span className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-3 justify-center">
                                    <Mail size={24} /> hr@latentiq.ai
                                </span>
                            </a>
                        </div>
                    </section>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsOfService;
