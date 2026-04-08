import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, X, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Careers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID || "mreabejz"); // Reusing the same Formspree ID

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    // If submission is successful, show success message inside the modal or page
    const showSuccess = state.succeeded;

    return (
        <div className="min-h-screen pt-24 pb-20 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Join <span className="text-primary">LatentIQ</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Build the future of decision intelligence with a team of visionaries.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-surface border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all"
                    >
                        <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">Sales & Marketing Specialist</h2>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                    <span className="flex items-center gap-1"><Briefcase size={16} /> Full-time</span>
                                    <span className="flex items-center gap-1"><MapPin size={16} /> Hybrid / Remote</span>
                                    <span className="flex items-center gap-1"><Clock size={16} /> 3-Month Probation</span>
                                </div>
                            </div>
                            <button
                                onClick={toggleModal}
                                className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                            >
                                Apply Now <ArrowRight size={18} />
                            </button>
                        </div>

                        <div className="space-y-8 text-gray-300">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-3">Role Overview</h3>
                                <p className="leading-relaxed">
                                    LatentIQ is looking for driven and ambitious professionals to join our Sales & Marketing team on a full-time basis, supporting our growth in data science–driven AI intelligence and software engineering solutions. The role includes a 3-month probation period, after which responsibilities and growth opportunities expand based on performance.
                                    <br /><br />
                                    This position offers direct exposure to enterprise clients, AI/SaaS go-to-market strategies, and high-impact deal execution.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-white mb-3">Key Responsibilities</h3>
                                <ul className="list-disc leading-relaxed pl-5 space-y-2">
                                    <li>Lead generation and in-depth prospect research</li>
                                    <li>Client outreach through email, LinkedIn, and other strategic channels</li>
                                    <li>Supporting sales and marketing initiatives for AI-driven and software engineering solutions</li>
                                    <li>Assisting with go-to-market strategies for AI/SaaS products</li>
                                    <li>Collaborating closely with internal teams to support and accelerate deal closures</li>
                                </ul>
                            </div>

                            <p className="italic text-gray-400 border-l-4 border-primary pl-4">
                                "We believe this role is a strong opportunity for someone looking to build a long-term career in AI-focused sales and business growth. Happy to discuss further and take this forward."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Application Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={toggleModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-surface border border-white/10 rounded-2xl p-8 max-w-lg w-full relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={toggleModal}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <h2 className="text-2xl font-bold mb-6">Apply for Position</h2>

                            {showSuccess ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Application Sent!</h3>
                                    <p className="text-gray-400 mb-6">We've received your application and will be in touch shortly.</p>
                                    <button
                                        onClick={toggleModal}
                                        className="bg-white/10 text-white py-2 px-6 rounded-lg hover:bg-white/20 transition-all"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Hidden field to identify the job */}
                                    <input type="hidden" name="job_role" value="Sales & Marketing Specialist" />

                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                            placeholder="John Doe"
                                        />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                            placeholder="john@example.com"
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">LinkedIn / Portfolio URL</label>
                                        <input
                                            type="url"
                                            name="linkedin"
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                            placeholder="https://linkedin.com/in/..."
                                        />
                                        <ValidationError prefix="LinkedIn" field="linkedin" errors={state.errors} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Why are you a good fit?</label>
                                        <textarea
                                            name="message"
                                            rows={3}
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                            placeholder="Briefly tell us about your experience..."
                                        ></textarea>
                                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={state.submitting}
                                        className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {state.submitting ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Submit Application
                                                <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Careers;
