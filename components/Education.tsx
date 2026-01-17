import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import { education } from '../lib/data';

export default function Education({ darkMode }: { darkMode: boolean }) {
  const mainEdu = education.find(e => e.featured);
  const otherEdu = education.filter(e => !e.featured);

  return (
    <section id="education" className={`py-32 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
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
            Education
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Academic Background
          </h2>
        </motion.div>

        <div className="space-y-12">
          {/* Main Degree - Featured */}
          {mainEdu && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative p-8 rounded-3xl border-2 ${
                darkMode 
                  ? 'bg-slate-900/50 border-violet-900/50 hover:border-violet-700' 
                  : 'bg-white border-violet-100 hover:border-violet-200 shadow-sm'
              }`}
            >
               <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                  <div className="space-y-4">
                    <div className={`inline-flex p-3 rounded-2xl ${darkMode ? 'bg-violet-900/30 text-violet-300' : 'bg-violet-50 text-violet-600'}`}>
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {mainEdu.degree}
                      </h3>
                      <p className={`text-lg font-medium ${darkMode ? 'text-violet-400' : 'text-violet-600'}`}>
                        {mainEdu.institution}
                      </p>
                    </div>
                    
                    <div className={`flex flex-wrap items-center gap-6 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {mainEdu.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {mainEdu.location}
                      </span>
                      <span className={`font-semibold px-3 py-1 rounded-full ${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'}`}>
                        {mainEdu.grade}
                      </span>
                    </div>
                  </div>

                  <div className={`w-full md:w-auto p-5 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
                    <h4 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Key Coursework
                    </h4>
                    <ul className="space-y-2">
                      {mainEdu.courses?.map((course) => (
                        <li key={course.name} className="flex items-center justify-between gap-8 text-sm">
                          <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{course.name}</span>
                          <span className={`font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>{course.grade}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>
            </motion.div>
          )}

          {/* Prior Education - Compact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Prior Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
               {otherEdu.map((edu, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-100'}`}>
                      <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{edu.degree}</h4>
                      <p className={`text-sm mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{edu.institution}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>{edu.period}</span>
                        <span className={`font-medium ${darkMode ? 'text-violet-400' : 'text-violet-600'}`}>{edu.grade}</span>
                      </div>
                  </div>
               ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}