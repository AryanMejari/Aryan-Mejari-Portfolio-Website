import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const roles = [
  'Decision-maker',
  'Problem Owner',
  'Execution Leader',
  'Business + Tech Bridge',
  'AI/ML Enthusiast',
  'Product Thinker',
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-30" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-primary font-mono text-sm md:text-base mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {'> Hello, World. I am'}
          </motion.p>

          {/* Name */}
          <motion.h1
            className="font-orbitron text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="text-gradient-cyber">Aryan Samir</span>
            <br />
            <span className="text-foreground">Mejari</span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            className="h-12 md:h-16 flex items-center justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="font-orbitron text-xl md:text-3xl text-secondary">
              {'< '}
              <span className="text-accent">{displayedText}</span>
              <span className="animate-pulse">|</span>
              {' />'}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            AI · ML & Data Science Enthusiast · Web & App Developer · 
            <span className="text-primary"> Professional Cybersecurity Analyst</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="#projects"
              className="cyber-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>View Projects</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 border border-primary/50 rounded-lg font-semibold text-primary hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Get In Touch</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a
              href="https://github.com/AryanMejari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Github size={22} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aryan-mejari-5b73862b9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a
              href="mailto:aryanmejari1406@gmail.com"
              className="p-3 rounded-lg border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Mail size={22} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ArrowDown size={28} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
