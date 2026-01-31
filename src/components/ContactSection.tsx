import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 md:py-32 relative">
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
              {'// 06. CONTACT'}
            </motion.p>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Let's Connect
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-xl mx-auto mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Open to opportunities in AI/ML, Data Science, Product Management, and Full-Stack Development. Let's build something amazing together.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="glass-card glow-border p-6 md:p-8">
                <h3 className="font-orbitron text-xl text-foreground mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  <motion.a
                    href="mailto:aryanmejari1406@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">aryanmejari1406@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+917039095763"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">+91 7039095763</p>
                    </div>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium">Mumbai, India</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/AryanMejari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                      whileHover={{ y: -3 }}
                    >
                      <Github size={22} />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/aryan-mejari-5b73862b9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                      whileHover={{ y: -3 }}
                    >
                      <Linkedin size={22} />
                    </motion.a>
                    <motion.a
                      href="https://www.kaggle.com/aryanmejari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all font-bold text-sm"
                      whileHover={{ y: -3 }}
                    >
                      K
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <form className="glass-card glow-border p-6 md:p-8">
                <h3 className="font-orbitron text-xl text-foreground mb-6">
                  Send a Message
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full cyber-button flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Send Message</span>
                    <Send size={18} />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
