import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowRight, Download, Github, Linkedin, Mail, Code, Cpu, Database, 
  Layout, Search, Map, CreditCard, ShoppingCart, GraduationCap, 
  Briefcase, Trophy, Globe, Sparkles, Zap, Brain, Terminal, Layers
} from "lucide-react";
import { useRef } from "react";

// --- Components ---

export const NeuralBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_50%)]"
      />
    </div>
  );
};

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-4 md:gap-8 px-4 md:px-8 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        <a href="#hero" className="text-[10px] md:text-sm font-bold text-white/70 hover:text-emerald-400 transition-colors uppercase tracking-widest">Home</a>
        <a href="#skills" className="text-[10px] md:text-sm font-bold text-white/70 hover:text-emerald-400 transition-colors uppercase tracking-widest">Skills</a>
        <a href="#projects" className="text-[10px] md:text-sm font-bold text-white/70 hover:text-emerald-400 transition-colors uppercase tracking-widest">Work</a>
        <a href="#contact" className="px-3 md:px-5 py-1.5 rounded-full bg-emerald-500 text-neutral-950 text-[10px] md:text-sm font-bold hover:bg-emerald-400 transition-colors uppercase tracking-widest">
          Hire
        </a>
      </motion.div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-5xl"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase"
        >
          <Sparkles className="w-3 h-3" />
          Product-Oriented Builder
        </motion.div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.9] text-white">
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Intelligent Systems</span> <br className="hidden md:block" /> That Solve Real-World Problems.
        </h1>
        
        <p className="text-base md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          B.Tech AI/ML Student at Manav Rachna University • Full Stack Developer (NxtWave) • Hackathon Innovator
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects"
            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-emerald-500 text-neutral-950 font-black hover:bg-emerald-400 transition-all hover:scale-105 shadow-2xl shadow-emerald-500/20"
          >
            EXPLORE PROJECTS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#experience"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all"
          >
            EXPERIENCE
          </a>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 rounded-2xl text-neutral-400 hover:text-white transition-colors font-black text-xs tracking-widest">
            <Download className="w-4 h-4" />
            RESUME.PDF
          </button>
        </div>
      </motion.div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-40">
        {["PYTHON", "REACT", "NODE.JS", "MONGODB"].map((tech) => (
          <span key={tech} className="text-[10px] font-black tracking-[0.4em] text-white text-center">{tech}</span>
        ))}
      </div>
    </section>
  );
};

