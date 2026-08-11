import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const bioData = {
  name: 'Pietro Scorza',
  role: 'Full Stack Developer',
  university: 'Universidad de Zaragoza',
  degree: 'Ingeniería Informática (2º año)',
  graduated: 'DAM — Institut de l\'Ebre',
  stack: ['SQL', 'Python', 'Django', 'PHP', 'Laravel', '.NET', 'React', 'Git'],
  status: 'Disponible para teletrabajo',
  location: 'España',
  passion: 'Crear soluciones que aporten valor real',
};

const commands = [
  { cmd: 'pietro.bio()', delay: 0 },
];

const jsonOutput = JSON.stringify(bioData, null, 2);

export default function TerminalWidget() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const terminalRef = useRef(null);
  const sectionRef = useRef(null);

  // Intersection observer to trigger animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const lines = jsonOutput.split('\n');
    let lineIndex = 0;

    // First show the command prompt
    setDisplayedLines([{ type: 'prompt', text: '~ $ pietro.bio()' }]);
    setIsTyping(true);

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (lineIndex < lines.length) {
          setDisplayedLines((prev) => [
            ...prev,
            { type: 'output', text: lines[lineIndex] },
          ]);
          lineIndex++;

          // Auto-scroll
          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setDisplayedLines((prev) => [
            ...prev,
            { type: 'prompt', text: '~ $ █' },
          ]);
        }
      }, 60);

      return () => clearInterval(interval);
    }, 800);

    return () => clearTimeout(timer);
  }, [hasStarted]);

  const syntaxHighlight = (text) => {
    if (!text || typeof text !== 'string') return '';
    // Colorize JSON keys, strings, numbers, etc.
    return text
      .replace(/"([^"]+)":/g, '<span class="text-accent-violet">"$1"</span>:')
      .replace(/: "([^"]+)"/g, ': <span class="text-accent-green">"$1"</span>')
      .replace(/: (\d+)/g, ': <span class="text-yellow-400">$1</span>')
      .replace(/"([^"]+)"/g, '<span class="text-accent-green">"$1"</span>');
  };

  return (
    <section ref={sectionRef} id="sobre-mi" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
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
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Un vistazo rápido a quién soy, estilo developer.
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-dark-border shadow-2xl shadow-dark-base/50"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#161B26] border-b border-dark-border">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <span className="flex-1 text-center text-xs text-text-muted font-mono">
              pietro@portfolio ~ bash
            </span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="bg-[#0D1117] p-4 md:p-6 font-mono text-sm max-h-[480px] overflow-y-auto"
          >
            {displayedLines.map((line, i) => (
              <div key={i} className="leading-relaxed">
                {line.type === 'prompt' ? (
                  <div className="flex items-center gap-2">
                    <span className="text-accent-green font-bold">➜</span>
                    <span className="text-accent-cyan">~</span>
                    <span className="text-text-primary">{(line.text || '').replace('~ $ ', '')}</span>
                  </div>
                ) : (
                  <div
                    className="text-text-secondary pl-4"
                    dangerouslySetInnerHTML={{
                      __html: syntaxHighlight(line.text),
                    }}
                  />
                )}
              </div>
            ))}

            {/* Blinking cursor during typing */}
            {isTyping && (
              <div className="flex items-center gap-2 mt-1">
                <span className="text-accent-green font-bold">➜</span>
                <span className="text-accent-cyan">~</span>
                <span className="w-2 h-4 bg-text-primary animate-pulse" />
              </div>
            )}
          </div>
        </motion.div>

        {/* About text below terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Soy un desarrollador apasionado por la tecnología, actualmente cursando el 2º año
            de <span className="text-accent-cyan font-medium">Ingeniería Informática</span> en
            la Universidad de Zaragoza, con un título previo en{' '}
            <span className="text-accent-violet font-medium">DAM</span>. Busco activamente{' '}
            <span className="text-accent-green font-medium">teletrabajo</span> donde pueda
            aportar valor y seguir creciendo profesionalmente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
