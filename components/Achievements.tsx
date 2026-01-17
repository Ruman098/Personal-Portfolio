import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, ExternalLink } from 'lucide-react';
import { achievements, certifications, activities } from '../lib/data';

const colorClasses: Record<string, { bg: string, darkBg: string, text: string, darkText: string }> = {
  amber: {
    bg: 'bg-amber-100',
    darkBg: 'bg-amber-900/30',
    text: 'text-amber-600',
    darkText: 'text-amber-400'
  },
  violet: {
    bg: 'bg-violet-100',
    darkBg: 'bg-violet-900/30',
    text: 'text-violet-600',
    darkText: 'text-violet-400'
  }
};

export default function Achievements({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="achievements" className={`py-32 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
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
            Achievements
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Recognition & Growth
          </h2>
        </motion.div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl border overflow-hidden ${
                darkMode 
                  ? 'bg-slate-800/50 border-slate-700' 
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-30 ${
                darkMode ? colorClasses[achievement.color].darkBg : colorClasses[achievement.color].bg
              }`} />
              
              <div className="relative">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  darkMode ? colorClasses[achievement.color].darkBg : colorClasses[achievement.color].bg
                }`}>
                  <achievement.icon className={`w-6 h-6 ${
                    darkMode ? colorClasses[achievement.color].darkText : colorClasses[achievement.color].text
                  }`} />
                </div>
                
                <div className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-3 ${
                  darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                }`}>
                  {achievement.year}
                </div>
                
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {achievement.title}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-100'}`}>
                <Award className={`w-5 h-5 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Certifications
              </h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-4 rounded-xl transition-all group relative ${
                    darkMode 
                      ? 'bg-slate-700/50 hover:bg-slate-700 hover:shadow-lg hover:shadow-violet-900/10' 
                      : 'bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-violet-100'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="pr-6">
                      <h4 className={`font-semibold mb-1 group-hover:text-violet-500 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {cert.title}
                      </h4>
                      <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {cert.issuer}
                      </p>
                    </div>
                    <ExternalLink className={`w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 ${
                      darkMode ? 'text-violet-400' : 'text-violet-600'
                    }`} />
                  </div>
                  <span className={`inline-flex items-center gap-1 text-xs mt-2 ${
                    darkMode ? 'text-slate-500' : 'text-slate-500'
                  }`}>
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Extra-curricular Activities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
                <Users className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Extra-curricular Activities
              </h3>
            </div>
            
            <div className="space-y-4">
              {activities.map((activity) => (
                <div
                  key={activity.title}
                  className={`flex items-start gap-3 p-4 rounded-xl ${
                    darkMode ? 'bg-slate-700/50' : 'bg-slate-50'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    darkMode ? 'bg-purple-400' : 'bg-purple-600'
                  }`} />
                  <div>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {activity.title}
                    </p>
                    <span className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                      {activity.period}
                    </span>
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