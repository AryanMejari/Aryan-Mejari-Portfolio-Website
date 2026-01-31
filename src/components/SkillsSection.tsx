import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Globe, Users, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & Languages',
    icon: Code,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript/TypeScript', level: 85 },
      { name: 'C/C++', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    title: 'ML & Data Science',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'PyTorch/TensorFlow', level: 80 },
      { name: 'Pandas/NumPy', level: 90 },
      { name: 'NLP', level: 85 },
      { name: 'Computer Vision', level: 80 },
      { name: 'Data Visualization', level: 85 },
    ],
  },
  {
    title: 'Web Development',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'MERN Stack', level: 85 },
      { name: 'React/Vue', level: 85 },
      { name: 'Flask', level: 80 },
      { name: 'Streamlit', level: 85 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'AWS/Azure', level: 65 },
      { name: 'Docker', level: 70 },
      { name: 'Linux', level: 80 },
      { name: 'Tableau/Power BI', level: 70 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'from-teal-500 to-cyan-500',
    skills: [
      { name: 'PostgreSQL/MySQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Neo4j', level: 70 },
      { name: 'Redis', level: 65 },
    ],
  },
  {
    title: 'Managerial Skills',
    icon: Users,
    color: 'from-rose-500 to-red-500',
    skills: [
      { name: 'Product Thinking', level: 85 },
      { name: 'Stakeholder Communication', level: 90 },
      { name: 'Agile/SDLC', level: 80 },
      { name: 'Risk Management', level: 75 },
      { name: 'Data-Driven Decisions', level: 85 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 relative">
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
              {'// 04. SKILLS'}
            </motion.p>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Skills Dashboard
            </motion.h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                className="glass-card glow-border overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + catIndex * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className={`h-1 bg-gradient-to-r ${category.color}`} />
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20`}>
                      <category.icon className="text-white" size={20} />
                    </div>
                    <h3 className="font-orbitron text-lg text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-muted-foreground">{skill.name}</span>
                          <span className="text-xs font-mono text-primary">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05, duration: 0.8 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional Interests */}
          <motion.div
            className="mt-12 glass-card glow-border p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <h3 className="font-orbitron text-xl text-foreground mb-6 text-center">
              Professional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'NLP',
                'Computer Vision',
                'Generative AI',
                'Agentic AI Development',
                'Computer Networking',
                'Cybersecurity Auditing',
                'Product Management',
                'Data-Driven Strategy',
              ].map((interest, index) => (
                <motion.span
                  key={interest}
                  className="skill-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
