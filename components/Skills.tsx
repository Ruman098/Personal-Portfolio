import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Lightbulb, Users, CheckCircle2 } from 'lucide-react';
import { skills, problemSolving, softSkills } from '../lib/data';

export default function Skills({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="skills" className={`py-32 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className={`inline-block text-sm font-medium tracking-wider uppercase mb-4 ${
            darkMode ? 'text-violet-400' : 'text-violet-600'
          }`}>
            Expertise
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Skills & Capabilities
          </h2>
        </motion.div>

        {/* 1. Technical Skills */}
        <div className="mb-20">
          <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            <Cpu className="w-6 h-6 text-violet-500" />
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-2xl border transition-all hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-slate-900/50 border-slate-800 hover:border-violet-500/30 hover:bg-slate-800' 
                    : 'bg-slate-50 border-slate-200 hover:border-violet-200 hover:bg-white hover:shadow-lg'
                }`}
              >
                <div className={`p-3 rounded-xl inline-flex mb-4 ${
                  darkMode ? 'bg-slate-800' : 'bg-white shadow-sm'
                }`}>
                  <category.icon className={`w-6 h-6 ${darkMode ? 'text-violet-400' : 'text-violet-600'}`} />
                </div>
                <h4 className={`text-lg font-bold mb-4 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                        darkMode 
                          ? 'bg-slate-800 text-slate-300 border border-slate-700' 
                          : 'bg-white text-slate-600 border border-slate-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
          {/* 2. Problem Solving Skills */}
          <div className="flex flex-col h-full">
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              <Lightbulb className="w-6 h-6 text-amber-500" />
              Problem Solving
            </h3>
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-2xl border h-full ${
                  darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                 <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg mt-1 shrink-0 ${darkMode ? 'bg-amber-900/20' : 'bg-amber-50'}`}>
                      <problemSolving.icon className={`w-5 h-5 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {problemSolving.title}
                      </h4>
                      <p className={`text-sm mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {problemSolving.description}
                      </p>
                      {problemSolving.link && (
                        <a 
                          href={problemSolving.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`text-xs font-semibold hover:underline ${darkMode ? 'text-violet-400' : 'text-violet-600'}`}
                        >
                          {problemSolving.linkText} →
                        </a>
                      )}
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>

          {/* 3. Soft Skills */}
          <div className="flex flex-col h-full">
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              <Users className="w-6 h-6 text-emerald-500" />
              Soft Skills
            </h3>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-2xl border h-full ${
                darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="grid sm:grid-cols-2 gap-4 h-full content-center">
                {softSkills.map((skill) => (
                   <div 
                      key={skill} 
                      className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                        darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-50'
                      }`}
                   >
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${darkMode ? 'text-emerald-400' : 'text-emerald-500'}`} />
                      <span className={`font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {skill}
                      </span>
                   </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}