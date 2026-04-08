import { motion } from 'framer-motion';
import { Database, BarChart3, Code2, Bot } from 'lucide-react';

const pillars = [
    {
        title: "Data & AI Intelligence",
        subtitle: "Turning Data into Forward-Looking Action",
        icon: Database,
        desc: "Churn, demand, risk, and opportunity prediction models. Decision intelligence systems that guide strategic choices.",
        color: "from-blue-500/20 to-blue-600/5",
        accent: "text-blue-500"
    },
    {
        title: "Analytics & Dashboards",
        subtitle: "Real-Time Visibility That Drives Action",
        icon: BarChart3,
        desc: "Real-time KPI visibility, business performance monitoring, and self-service analytics empowering teams.",
        color: "from-emerald-500/20 to-emerald-600/5",
        accent: "text-emerald-500"
    },
    {
        title: "Custom Software Engineering",
        subtitle: "Built for Operational Excellence",
        icon: Code2,
        desc: "Web, App, and Admin systems development. Scalable architecture designed for growth and operational performance.",
        color: "from-purple-500/20 to-purple-600/5",
        accent: "text-purple-500"
    },
    {
        title: "AI Automation & Multi-Agent Systems",
        subtitle: "Efficiency at Scale Through Intelligence",
        icon: Bot,
        desc: "Reduce manual work with intelligent agents. Automation that connects data → decisions → actions.",
        color: "from-orange-500/20 to-orange-600/5",
        accent: "text-orange-500"
    }
];

const Pillars = () => {
    return (
        <section className="py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Our 4 Capability Pillars</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        These adapt perfectly across industries and company sizes, creating a foundation for predictable growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative p-8 rounded-2xl border border-white/5 bg-gradient-to-br ${pillar.color} hover:border-white/10 transition-all duration-300 hover:-translate-y-1`}
                        >
                            <div className="absolute inset-0 bg-black/50 rounded-2xl -z-10 backdrop-blur-xl"></div>

                            <div className={`p-3 rounded-lg bg-white/5 w-fit mb-6 ${pillar.accent}`}>
                                <pillar.icon size={32} />
                            </div>

                            <h3 className="text-2xl font-bold mb-2">{pillar.title}</h3>
                            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${pillar.accent} opacity-80`}>
                                {pillar.subtitle}
                            </h4>

                            <p className="text-gray-400 leading-relaxed">
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pillars;
