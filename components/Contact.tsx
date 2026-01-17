import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { personalInfo, socialLinks } from '../lib/data';

export default function Contact({ darkMode }: { darkMode: boolean }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/nsruman999@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: "table",
          _captcha: "false"
        })
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try using the email link directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: undefined },
  ];

  return (
    <section id="contact" className={`py-32 ${darkMode ? 'bg-slate-900' : 'bg-slate-50/50'}`}>
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
            Contact
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Let's Work Together
          </h2>
          <p className={`text-lg max-w-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Interested in collaboration or have questions? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Get in Touch
            </h3>
            
            <div className="space-y-4 mb-8">
              {contactDetails.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                    darkMode 
                      ? 'bg-slate-800/50 hover:bg-slate-800' 
                      : 'bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    darkMode ? 'bg-violet-900/30' : 'bg-violet-100'
                  }`}>
                    <item.icon className={`w-5 h-5 ${darkMode ? 'text-violet-400' : 'text-violet-600'}`} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={`font-medium hover:text-violet-600 transition-colors ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Find Me Online
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-slate-800 text-slate-300 hover:bg-violet-600 hover:text-white' 
                      : 'bg-slate-100 text-slate-700 hover:bg-violet-600 hover:text-white'
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={`p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Your Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    required
                    className={darkMode ? 'bg-slate-900 border-slate-700 text-white' : ''}
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Your Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    required
                    className={darkMode ? 'bg-slate-900 border-slate-700 text-white' : ''}
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Your message here..."
                    rows={4}
                    required
                    className={darkMode ? 'bg-slate-900 border-slate-700 text-white' : ''}
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-6 rounded-xl font-medium"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Sent Successfully!
                    </>
                  ) : isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}