export const StrategicValue = () => {
  return (
    <section id="value" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-400 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Positioning</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-none">
              What I Bring.
            </h2>
            <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
              I blend Artificial Intelligence and Full Stack Development to design scalable, deployable digital systems.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "AI-driven system modeling",
                "React & React Native architecture",
                "Backend API integration",
                "Research intelligence system design",
                "Deployment-focused execution"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-neutral-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-2xl font-display font-medium text-white border-l-4 border-emerald-500 pl-6 italic">
              "I don’t build assignments. I build systems with real-world impact."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] bg-white/5 border border-white/10 flex items-center justify-center p-12 overflow-hidden">
              <div className="relative w-full h-full">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-emerald-500 rounded-3xl shadow-2xl shadow-emerald-500/40 flex items-center justify-center">
                    <Cpu className="w-16 h-16 text-neutral-950" />
                  </div>
                </div>
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
                >
                  <Layout className="w-6 h-6 text-cyan-400" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-10 left-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
                >
                  <Database className="w-6 h-6 text-purple-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "C++", "JavaScript"],
      icon: <Code className="w-6 h-6" />,
      color: "text-emerald-400"
    },
    {
      title: "Frontend",
      skills: ["React.js", "React Native", "HTML", "CSS"],
      icon: <Layout className="w-6 h-6" />,
      color: "text-cyan-400"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
      icon: <Layers className="w-6 h-6" />,
      color: "text-blue-400"
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL"],
      icon: <Database className="w-6 h-6" />,
      color: "text-purple-400"
    },
    {
      title: "AI / ML",
      skills: ["Machine Learning Fundamentals", "Topic Modeling", "Trend Analysis", "Research Similarity Detection"],
      icon: <Brain className="w-6 h-6" />,
      color: "text-pink-400"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
      icon: <Globe className="w-6 h-6" />,
      color: "text-orange-400"
    }
  ];

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-emerald-400 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Capability</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-none">Technical Depth.</h2>
          </div>
          <p className="text-neutral-500 text-sm md:text-base max-w-xs md:text-right">
            A comprehensive toolkit spanning the entire stack, with a specialized focus on intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-4 py-2 rounded-xl bg-white/5 text-neutral-400 text-xs font-bold border border-white/5 group-hover:border-white/10 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "Credit Score Intelligence System",
      problem: "Users don’t understand how credit risk is calculated.",
      solution: "Built a rule-based web credit score calculator.",
      tech: ["HTML", "CSS", "JavaScript"],
      impact: "Demonstrates financial logic modeling and frontend system integration.",
      icon: <CreditCard className="w-8 h-8" />
    },
    {
      title: "Smart QR Nav",
      problem: "Navigation inefficiencies in large university campuses.",
      solution: "QR-based digital navigation system.",
      tech: ["QR Integration", "Web Mapping"],
      impact: "Scalable model for hospitals, airports, malls.",
      icon: <Map className="w-8 h-8" />
    },
    {
      title: "Research Intelligence Engine",
      problem: "Students unknowingly duplicate research work.",
      solution: "AI-based topic modeling and similarity detection.",
      tech: ["Python", "NLP", "Topic Modeling"],
      impact: "Reduces research redundancy and improves academic efficiency.",
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Petify Ecommerce App",
      problem: "Need for a seamless pet supply shopping experience.",
      solution: "Built cross-platform ecommerce mobile app using React Native.",
      tech: ["React Native", "State Management", "User Auth"],
      impact: "Demonstrates scalable mobile architecture capability.",
      icon: <ShoppingCart className="w-8 h-8" />
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-emerald-400 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Proof</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white">Case Studies.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/5 text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
              
              <div className="space-y-6 mb-10">
                <p className="text-neutral-400 leading-relaxed"><strong className="text-white">Challenge:</strong> {project.problem}</p>
                <p className="text-neutral-400 leading-relaxed"><strong className="text-white">Impact:</strong> {project.impact}</p>
              </div>

              <button className="flex items-center gap-2 text-emerald-400 font-black text-xs uppercase tracking-widest group/btn">
                View Case Study
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Experience = () => {
  const experiences = [
    {
      title: "B.Tech — Artificial Intelligence & Machine Learning",
      org: "Manav Rachna University",
      focus: ["Machine Learning", "Algorithms", "Data Structures", "AI system fundamentals"],
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      title: "Full Stack Development Program",
      org: "NxtWave",
      focus: ["REST APIs", "React architecture", "Backend integration", "Deployment pipelines"],
      outcome: "Built multiple deployable full-stack applications.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "WOW Idea Hackathon",
      org: "Innovation Challenge",
      focus: ["Rapid prototyping", "Team collaboration", "Time-bound innovation"],
      icon: <Trophy className="w-5 h-5" />
    }
  ];

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-emerald-400 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Credibility</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white">Professional Journey.</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-neutral-950 border-4 border-emerald-500 -translate-x-1/2 z-10 hidden md:flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/20">
                  {exp.icon}
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                    <h3 className="text-xl font-bold mb-1 text-white">{exp.title}</h3>
                    <p className="text-emerald-400 font-black text-[10px] mb-4 uppercase tracking-widest">{exp.org}</p>
                    
                    <div className="space-y-2 mb-4">
                      {exp.focus.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-neutral-400 text-sm">
                          <div className="w-1 h-1 rounded-full bg-neutral-600" />
                          {f}
                        </div>
                      ))}
                    </div>
                    
                    {exp.outcome && (
                      <p className="text-sm font-medium text-white pt-4 border-t border-white/5">
                        {exp.outcome}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Research = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-emerald-400 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Authority</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white">Research & Innovation.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
            "Research duplication detection",
            "AI-powered knowledge mapping",
            "Intelligent navigation systems",
            "Financial modeling logic",
            "Scalable ecommerce systems"
          ].map((area, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-4 group hover:border-emerald-500/50 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Search className="w-5 h-5" />
              </div>
              <span className="font-bold text-white text-sm uppercase tracking-widest">{area}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-emerald-500 to-cyan-600 text-neutral-950 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%)]" />
          </div>
          <span className="text-neutral-950 font-black tracking-[0.3em] uppercase text-[10px] mb-6 block">Vision Statement</span>
          <p className="text-2xl md:text-4xl font-display font-bold leading-tight">
            "Designing AI-powered systems that reduce inefficiency in research, navigation, and digital decision-making environments."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 tracking-tighter text-white">
            Let’s Build Systems <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">That Matter.</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20">
            <a href="mailto:tharundevanaboina9@gmail.com" className="group flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">Email</span>
            </a>
            <a href="#" className="group flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
            <a href="#" className="group flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-neutral-950 transition-all">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">GitHub</span>
            </a>
          </div>

          <button className="px-12 py-6 rounded-2xl bg-emerald-500 text-neutral-950 font-black text-sm uppercase tracking-[0.2em] hover:bg-emerald-400 transition-all hover:scale-105 shadow-2xl shadow-emerald-500/20">
            Download Resume
          </button>
        </motion.div>

        <footer className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-neutral-600 text-[10px] font-bold uppercase tracking-widest">© 2026 Devanaboina Tharun</p>
          <p className="text-neutral-900 font-black tracking-[0.3em] uppercase text-[10px]">AI Systems Builder</p>
          <div className="flex gap-8">
            <span className="text-neutral-600 text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Neural Network Status: Active</span>
          </div>
        </footer>
      </div>
    </section>
  );
};
