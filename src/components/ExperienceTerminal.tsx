import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const terminalLines = [
  { type: 'prompt', text: '$ cat experience.json' },
  { type: 'output', text: '{' },
  { type: 'output', text: '  "company": "Glimpse Edutech",' },
  { type: 'output', text: '  "role": "Machine Learning & Data Science Intern",' },
  { type: 'output', text: '  "period": "Jun 2024 – Jul 2024",' },
  { type: 'output', text: '  "responsibilities": [' },
  { type: 'highlight', text: '    "Converted business problems into technical requirements",' },
  { type: 'highlight', text: '    "Planned project workflows: data collection → preprocessing → model selection → evaluation",' },
  { type: 'highlight', text: '    "Optimized ML pipelines → ~25% improvement in model accuracy",' },
  { type: 'highlight', text: '    "Presented outcomes with visual insights for decision-making"' },
  { type: 'output', text: '  ],' },
  { type: 'output', text: '  "impact": "High - Direct contribution to product development"' },
  { type: 'output', text: '}' },
  { type: 'prompt', text: '$ echo "Ready for new challenges!"' },
  { type: 'success', text: '✓ Ready for new challenges!' },
];

const ExperienceTerminal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (isInView && visibleLines < terminalLines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isInView, visibleLines]);

  const getLineColor = (type: string) => {
    switch (type) {
      case 'prompt':
        return 'text-primary';
      case 'highlight':
        return 'text-accent';
      case 'success':
        return 'text-green-400';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <section id="experience" className="py-20 md:py-32 relative">
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
              {'// 02. EXPERIENCE'}
            </motion.p>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Professional Journey
            </motion.h2>
          </div>

          {/* Terminal */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="terminal glow-border">
              {/* Terminal Header */}
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-4 text-sm text-muted-foreground font-mono">
                  experience.sh — ~/aryan/career
                </span>
              </div>

              {/* Terminal Body */}
              <div className="terminal-body min-h-[400px]">
                {terminalLines.slice(0, visibleLines).map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${getLineColor(line.type)} whitespace-pre-wrap`}
                  >
                    {line.text}
                  </motion.div>
                ))}
                {visibleLines < terminalLines.length && (
                  <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" />
                )}
              </div>
            </div>
          </motion.div>

          {/* Additional Experience Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="glass-card p-6 glow-border">
              <h4 className="font-orbitron text-lg text-foreground mb-2">
                Needs&Solutions
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Freelancing company providing tech solutions to business owners in 9 different services.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge text-xs">Freelance</span>
                <span className="skill-badge text-xs">Tech Solutions</span>
                <span className="skill-badge text-xs">Client Services</span>
              </div>
            </div>

            <div className="glass-card p-6 glow-border">
              <h4 className="font-orbitron text-lg text-foreground mb-2">
                Research & Publications
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                ISIRP – International Scientific and Innovative Research Publication
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge text-xs">Dark Patterns</span>
                <span className="skill-badge text-xs">Multi-Agent AI</span>
                <span className="skill-badge text-xs">Published</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTerminal;
