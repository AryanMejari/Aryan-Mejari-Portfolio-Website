import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Target, Zap } from 'lucide-react';

const education = [
  {
    institution: 'Fr Conceicao Rodrigues College of Engineering',
    degree: 'B.Tech in Computer Science & Engineering',
    period: 'Aug 2025 – May 2028',
    score: '9.5 GPA',
    highlights: ['System Design', 'Machine Learning', 'Scalable Software'],
    icon: GraduationCap,
  },
  {
    institution: 'Thakur Polytechnic',
    degree: 'Diploma in Computer Science & Engineering',
    period: 'Sept 2022 – May 2025',
    score: '94.5% | First Rank Holder (3 Years)',
    highlights: ['Programming', 'Networking', 'Applied ML'],
    icon: Award,
  },
  {
    institution: 'Swami Vivekanand International School',
    degree: 'SSC (10th)',
    period: 'May 2022',
    score: '93%',
    highlights: ['Analytical Problem-solving', 'Mathematics'],
    icon: Target,
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.p
              className="text-primary font-mono text-sm mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              {'// 01. ABOUT ME'}
            </motion.p>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Who Am I?
            </motion.h2>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="glass-card p-6 md:p-8 glow-border">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="text-primary" size={24} />
                  <h3 className="font-orbitron text-xl text-foreground">The Vision</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm <span className="text-foreground font-semibold">Aryan Samir Mejari</span>, 
                  a Computer Science & Engineering student with a deep interest in machine learning, 
                  web development, and applied data science. I build predictive systems 
                  (stocks/forex/crypto), interactive web tools, and ML prototypes that turn 
                  data into actionable products.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  My goal is to combine strong fundamentals in algorithms and networking with 
                  practical ML engineering to build robust, production-ready intelligent systems — 
                  from data cleaning and modeling to deployment and visualization.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="skill-badge">Product Thinking</span>
                  <span className="skill-badge">Data-Driven</span>
                  <span className="skill-badge">Full-Stack</span>
                  <span className="skill-badge">AI/ML</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="font-orbitron text-xl text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary" size={24} />
                Education Journey
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.institution}
                    className="glass-card p-5 glow-border group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <edu.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="text-primary font-mono">{edu.period}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-accent font-semibold">{edu.score}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {edu.highlights.map((h) => (
                            <span
                              key={h}
                              className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
