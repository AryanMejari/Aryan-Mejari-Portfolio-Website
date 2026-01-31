import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X, ChevronRight, Brain, Paintbrush, FileSearch, ShoppingBag, Shield, Gamepad2, Home, Trophy, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Euclid Finance',
    shortDesc: 'AI-powered financial prediction software',
    fullDesc: 'Built a deep learning pipeline using LSTM/RNN with NLP + LangChain + Neo4j for finance context. Achieved ~85% detection accuracy with anomaly detection flagging potential moves (90% precision in tests).',
    tech: ['LSTM', 'RNN', 'LangChain', 'Neo4j', 'Python', 'NLP'],
    icon: Brain,
    color: 'from-cyan-500 to-blue-500',
    category: 'AI/ML',
  },
  {
    id: 2,
    title: 'Air Draw',
    shortDesc: 'Gesture-based visual drawing platform',
    fullDesc: 'Gesture-based drawing using pyautogui and OpenCV. Educational and fun drawing tool with VGG16 for gesture recognition and PaddleOCR for text detection.',
    tech: ['OpenCV', 'VGG16', 'PaddleOCR', 'Streamlit', 'Python'],
    icon: Paintbrush,
    color: 'from-purple-500 to-pink-500',
    category: 'Computer Vision',
  },
  {
    id: 3,
    title: 'AI-based ATS System',
    shortDesc: 'Resume analyzer with 90%+ improvement',
    fullDesc: 'Tests and analyzes the selection criteria of a resume for particular job listings, providing suggestions and improvements. Improved selection rate to more than 90% for all test resumes.',
    tech: ['NLP', 'Machine Learning', 'Python', 'Resume Parsing'],
    icon: FileSearch,
    color: 'from-green-500 to-emerald-500',
    category: 'AI/ML',
  },
  {
    id: 4,
    title: 'Poke-Mart',
    shortDesc: 'Indigenous Pokémon card trading platform',
    fullDesc: 'A state-of-the-art indigenous Pokémon card trading and selling website specially developed for enthusiasts and collectors based in India, providing seamless trading, selling, and delivery.',
    tech: ['MERN Stack', 'E-commerce', 'Payment Integration'],
    icon: ShoppingBag,
    color: 'from-yellow-500 to-orange-500',
    category: 'Web Development',
  },
  {
    id: 5,
    title: 'Cyber Agent',
    shortDesc: 'AI agent for dark pattern detection',
    fullDesc: 'A browser-based AI agent which performs automated review of websites for detecting any dark patterns and provides comprehensive analysis to users about manipulative design practices.',
    tech: ['Browser Extension', 'AI Agent', 'Web Scraping', 'NLP'],
    icon: Shield,
    color: 'from-red-500 to-rose-500',
    category: 'Cybersecurity',
  },
  {
    id: 6,
    title: 'RadarReview',
    shortDesc: 'Browser extension for product analysis',
    fullDesc: 'Browser extension-based AI product analysis model for online products. Helps users make informed purchasing decisions with AI-powered review aggregation and sentiment analysis.',
    tech: ['Browser Extension', 'AI', 'NLP', 'Chrome API'],
    icon: Eye,
    color: 'from-indigo-500 to-violet-500',
    category: 'AI/ML',
  },
  {
    id: 7,
    title: 'Ultra Mario',
    shortDesc: 'Gesture-controlled Super Mario game',
    fullDesc: 'A gesture-controlled Super Mario game using computer vision for hand gesture recognition, providing an immersive gaming experience without traditional controllers.',
    tech: ['OpenCV', 'Gesture Recognition', 'Gaming', 'Python'],
    icon: Gamepad2,
    color: 'from-teal-500 to-cyan-500',
    category: 'Computer Vision',
  },
  {
    id: 8,
    title: 'Mumbai House Price Predictor',
    shortDesc: 'Real estate price prediction for Mumbai',
    fullDesc: 'House price prediction application specifically designed for Mumbai real estate market, using ML models trained on local market data.',
    tech: ['Machine Learning', 'Regression', 'Python', 'Data Analysis'],
    icon: Home,
    color: 'from-amber-500 to-yellow-500',
    category: 'AI/ML',
  },
  {
    id: 9,
    title: 'Cricket Performance Predictor',
    shortDesc: 'Fantasy sports performance predictor',
    fullDesc: 'Cricket score and performance predictor website useful for developing teams in applications like Dream11, My11Circle etc. to gain maximum points.',
    tech: ['Machine Learning', 'Sports Analytics', 'Python', 'Web'],
    icon: Trophy,
    color: 'from-lime-500 to-green-500',
    category: 'AI/ML',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.p
              className="text-primary font-mono text-sm mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              {'// 03. PROJECTS'}
            </motion.p>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Project Matrix
            </motion.h2>
          </div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                  filter === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card glow-border group cursor-pointer overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-20`}>
                        <project.icon className="text-white" size={24} />
                      </div>
                      <ChevronRight 
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" 
                        size={20} 
                      />
                    </div>

                    <h3 className="font-orbitron text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-2xl glass-card glow-border overflow-hidden"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${selectedProject.color}`} />

              <div className="p-6 md:p-8">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${selectedProject.color}`}>
                    <selectedProject.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-2xl text-foreground">
                      {selectedProject.title}
                    </h3>
                    <p className="text-primary text-sm font-mono">{selectedProject.category}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Technical Specifications</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="skill-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button className="cyber-button flex items-center gap-2">
                    <Github size={18} />
                    <span>Source Code</span>
                  </button>
                  <button className="px-4 py-2 border border-primary/50 rounded-lg text-primary hover:bg-primary/10 transition-all flex items-center gap-2">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
