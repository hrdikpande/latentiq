import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Layout, PenTool, TrendingUp, Check } from 'lucide-react';

const servicesData = {
    "Data & AI": {
        icon: Database,
        description: "Advanced analytics and AI solutions to predict trends and automate decisions.",
        items: [
            { title: "Predictive Analysis", desc: "Forecast trends with AI" },
            { title: "Data Engineering", desc: "Build robust data pipelines" },
            { title: "Data Analysis", desc: "Extract meaningful insights" },
            { title: "Data Science", desc: "Advanced statistical modeling" },
            { title: "Business Dashboards", desc: "Real-time analytics views" },
            { title: "AI Agent Development", desc: "Intelligent automation agents" },
            { title: "Multi-Agent Development", desc: "Coordinated AI systems" },
            { title: "AI Automation", desc: "Streamline with intelligence" },
            { title: "AI Integration", desc: "Seamless AI implementation" }
        ]
    },
    "Web & App": {
        icon: Layout,
        description: "Modern, scalable web and mobile applications built for performance.",
        items: [
            { title: "Website Building", desc: "Custom-built modern websites" },
            { title: "Website Designing", desc: "Beautiful, user-centric designs" },
            { title: "Revamp Website", desc: "Modernize your digital presence" },
            { title: "Web Apps", desc: "Progressive web applications" },
            { title: "App Development", desc: "Native & cross-platform apps" },
            { title: "E-commerce Development", desc: "Complete online stores" },
            { title: "Maintenance & Support", desc: "24/7 technical assistance" },
            { title: "Admin Panels", desc: "Powerful control centers" }
        ]
    },
    "Design": {
        icon: PenTool,
        description: "Intuitive and engaging designs that drive user adoption.",
        items: [
            { title: "UI/UX Design", desc: "Intuitive user experiences" },
            { title: "Creative Prototyping", desc: "Interactive design previews" },
            { title: "Responsive Design Systems", desc: "Scalable design frameworks" }
        ]
    },
    "Marketing": {
        icon: TrendingUp,
        description: "Optimization strategies to increase visibility and reach.",
        items: [
            { title: "SEO", desc: "Search Engine Optimization" },
            { title: "GEO", desc: "Local + Global Optimization" },
            { title: "AEO", desc: "AI-Based Search Optimization" }
        ]
    }
};

const Services = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');

    const slugMap: Record<string, string> = {
        'data-ai': 'Data & AI',
        'web-app': 'Web & App',
        'design': 'Design',
        'marketing': 'Marketing'
    };

    // Reverse map for updating URL when clicking tabs
    const reverseSlugMap: Record<string, string> = Object.fromEntries(
        Object.entries(slugMap).map(([k, v]) => [v, k])
    );

    // Initialize activeTab directly from URL to avoid flicker
    const [activeTab, setActiveTab] = useState(() => {
        if (categoryParam) {
            const resolvedCategory = slugMap[categoryParam] || categoryParam;
            if (Object.keys(servicesData).includes(resolvedCategory)) {
                return resolvedCategory;
            }
        }
        return "Data & AI";
    });

    useEffect(() => {
        if (categoryParam) {
            const resolvedCategory = slugMap[categoryParam] || categoryParam;
            if (Object.keys(servicesData).includes(resolvedCategory)) {
                setActiveTab(resolvedCategory);
            }
        }
    }, [categoryParam]);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        const slug = reverseSlugMap[tab] || tab;
        setSearchParams({ category: slug });
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-background text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive solutions across Data, AI, Software, and Design.
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 overflow-x-auto pb-4">
                    {Object.keys(servicesData).map((tab) => {
                        const Icon = servicesData[tab as keyof typeof servicesData].icon;
                        return (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === tab
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "bg-surface text-gray-400 hover:text-white hover:bg-white/10"
                                    }`}
                            >
                                <Icon size={18} />
                                {tab}
                            </button>
                        );
                    })}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {servicesData[activeTab as keyof typeof servicesData].items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/50 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                    <Check size={20} />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Services;
