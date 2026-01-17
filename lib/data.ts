import { Github, Linkedin, Mail, ExternalLink, Terminal, Code, Cpu, Globe, Brain, Trophy, Medal } from 'lucide-react';

export const personalInfo = {
  name: "Md. Nur Siddik Ruman",
  role: "AI/ML Specialist",
  email: "nsruman999@gmail.com",
  phone: "+8801829-995649",
  location: "Chattogram 4349, Bangladesh",
  bio: [
    "I'm a final-year Computer Science student at CUET with a deep passion for Artificial Intelligence and Machine Learning. My journey in technology is driven by a curiosity to understand how machines learn and a desire to build solutions that tackle real-world challenges.",
    "My expertise lies in Transformer Architectures, NLP, Large Language Models (LLM). I have hands-on experience building foundational models from scratch, such as a GPT-2 implementation using PyTorch, Fine-tuning LLM on domain-specific tasks and developing sophisticated RAG-powered systems for specialized domains. Winning the LT-EDI @ LDK 2025 shared task on hate speech detection, and being a finalist in an AI hackathon stand as a testament to my capability in applying research to practical problems.",
    "Beyond development, I am deeply committed to the AI community. As an instructor for the ML wing of the IEEE Computer Society CUET Student Branch, I enjoy mentoring others and sharing knowledge. Through this, I'm consistently learning new things and developing myself."
  ],
  available: true,
  resumeUrl: ".\\lib\\Md. Nur Siddik Ruman (CV).pdf",
  profileImage: ".\\lib\\WhatsApp Image 2026-01-18 at 2.40.53 AM.jpeg"
};

export const socialLinks = [
  { icon: Github, href: 'https://github.com/Ruman098', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nsruman', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:nsruman999@gmail.com', label: 'Email' },
  { icon: ExternalLink, href: 'https://www.kaggle.com/nursiddikruman', label: 'Kaggle', custom: true },
  { icon: Terminal, href: 'https://codeforces.com/profile/Ruman007', label: 'Codeforces', custom: true },
];

export const education = [
  {
    degree: "B.Sc in Computer Science & Engineering",
    institution: "Chittagong University of Engineering & Technology",
    period: "March 2022 - Present",
    location: "Chattogram, Bangladesh",
    grade: "CGPA: 3.46/4.00",
    courses: [
      { name: 'Artificial Intelligence', grade: 'A' },
      { name: 'Software Engineering', grade: 'A' },
      { name: 'OOP', grade: 'A-' }
    ],
    featured: true
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Azizul Haque College, Bogura",
    period: "2020",
    grade: "GPA: 5.00",
    featured: false
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Bogura Zilla School, Bogura",
    period: "2018",
    grade: "GPA: 5.00",
    featured: false
  }
];

export const skills = [
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    items: ['Deep Learning', 'NLP', 'LLMs', 'RAG Pipelines', 'AI Agents', 'Transformer Arch.', 'Fine-tuning', 'AI agents']
  },
  {
    category: 'Languages',
    icon: Code,
    items: ['Python', 'C++', 'C', 'C#', 'SQL', 'JavaScript', 'Bash']
  },
  {
    category: 'Frameworks & Libraries',
    icon: Cpu,
    items: ['PyTorch', 'TensorFlow', 'LangChain', 'Hugging Face', 'Scikit-learn', 'Pandas', 'NumPy']
  },
  {
    category: 'Web & Tools',
    icon: Globe,
    items: ['React.js', '.NET', 'Streamlit', 'Git/GitHub', 'VS Code', 'Linux', 'MySQL']
  }
];

export const problemSolving = {
  title: 'Competitive Programming',
  description: 'Solved 200+ problems on Codeforces (Pupil) with a strong focus on Data Structures and Algorithms to sharpen logical thinking.',
  icon: Terminal,
  link: 'https://codeforces.com/profile/Ruman007',
  linkText: 'View Codeforces'
};

export const softSkills = [
  'Research-Oriented Mindset',
  'Technical Communication',
  'Team Leadership & Mentoring',
  'Adaptability',
  'Critical Thinking',
  'Problem-Solving',
];

