import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar, Users, Award } from 'lucide-react';
import { publications } from '../lib/data';

export default function Publications({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="publications" className={`py-20 lg:py-24 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className={`inline-block text-sm font-medium tracking-wider uppercase mb-4 ${
            darkMode ? 'text-violet-400' : 'text-violet-600'
          }`}>
            Research
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Publications
          </h2>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-6 rounded-2xl border transition-all ${
                darkMode 
                  ? 'bg-slate-900/50 border-slate-800 hover:border-violet-500/30' 
                  : 'bg-white border-slate-200 hover:border-violet-200 hover:shadow-lg'
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                {/* Icon Column */}
                <div className="hidden lg:block">
                  <div className={`p-3 rounded-xl ${darkMode ? 'bg-violet-900/20' : 'bg-violet-50'}`}>
                    <BookOpen className={`w-6 h-6 ${darkMode ? 'text-violet-400' : 'text-violet-600'}`} />
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                    <span className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-medium ${
                      darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                    }`}>
                      <Calendar className="w-3.5 h-3.5" />
                      {pub.date}
                    </span>
                    <span className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-medium ${
                      darkMode ? 'bg-indigo-900/30 text-indigo-300' : 'bg-indigo-50 text-indigo-700'
                    }`}>
                      <Award className="w-3.5 h-3.5" />
                      {pub.publisher}
                    </span>
                  </div>

                  <h3 className={`text-xl md:text-2xl font-bold mb-2 group-hover:text-violet-600 transition-colors ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {pub.title}
                  </h3>
                  
                  <div className={`flex items-center gap-2 mb-3 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <Users className="w-4 h-4" />
                    <span>{pub.authors}</span>
                  </div>

                  <p className={`text-base md:text-lg leading-relaxed mb-4 ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {pub.description}
                  </p>
                  
                  <div className={`mb-5 p-3 rounded-xl border text-sm font-medium ${
                     darkMode 
                       ? 'bg-slate-800/50 border-slate-700 text-slate-300' 
                       : 'bg-slate-50 border-slate-100 text-slate-700'
                  }`}>
                    {pub.venue}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <span 
                          key={tag}
                          className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide ${
                            darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 font-semibold transition-colors text-sm ${
                        darkMode ? 'text-violet-400 hover:text-white' : 'text-violet-600 hover:text-slate-900'
                      }`}
                    >
                      Read Paper
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}