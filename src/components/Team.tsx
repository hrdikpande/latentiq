import { motion } from 'framer-motion';
import { Users, LineChart, Briefcase } from 'lucide-react';

const Team = () => {
    const founders = [
        {
            name: "Manohar",
            role: "Co-Founder & CEO",
            initial: "M",
            color: "text-blue-500",
            bg: "bg-blue-500/20"
        },
        {
            name: "Ravi Teja",
            role: "Co-Founder & CTO",
            initial: "R",
            color: "text-purple-500",
            bg: "bg-purple-500/20"
        },
        {
            name: "Pranith Nishanth",
            role: "Co-Founder & COO",
            initial: "P",
            color: "text-green-500",
            bg: "bg-green-500/20"
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-20 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-primary">Leadership</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Visionaries building the future of decision intelligence.
                    </p>
                </motion.div>

                {/* Founders Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface border border-white/5 rounded-2xl p-8 text-center hover:border-primary/30 transition-all group"
                        >
                            <div className={`w-24 h-24 ${founder.bg} rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold ${founder.color} group-hover:scale-110 transition-transform`}>
                                {founder.initial}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                            <p className="text-primary font-medium">{founder.role}</p>
                        </motion.div>
                    ))}
                </div>

                {/* LatentIQ Family Section - Side-by-Side Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">The <span className="text-primary">LatentIQ</span> Family</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            A diverse team with deep expertise across functional domains, united by a passion for solving complex complications.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span>Tech + Product + Business DNA</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span>Cross-domain innovation</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-surface border border-white/5 p-6 rounded-2xl sm:col-span-2 flex items-center justify-between group hover:border-primary/20 transition-colors"
                        >
                            <div>
                                <div className="text-4xl font-bold text-white mb-1">12</div>
                                <div className="text-gray-400">Team Members</div>
                            </div>
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Users size={24} />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-surface border border-white/5 p-6 rounded-2xl group hover:border-primary/20 transition-colors"
                        >
                            <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-500 mb-4 group-hover:scale-110 transition-transform">
                                <LineChart size={20} />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">5+ Years</div>
                            <div className="text-gray-400 text-sm">Avg Experience</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-surface border border-white/5 p-6 rounded-2xl group hover:border-primary/20 transition-colors"
                        >
                            <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4 group-hover:scale-110 transition-transform">
                                <Briefcase size={20} />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">3</div>
                            <div className="text-gray-400 text-sm">Core Domains</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
