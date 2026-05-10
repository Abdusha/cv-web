"use client";
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Code2, Users, Briefcase, GraduationCap, Code, Server, Gamepad2, Smartphone, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText('shaleh2105@gmail.com');
    alert('Email copied to clipboard: shaleh2105@gmail.com');
    window.location.href = 'mailto:shaleh2105@gmail.com';
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 font-sans selection:bg-blue-500/30">
      {mounted && (
        <button
          onClick={toggleDarkMode}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 shadow-lg hover:scale-110 transition-transform duration-200 border border-neutral-200 dark:border-neutral-700"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      )}

      {/* Header / Hero Section */}
      <header className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent dark:from-blue-900/20"></div>
        <div className="max-w-5xl mx-auto px-6 py-24 relative z-10 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400">
              Abdurrahman Shaleh
            </h1>
            <p className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium mb-4 flex items-center gap-3">
              <Briefcase className="w-8 h-8" />
              QA Specialist
            </p>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              Detail-oriented Quality Assurance Professional with over 6 years of experience in the computer games and software industry. Proven expertise in manual testing, backend service validation, and core platform.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-8 items-center md:justify-start justify-center">
              <a href="mailto:shaleh2105@gmail.com" onClick={handleContactClick} className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium rounded-full hover:scale-105 transition-transform duration-200 shadow-lg shadow-neutral-900/20 dark:shadow-white/10">
                Contact Me
              </a>
              <div className="flex gap-4 items-center ml-4">
                <a href="https://linkedin.com/in/abdusha" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors" aria-label="LinkedIn">
                  <Users className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-48 h-48 md:w-72 md:h-72 shrink-0 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            {/* Profile Photo */}
            <Image
              src="/profile.jpg"
              alt="Abdurrahman Shaleh"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-32">

        {/* Skills Section */}
        <section id="skills" className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400">
              <Code className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Expertise & Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Testing", icon: <Globe className="w-5 h-5" />, desc: "Manual Testing, Game Testing, Backend Testing, Integration Testing, Regression Testing, Sanity Testing, Smoke Testing." },
              { title: "Tools", icon: <Code className="w-5 h-5" />, desc: "Jira, Test Case Management Tools (Spreadsheet, Qase, Qmetry), Postman." },
              { title: "Domain Knowledge", icon: <Server className="w-5 h-5" />, desc: "Access Management, Monetization Systems, Utilities Modules." },
              { title: "Platforms", icon: <Gamepad2 className="w-5 h-5" />, desc: "Web (Desktop/Mobile), Console (PlayStation, Xbox)." },
            ].map((skill, index) => (
              <div key={index} className="group p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
                <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center mb-6 text-neutral-600 dark:text-neutral-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-400">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Professional Experience</h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 dark:before:via-neutral-800 before:to-transparent">
            {[
              {
                role: "Quality Assurance Specialist",
                company: "AccelByte Inc.",
                period: "Nov 2021 – Present",
                desc: "Dedicated manual QA for Access, Monetization, and Utilities modules. Validated backend service delivery for major titles, including integration testing for consoles. Managed full testing lifecycle."
              },
              {
                role: "Quality Assurance Lead",
                company: "Agate International",
                period: "May 2021 – Nov 2021",
                desc: "Managed task allocation for the QA crew. Spearheaded recruitment process, created technical tests. Reviewed all QA documentation to ensure technical accuracy."
              },
              {
                role: "Software QA Tester",
                company: "Agate International",
                period: "Dec 2019 – May 2021",
                desc: "Specialized in compatibility testing for HTML5 games. Executed end-to-end testing for products like Agate Login and Admin Panels. Maintained robust test documentation."
              },
              {
                role: "Software Tester (Part-Time)",
                company: "Langgan.id",
                period: "Jun 2020 – Jul 2020",
                desc: "Performed end-to-end manual testing for specialized software projects, focusing on rapid bug identification and providing proactive UX feedback."
              },
              {
                role: "Game Tester (Internship)",
                company: "Agate International",
                period: "Sep 2019 – Dec 2019",
                desc: "Executed comprehensive test cases for mobile titles like Esports King. Verified functionality across multiple mobile and web platforms."
              }
            ].map((job, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-neutral-950 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-xl">{job.role}</h3>
                    <span className="text-sm font-medium px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full whitespace-nowrap">{job.period}</span>
                  </div>
                  <h4 className="text-purple-600 dark:text-purple-400 font-medium mb-4">{job.company}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{job.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-2xl text-green-600 dark:text-green-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
              <h3 className="font-bold text-xl">Bachelor of Informatics</h3>
              <span className="text-sm font-medium px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full whitespace-nowrap">2015 - 2019</span>
            </div>
            <h4 className="text-green-600 dark:text-green-400 font-medium">Telkom University</h4>
          </div>
        </section>

      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10 mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center text-neutral-500 dark:text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Abdurrahman Shaleh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
