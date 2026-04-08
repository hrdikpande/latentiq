import { motion } from 'framer-motion';
import { Clock, Calendar, Briefcase, Users, Zap, Rocket } from 'lucide-react';

const EngagementSection = () => {
    const models = [
        {
            title: "One-Time Project",
            desc: "Defined scope, clear deliverables, fixed timeline.",
            icon: Clock,
            color: "border-blue-500/50"
        },
        {
            title: "Monthly Analytics",
            desc: "Ongoing dashboard, monitoring, and AI model maintenance.",
            icon: Calendar,
            color: "border-green-500/50"
        },
        {
            title: "Consulting & Strategy",
            desc: "Advisory services for data strategy and AI roadmaps.",
            icon: Briefcase,
            color: "border-purple-500/50"
        },
        {
            title: "Dedicated Tech Team",
            desc: "Extended team integration for long-term projects.",
            icon: Users,
            color: "border-orange-500/50"
        },
        {
            title: "MVP for Startups",
            desc: "Rapid prototyping to validate ideas and secure funding.",
            icon: Zap,
            color: "border-yellow-500/50"
        },
        {
            title: "Full Product Development",
            desc: "End-to-end development from concept to launch.",
            icon: Rocket,
            color: "border-red-500/50"
        }
    ];

    return (
        <section className="py-24 bg-surface relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Engagement Models</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Flexible partnership models tailored to your business needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {models.map((model, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-2xl bg-black border ${model.color} hover:bg-white/5 transition-all cursor-pointer group`}
                        >
                            <div className="mb-4 text-white group-hover:text-primary transition-colors">
                                <model.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                            <p className="text-gray-400">{model.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngagementSection;