export const projects = [
  {
    title: 'GPT-2 from Scratch',
    description: 'Built GPT-2 small (~124M parameters) from scratch using PyTorch. Manually implemented internal components like Multi-Head Attention and Layer Normalization to understand transformer architecture in depth.',
    tech: ['PyTorch', 'NumPy', 'Python', 'Transformer Architecture'],
    category: 'Deep Learning',
    featured: true,
    link: '#'
  },
  {
    title: 'Nuclear Domain AI Assistant',
    description: 'Developed a document-aware AI chatbot for nuclear-domain question answering using Retrieval-Augmented Generation (RAG). Implemented a Gemini-powered ReAct agent with strict safety constraints, citation-based answers, and controlled web fallback.',
    tech: ['Python', 'Streamlit', 'LangChain', 'Gemini 2.5', 'FAISS', 'RAG'],
    category: 'AI/ML',
    featured: true,
    link: '#'
  },
  {
    title: 'Bangla Physics MCQ Solver using LLMs',
    description: 'Developed an LLM-based solution to solve Bangla Physics multiple-choice questions. Used open-source LLM models (Llama, Qwen, and Mistral) to predict the correct option. Qwen3-14B achieved a score of 0.92 on the private score.',
    tech: ['Python', 'Hugging Face', 'Qwen3', 'Mistral', 'LLaMA', 'PyTorch'],
    category: 'AI/ML',
    featured: true,
    link: '#'
  },
  {
    title: 'Caste & Migration Hate Speech Detection',
    description: 'Engineered a hate speech detection model for a low-resource language (Tamil) by fine-tuning Hugging Face transformers. Achieved a benchmark macro F1-score of 0.88 on the test set (LT-EDI @ LDK 2025).',
    tech: ['Python', 'Hugging Face', 'BERT', 'PyTorch', 'Scikit-learn'],
    category: 'NLP',
    featured: true,
    link: '#'
  }
];

export const publications = [
  {
    title: 'Tamil Caste and Migration Hate Speech Detection',
    venue: 'Proceedings of the Third Workshop on Language Technology for Equality, Diversity and Inclusion (LT-EDI 2025) @ LDK 2025',
    publisher: 'ACL Anthology',
    date: '2025',
    description: 'Developed a state-of-the-art transformer-based model to detect hate speech related to caste and migration in Tamil social media text. The proposed solution achieved the 1st rank in the shared task competition.',
    link: 'https://aclanthology.org/2025.ltedi-1.18/',
    authors: 'Ruman, et al.',
    tags: ['NLP', 'Hate Speech Detection', 'Transformers', 'ACL']
  }
];

export const achievements = [
  {
    title: 'Winner – Shared Task Competition, LT-EDI @ LDK 2025',
    description: 'Ranked 1st for developing a transformer-based model for Tamil caste and migration hate speech detection.',
    year: '2025',
    icon: Trophy,
    color: 'amber'
  },
  {
    title: 'Winner – Intra CUET Machine Learning Contest 2025',
    description: 'Ranked 1st for developing an LLM-based solution for solving Bangla Physics MCQ problems.',
    year: '2025',
    icon: Trophy,
    color: 'amber'
  },
  {
    title: 'Finalist – Televerse 1.0 AI-Fication Hackathon',
    description: 'Ranked top 13th for developing a robust Automatic Speech Recognition (ASR) system for transcribing 20 regional Bangla dialects.',
    year: '2025',
    icon: Medal,
    color: 'violet'
  }
];

export const certifications = [
  {
    title: 'EDGE Course—BD: Front-End Development',
    issuer: 'React/NodeJS/VueJS/AngularJS',
    date: 'April 2025',
    link: '#'
  },
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'Coursera - Stanford University',
    date: 'September 2024',
    link: '#'
  }
];

export const activities = [
  { title: 'Instructor – ML wing, IEEE Computer Society CUET Student Branch Chapter', period: '2025' },
  { title: 'Member – CUET Computer Club', period: '2022-2023' },
  { title: 'Participant – Coding Competition, CUET CSE Fest', period: '2022' }
];

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Publications', href: '#publications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];