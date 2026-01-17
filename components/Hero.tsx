import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileText } from 'lucide-react';
import { Button } from "./ui/button";
import { personalInfo, socialLinks } from '../lib/data';

export default function Hero({ darkMode }: { darkMode: boolean }) {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className={`relative min-h-screen flex items-center pt-28 lg:pt-20 overflow-hidden ${
      darkMode ? 'bg-slate-950' : 'bg-slate-50/50'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-[10%] w-96 h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-violet-600' : 'bg-violet-400'
        }`} />
        <div className={`absolute bottom-20 left-[10%] w-72 h-72 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-indigo-600' : 'bg-indigo-400'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full text-center lg:text-left"
          >
            {personalInfo.available && (
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 ${
                darkMode ? 'bg-violet-900/30 text-violet-300 border border-violet-800' : 'bg-violet-100 text-violet-700 border border-violet-200'
              }`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for opportunities
              </div>
            )}

            <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Hi, I'm <span className={`block ${darkMode ? 'text-white' : 'text-slate-900'}`}>Md. Nur Siddik</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 block">
                Ruman
              </span>
            </h1>

            <p className={`text-xl md:text-2xl font-medium mb-6 ${
              darkMode ? 'text-slate-200' : 'text-slate-700'
            }`}>
              {personalInfo.role}
            </p>

            <p className={`text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Passionate about building intelligent systems. Specializing in Deep Learning, NLP, and Large Language Models(LLM)
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollTo('#contact')}
                className="rounded-full px-8 py-6 text-base bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-600/25"
              >
                Contact Me
              </Button>
              <a href={personalInfo.resumeUrl} download>
                <Button 
                  variant="outline"
                  className={`rounded-full px-8 py-6 text-base gap-2 ${
                    darkMode 
                      ? 'border-slate-700 text-white hover:bg-slate-800' 
                      : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`relative group ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-violet-600'} transition-colors`}
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                  
                  {/* Tooltip */}
                  <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-2.5 py-1 text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none z-10 transform translate-y-2 group-hover:translate-y-0 ${
                    darkMode 
                      ? 'bg-slate-800 text-white border border-slate-700 shadow-xl' 
                      : 'bg-slate-900 text-white shadow-xl'
                  }`}>
                    {link.label}
                    {/* Arrow */}
                    <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                      darkMode ? 'bg-slate-800 border-r border-b border-slate-700' : 'bg-slate-900'
                    }`}></span>
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Visual/Stats Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex items-center justify-center lg:h-[600px] mb-8 lg:mb-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-md aspect-square">
              <div className={`absolute inset-0 rounded-full opacity-20 animate-pulse ${
                darkMode ? 'bg-gradient-to-tr from-violet-500 to-indigo-500' : 'bg-gradient-to-tr from-violet-400 to-indigo-400'
              }`} />
              
              <div className={`absolute inset-6 md:inset-10 rounded-full overflow-hidden border-4 shadow-2xl ${
                 darkMode ? 'border-slate-700 bg-slate-800' : 'border-white bg-white'
              }`}>
                 <img 
                   src={personalInfo.profileImage} 
                   alt={personalInfo.name} 
                   className="w-full h-full object-cover"
                 />
              </div>
            </div>
          </motion.div>

        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hidden lg:flex"
          onClick={() => scrollTo('#about')}
        >
          <span className={`text-xs uppercase tracking-widest ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Scroll Down
          </span>
          <ChevronDown className={`w-5 h-5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`} />
        </motion.div>
      </div>
    </section>
  );
}