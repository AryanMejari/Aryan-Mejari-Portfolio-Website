import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Medal, Star, Shield, Network } from 'lucide-react';

const majorAchievements = [
  {
    icon: Trophy,
    title: '1st Ranker (3 Consecutive Years)',
    description: 'Thakur Polytechnic - 2022, 2023, 2024',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    icon: Award,
    title: 'Best Outgoing Student 2025',
    description: 'Thakur Polytechnic',
    color: 'from-purple-400 to-violet-500',
  },
  {
    icon: Medal,
    title: '1st Runner Up - Model Making 2025',
    description: 'ISTE Competition',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Star,
    title: '1st Runner Up - Pitch Room 2023',
    description: 'Business Pitch Competition',
    color: 'from-pink-400 to-rose-500',
  },
];

const certifications = [
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', icon: Shield },
  { name: 'Networking Basics', issuer: 'Cisco', icon: Network },
  { name: 'Networking Devices & Configuration', issuer: 'Cisco', icon: Network },
  { name: 'Cyber Threat Management', issuer: 'Cisco', icon: Shield },
  { name: 'Network Defense', issuer: 'Cisco', icon: Shield },
  { name: 'Endpoint Security', issuer: 'Cisco', icon: Shield },
];

const competitions = [
  'Youth Leadership & Career Development - Ratan Tata MSSU 2025',
  'GameCraft Competition - Vortex 2025',
  'Unstop Talent Park Competition 2025',
  'Code Master Competition - Tantra Utsav 2024',
  'Circuit Mosaic - IIC 2024',
  'Cyber War - Techno Utsav 2024',
  'Web Designing - Techno Utsav 2024',
  'Blind Scripting - Techno Utsav 2024',
  'Thakur Polytechnic Internal Hackathon 2024',
  'ByteQuest Technical Quiz 2024',
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-20 md:py-32 relative">
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
              {'// 05. ACHIEVEMENTS'}
            </motion.p>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Recognition & Badges
            </motion.h2>
          </div>

          {/* Major Achievements */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {majorAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="glass-card glow-border p-6 text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <achievement.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="font-orbitron text-sm text-foreground mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications Grid */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h3 className="font-orbitron text-xl text-foreground mb-8 text-center flex items-center justify-center gap-3">
              <Shield className="text-primary" size={24} />
              Cisco Certifications & Badges
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="badge-card flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <cert.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Competitions & Events */}
          <motion.div
            className="glass-card glow-border p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
          >
            <h3 className="font-orbitron text-xl text-foreground mb-6 text-center">
              Competitions & Events (15+)
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {competitions.map((comp, index) => (
                <motion.span
                  key={comp}
                  className="px-3 py-1.5 text-xs rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {comp}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Research Publication */}
          <motion.div
            className="mt-12 glass-card glow-border p-6 md:p-8 border-l-4 border-l-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <Star size={24} />
              </div>
              <div>
                <p className="text-xs text-primary font-mono mb-1">RESEARCH PUBLICATION</p>
                <h4 className="font-orbitron text-lg text-foreground mb-2">
                  A Multi-Agent AI System for Real-Time Detection and Classification of Dark Patterns on Live Webpages
                </h4>
                <p className="text-sm text-muted-foreground">
                  ISIRP – International Scientific and Innovative Research Publication
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
