import { motion } from 'framer-motion';
import { Shield, Lock, FileText, Globe, Mail, ArrowRight } from 'lucide-react';

const PrivacyPolicy = () => {
    const sections = [
        { id: "scope", title: "1. Scope" },
        { id: "roles", title: "2. Roles" },
        { id: "categories", title: "3. Data Categories" },
        { id: "purpose", title: "4. Purpose" },
        { id: "legal", title: "5. Legal Basis" },
        { id: "sharing", title: "6. Sharing" },
        { id: "international", title: "7. Transfers" },
        { id: "security", title: "8. Security" },
        { id: "retention", title: "9. Retention" },
        { id: "rights", title: "10. Your Rights" },
        { id: "contact", title: "15. Contact" }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Header height offset
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
                        <Shield size={14} />
                        <span>Trust & Security</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Privacy Policy</h1>
                    <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2"><FileText size={16} /> Effective: 09 Feb 2025</span>
                        <span className="flex items-center gap-2"><Globe size={16} /> Global</span>
                    </div>
                </motion.div>

                {/* Quick Navigation - Top TOC */}
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
                            Latentiq is a data science–led AI intelligence and software engineering company.
                            We recognize that <span className="text-white font-semibold">trust is foundational</span> to our work.
                            This Privacy Policy describes how we collect, use, disclose, store, and protect personal data.
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

                    {/* Section 1: Scope */}
                    <section id="scope" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-white mb-6">1. Scope of This Policy</h2>
                        <div className="bg-surface/30 rounded-xl p-8 border border-white/5">
                            <p className="mb-4 text-gray-300">This Policy applies to:</p>
                            <ul className="space-y-3">
                                {['Visitors to our website and digital properties', 'Prospective clients, clients, partners, and vendors', 'Individuals who communicate with us', 'Data processed within client projects'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Section 2: Roles */}
                    <section id="roles" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-white mb-6">2. Roles & Responsibilities</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-2">Data Controller</h3>
                                <p className="text-gray-400">For data collected through our website, marketing, and business communications, we determine the purpose and means of processing.</p>
                            </div>
                            <div className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-2">Data Processor</h3>
                                <p className="text-gray-400">For data processed within client solutions and AI systems. The <strong className="text-white">client remains the Data Controller</strong>.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Categories */}
                    <section id="categories" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-white mb-6">3. Data Categories</h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <span className="w-6 h-6 rounded bg-primary/20 text-primary flex items-center justify-center text-xs">A</span>
                                    Information Provided Directly
                                </h3>
                                <p className="text-gray-400 pl-8">Name, designation, organization, email address, phone number, business requirements, and communication records.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <span className="w-6 h-6 rounded bg-primary/20 text-primary flex items-center justify-center text-xs">B</span>
                                    Information Collected Automatically
                                </h3>
                                <p className="text-gray-400 pl-8">IP address, device details, browser type, usage metrics, cookies, and analytics identifiers.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Purpose */}
                    <section id="purpose" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-white mb-6">4. Purpose of Processing</h2>
                        <div className="bg-surface/30 rounded-xl p-8 border border-white/5">
                            <p className="mb-6 text-gray-300">We process data to respond to inquiries, design systems, ensure security, and comply with obligations.</p>
                            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
                                <p className="text-primary font-semibold">We do not sell personal data.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Legal Basis */}
                    <section id="legal" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-white mb-6">5. Legal Basis</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {["Consent", "Contractual Necessity", "Legitimate Interests", "Legal Obligations"].map((item) => (
                                <div key={item} className="px-4 py-3 bg-white/5 rounded-lg text-center text-sm font-medium text-gray-300 border border-white/10">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 6 & 7: Sharing & International */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <section id="sharing" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-white mb-4">6. Data Sharing</h2>
                            <p className="text-gray-400 leading-relaxed">We share data only with authorized providers (cloud, security) bound by strict confidentiality. No unauthorized third-party sharing.</p>
                        </section>
                        <section id="international" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-white mb-4">7. Global Transfers</h2>
                            <p className="text-gray-400 leading-relaxed">Data may be processed globally with appropriate safeguards including contractual protections.</p>
                        </section>
                    </div>

                    {/* Section 8: Security */}
                    <section id="security" className="scroll-mt-32">
                        <div className="bg-gradient-to-r from-primary/10 to-transparent p-1 rounded-2xl">
                            <div className="bg-black/80 p-8 rounded-2xl backdrop-blur-xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-primary/20 rounded-lg text-primary">
                                        <Lock size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">8. Data Security</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {['Role-based access controls', 'Encryption in transit & at rest', 'Secure cloud architecture', 'Continuous monitoring'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-gray-400">
                                            <Shield size={14} className="text-primary shrink-0" /> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 9: Retention */}
                    <section id="retention" className="scroll-mt-32">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Data Retention</h2>
                        <p className="text-gray-400">We retain personal data only for as long as necessary to fulfill purposes, meet contractual commitments, and comply with laws.</p>
                    </section>

                    {/* Section 10: Rights */}
                    <section id="rights" className="scroll-mt-32">
                        <h2 className="text-3xl font-bold text-white mb-6">10. Your Rights</h2>
                        <p className="text-gray-400 mb-6">Subject to applicable laws, you have rights regarding your data.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
                            {['Access Data', 'Correct Data', 'Request Deletion', 'Restrict Processing', 'Data Portability', 'Withdraw Consent'].map((right) => (
                                <div key={right} className="p-3 bg-white/5 border border-white/5 rounded-lg text-center hover:border-primary/50 transition-colors cursor-default">
                                    {right}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="scroll-mt-32 pt-16 border-t border-white/10 text-center">
                        <h2 className="text-3xl font-bold text-white mb-8">Questions regarding privacy?</h2>
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

export default PrivacyPolicy;
