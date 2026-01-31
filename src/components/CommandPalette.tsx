import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Briefcase, Code, Award, Mail, FileText, X } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const commands = [
  { id: 'about', label: 'About Me', description: 'Learn about who I am', icon: User, href: '#about' },
  { id: 'experience', label: 'Experience', description: 'My professional journey', icon: Briefcase, href: '#experience' },
  { id: 'projects', label: 'Projects', description: 'View my project matrix', icon: Code, href: '#projects' },
  { id: 'skills', label: 'Skills', description: 'Technical & managerial skills', icon: FileText, href: '#skills' },
  { id: 'achievements', label: 'Achievements', description: 'Awards and certifications', icon: Award, href: '#achievements' },
  { id: 'contact', label: 'Contact', description: 'Get in touch with me', icon: Mail, href: '#contact' },
  // Projects
  { id: 'euclid', label: 'Euclid Finance', description: 'AI financial prediction', icon: Code, href: '#projects' },
  { id: 'airdraw', label: 'Air Draw', description: 'Gesture-based drawing', icon: Code, href: '#projects' },
  { id: 'cyberagent', label: 'Cyber Agent', description: 'Dark pattern detection', icon: Code, href: '#projects' },
  { id: 'ats', label: 'AI ATS System', description: 'Resume analyzer', icon: Code, href: '#projects' },
  { id: 'pokemart', label: 'Poke-Mart', description: 'Pokemon trading platform', icon: Code, href: '#projects' },
  // Skills
  { id: 'python', label: 'Python', description: 'Programming language', icon: FileText, href: '#skills' },
  { id: 'ml', label: 'Machine Learning', description: 'AI/ML expertise', icon: FileText, href: '#skills' },
  { id: 'react', label: 'React', description: 'Web development', icon: FileText, href: '#skills' },
];

const CommandPalette = ({ isOpen, onClose }: CommandPaletteProps) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = useMemo(() => {
    if (!query) return commands.slice(0, 6);
    return commands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            const cmd = filteredCommands[selectedIndex];
            document.querySelector(cmd.href)?.scrollIntoView({ behavior: 'smooth' });
            onClose();
          }
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  const handleSelect = (cmd: typeof commands[0]) => {
    document.querySelector(cmd.href)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="command-palette"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="command-input"
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
              <Search className="text-muted-foreground" size={20} />
              <input
                type="text"
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                placeholder="Search for sections, projects, skills..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-1 rounded hover:bg-muted transition-colors"
              >
                <X size={16} className="text-muted-foreground" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-80 overflow-y-auto">
              {filteredCommands.length === 0 ? (
                <div className="px-4 py-8 text-center text-muted-foreground">
                  No results found for "{query}"
                </div>
              ) : (
                <div className="p-2">
                  {filteredCommands.map((cmd, index) => (
                    <button
                      key={cmd.id}
                      onClick={() => handleSelect(cmd)}
                      className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all ${
                        index === selectedIndex
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          index === selectedIndex ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}
                      >
                        <cmd.icon size={16} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{cmd.label}</p>
                        <p className="text-xs text-muted-foreground">{cmd.description}</p>
                      </div>
                      {index === selectedIndex && (
                        <span className="text-xs text-muted-foreground font-mono">↵ Enter</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono">↑↓</kbd> Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono">↵</kbd> Select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono">Esc</kbd> Close
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
