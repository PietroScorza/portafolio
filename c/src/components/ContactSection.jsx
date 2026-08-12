import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileDown, Copy, Check, ExternalLink } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = profileData.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: profileData.linkedin,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      color: '#0A66C2',
      description: 'Conectemos',
    },
    {
      label: 'GitHub',
      href: profileData.github,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      color: '#FFFFFF',
      description: 'Mis proyectos',
    },
  ];

  const cvDownloadUrl = `${import.meta.env.BASE_URL}cv-pietro-scorza.pdf`;

  return (
    <section id="contacto" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-cyan/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Hablamos? <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Estoy buscando activamente oportunidades de teletrabajo. ¡No dudes en contactarme!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Email card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-base p-6 md:p-8 flex flex-col items-center text-center gap-4"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 border border-accent-cyan/20 flex items-center justify-center">
              <Mail className="text-accent-cyan" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-1">Email</h3>
              <p className="text-text-secondary text-sm">{profileData.email}</p>
            </div>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25 hover:scale-105 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={16} />
                  ¡Copiado!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copiar Email
                </>
              )}
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-base p-5 flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border border-dark-border transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${link.color}10`,
                    borderColor: `${link.color}25`,
                  }}
                >
                  <span
                    className="transition-colors duration-300"
                    style={{ color: link.color }}
                  >
                    {link.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary">{link.label}</h4>
                  <p className="text-sm text-text-secondary">{link.description}</p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-text-muted group-hover:text-accent-cyan transition-colors"
                />
              </a>
            ))}

            {/* CV Download */}
            <a
                href={cvDownloadUrl}
              download
              className="card-base p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent-violet/10 border border-accent-violet/25">
                <FileDown className="text-accent-violet" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-text-primary">Descargar CV</h4>
                <p className="text-sm text-text-secondary">PDF actualizado</p>
              </div>
              <ExternalLink
                size={16}
                className="text-text-muted group-hover:text-accent-violet transition-colors"
              />
            </a>
          </motion.div>
        </div>

        {/* Availability banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-accent-green/20 bg-accent-green/5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green pulse-green" />
            </span>
            <span className="text-sm font-medium text-accent-green">
              {profileData.status}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
