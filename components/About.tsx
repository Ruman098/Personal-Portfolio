import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../lib/data';

export default function About({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="about" className={`py-32 ${darkMode ? 'bg-slate-900' : 'bg-slate-50/50'}`}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <span className={`inline-block text-sm font-medium tracking-wider uppercase mb-4 ${
            darkMode ? 'text-violet-400' : 'text-violet-600'
          }`}>
            About Me
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 leading-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Passionate about building{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              intelligent systems
            </span>
          </h2>
          
          <div className={`space-y-6 text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {personalInfo.bio.map((paragraph, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}