import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-8"
                >
                    About <span className="text-primary">Latentiq</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-white">
                            Helping Businesses Act Earlier
                        </h3>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Latentiq is a data science–led AI intelligence and software engineering company built around a single outcome: <span className="text-white font-semibold">helping businesses act earlier.</span>
                        </p>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            We enable organizations to see what's coming before it becomes a problem — cutting costs before they compound, correcting strategies before losses escalate, and improving retention while action is still possible. Our work combines forward-looking analytics, real-time visibility, custom software, and AI automation to turn data into timely decisions and decisions into measurable outcomes.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            We design and deploy systems that leaders actually use: KPI dashboards, predictive models for churn, demand, risk, and opportunity, operational software built for performance, and multi-agent AI systems that reduce manual work across workflows. Every engagement is focused on deployment and impact — not reports.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10"></div>
                        <div className="bg-surface border border-white/10 p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>

                            <h4 className="text-xl font-bold mb-6">Our Expertise</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <span className="text-gray-300">Financial Services & Banking</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <span className="text-gray-300">Healthcare & Pharmaceuticals</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <span className="text-gray-300">Retail & E-commerce</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <span className="text-gray-300">Manufacturing & Supply Chain</span>
                                </li>
                            </ul>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-lg font-bold text-white mb-2">
                                    "Act earlier. Decide better. Grow smarter."
                                </p>
                                <p className="text-sm text-gray-400">
                                    We partner with CXOs, founders, and leaders who value data-driven intelligence.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
