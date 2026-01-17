import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from "./ui/button";
import { projects } from '../lib/data';

const categoryColors: Record<string, { bg: string, text: string, darkBg: string, darkText: string }> = {
  'AI/ML': { bg: 'bg-violet-100', text: 'text-violet-700', darkBg: 'bg-violet-900/30', darkText: 'text-violet-400' },
  'NLP': { bg: 'bg-indigo-100', text: 'text-indigo-700', darkBg: 'bg-indigo-900/30', darkText: 'text-indigo-400' },
  'Deep Learning': { bg: 'bg-purple-100', text: 'text-purple-700', darkBg: 'bg-purple-900/30', darkText: 'text-purple-400' },
  'ML App': { bg: 'bg-blue-100', text: 'text-blue-700', darkBg: 'bg-blue-900/30', darkText: 'text-blue-400' },
  'Systems': { bg: 'bg-slate-100', text: 'text-slate-700', darkBg: 'bg-slate-700', darkText: 'text-slate-300' },
};

export default function Projects({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="projects" className={`py-32 ${darkMode ? 'bg-slate-900' : 'bg-slate-50/50'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className={`inline-block text-sm font-medium tracking-wider uppercase mb-4 ${
              darkMode ? 'text-violet-400' : 'text-violet-600'
            }`}>
              Projects
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Featured Work
            </h2>
          </div>
          <p className={`text-lg max-w-md ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A collection of AI/ML projects showcasing deep learning, NLP, and practical applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group flex flex-col p-6 rounded-2xl border transition-all ${
                darkMode 
                  ? 'bg-slate-800/50 border-slate-700 hover:border-violet-500/50' 
                  : 'bg-white border-slate-200 hover:border-violet-300 shadow-sm hover:shadow-lg'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    darkMode ? 'bg-violet-900/30' : 'bg-violet-100'
                  }`}>
                    <Folder className={`w-5 h-5 ${darkMode ? 'text-violet-400' : 'text-violet-600'}`} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode 
                      ? `${categoryColors[project.category]?.darkBg || 'bg-slate-800'} ${categoryColors[project.category]?.darkText || 'text-slate-300'}`
                      : `${categoryColors[project.category]?.bg || 'bg-slate-100'} ${categoryColors[project.category]?.text || 'text-slate-700'}`
                  }`}>
                    {project.category}
                  </span>
                </div>
                {project.featured && (
                  <Sparkles className={`w-5 h-5 ${darkMode ? 'text-amber-400' : 'text-amber-500'}`} />
                )}
              </div>

              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-3 group-hover:text-violet-600 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {project.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-4 ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                        darkMode 
                          ? 'bg-slate-700 text-slate-300' 
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-end">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    darkMode 
                      ? 'text-violet-400 hover:text-white' 
                      : 'text-violet-600 hover:text-slate-900'
                  }`}
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href="https://github.com/Ruman098" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className={`group ${
                darkMode 
                  ? 'border-slate-600 text-white bg-slate-800 hover:bg-slate-700' 
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}