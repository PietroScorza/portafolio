import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, Building2 } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experiencia" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experiencia <span className="gradient-text">Profesional</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Mi trayectoria profesional en desarrollo de software y tecnología.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-violet to-transparent" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 border-accent-cyan bg-dark-base z-10">
                  <div className="absolute inset-0.5 rounded-full bg-accent-cyan/30" />
                </div>

                {/* Card */}
                <div
                  onClick={() => toggleExpand(index)}
                  className="card-base p-6 cursor-pointer group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Building2 size={16} className="text-accent-cyan" />
                        <span className="text-xs font-medium text-accent-cyan uppercase tracking-wider">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-text-primary mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-accent-violet font-medium mb-2">
                        {exp.role}
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Expand icon */}
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-8 h-8 rounded-lg bg-dark-border/50 flex items-center justify-center text-text-muted group-hover:text-accent-cyan group-hover:bg-accent-cyan/10 transition-colors"
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-dark-border">
                          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                            Tareas y Logros
                          </h4>
                          <ul className="space-y-2">
                            {exp.tasks.map((task, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-start gap-2 text-sm text-text-secondary"
                              >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                                {task}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
