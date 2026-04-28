"use client";

import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/profile";
import { portfolio } from "@/data/portfolio";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProjectCard } from "@/components/ProjectCard";
import { Mail, Pickaxe, Code2, Database } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "20180301_102345.jpg",
  "564E7932-745F-4117-9FD2-647BC5AA3DAC.jpg",
  "IMG_0063.jpg",
  "IMG_0168.jpg",
  "IMG_2407.JPG",
  "IMG_2475.JPG",
  "IMG_2515.JPG",
  "IMG_2545.JPG",
  "IMG_2572.JPG",
  "IMG_2739.JPG",
  "IMG_2809.JPG",
  "IMG_2863.JPG",
  "IMG_3222.JPG",
  "IMG_3283.JPG",
  "IMG_3445.JPG",
  "IMG_3730.jpg",
  "IMG_3805.jpg"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  const { language } = useLanguage();
  const [randomImage, setRandomImage] = useState<string>("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * HERO_IMAGES.length);
    setRandomImage(HERO_IMAGES[randomIndex]);
  }, []);

  const currentProfile = {
    role: profile.roles[language],
    about: profile.about[language],
    skills: profile.skills[language],
  };

  const currentProjects = portfolio[language].projects;

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full p-6 flex justify-end gap-4 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <ThemeToggle />
        <LanguageToggle />
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative space-y-6 min-h-[60vh] flex flex-col justify-center rounded-3xl overflow-hidden p-8 md:p-16 border border-border/50 shadow-2xl"
        >
          {randomImage && (
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
                style={{ backgroundImage: `url('/${randomImage}')`, opacity: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </>
          )}
          
          <div className="relative z-10 space-y-6">
            <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm tracking-wide backdrop-blur-sm">
              {language === 'pt' ? 'Bem-vindo ao meu portfólio' : 'Welcome to my portfolio'}
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground drop-shadow-md">
              {profile.name}
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-secondary-foreground font-medium drop-shadow-md">
              {currentProfile.role}
            </motion.h2>
            
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary/80 backdrop-blur-sm rounded-full hover:bg-primary text-foreground transition-colors shadow-lg">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary/80 backdrop-blur-sm rounded-full hover:bg-primary text-foreground transition-colors shadow-lg">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href={`mailto:${profile.contact.email}`} className="p-3 bg-secondary/80 backdrop-blur-sm rounded-full hover:bg-primary text-foreground transition-colors shadow-lg">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold flex items-center gap-3">
            <Pickaxe className="text-accent" />
            {language === 'pt' ? 'Sobre Mim' : 'About Me'}
          </motion.h3>
          <motion.div variants={itemVariants} className="p-8 bg-card border border-border rounded-2xl shadow-xl">
            <p className="text-lg text-secondary-foreground leading-relaxed">
              {currentProfile.about}
            </p>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold flex items-center gap-3">
            <Code2 className="text-accent" />
            {language === 'pt' ? 'Habilidades' : 'Skills'}
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Geology */}
            <motion.div variants={itemVariants} className="bg-card p-6 border border-border rounded-xl">
              <div className="flex items-center gap-2 mb-4 text-primary font-bold">
                <Pickaxe className="w-5 h-5" />
                <h4>{language === 'pt' ? 'Geologia' : 'Geology'}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentProfile.skills.geology.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-secondary text-sm rounded-md text-secondary-foreground border border-border/50">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Tech & Dev */}
            <motion.div variants={itemVariants} className="bg-card p-6 border border-border rounded-xl">
              <div className="flex items-center gap-2 mb-4 text-primary font-bold">
                <Code2 className="w-5 h-5" />
                <h4>Tech & Dev</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentProfile.skills.tech.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-secondary text-sm rounded-md text-secondary-foreground border border-border/50">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Software */}
            <motion.div variants={itemVariants} className="bg-card p-6 border border-border rounded-xl">
              <div className="flex items-center gap-2 mb-4 text-primary font-bold">
                <Database className="w-5 h-5" />
                <h4>Software</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentProfile.skills.software.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-secondary text-sm rounded-md text-secondary-foreground border border-border/50">{skill}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold flex items-center gap-3">
            <Database className="text-accent" />
            {language === 'pt' ? 'Projetos de Desenvolvimento em Destaque' : 'Featured Development Projects'}
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-border mt-20 py-8 text-center text-secondary-foreground">
        <p>© {new Date().getFullYear()} Anderson Miyashita. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}</p>
      </footer>
    </div>
  );
}