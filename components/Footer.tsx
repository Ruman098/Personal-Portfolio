import React from 'react';
import { motion } from 'framer-motion';

export default function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <footer className={`py-12 border-t ${
      darkMode ? 'bg-slate-950 border-slate-800/50' : 'bg-white border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              ruman<span className="text-violet-600">.</span>
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}
          >
            © {new Date().getFullYear()} Md. Nur Siddik Ruman. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}