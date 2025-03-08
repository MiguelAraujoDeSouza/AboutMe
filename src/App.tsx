import React, { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, Terminal, Code2, Database, Cloud, PenTool as Tool } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const skills = {
    backend: ['Python', 'Java', 'JavaScript', 'Go'],
    frontend: ['HTML5', 'CSS3'],
    frameworks: ['Spring Boot', 'Node.js', 'Pandas'],
    database: ['PostgreSQL', 'MySQL', 'MongoDB'],
    devops: ['AWS', 'Docker', 'Git', 'Linux', 'Kubernetes'],
    tools: ['Postman', 'Figma']
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-900 to-red-800 p-8 shadow-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi 👋, I'm Miguel Araújo De Souza</h1>
          <h3 className="text-xl md:text-2xl text-red-200">Just a chill guy 😴</h3>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-black/50 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-center space-x-6">
            {['about', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeSection === section
                    ? 'bg-red-800 text-white'
                    : 'text-red-300 hover:text-white hover:bg-red-900/50'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* About Section */}
        <section className={`space-y-6 ${activeSection !== 'about' && 'hidden'}`}>
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-lg">
                <span className="text-red-500">😎</span> Back-End Developer | Data Analysis Student
              </p>
              <p className="flex items-center gap-2">
                <span className="text-red-500">🔭</span> Working at <span className="font-semibold text-red-400">PicPay Bank</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-red-500">💬</span> Ask me about <span className="font-semibold text-red-400">Gym 🦾</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-red-500">⚡</span> Fun fact: I spend all my salary on my PC
              </p>
              <p className="flex items-center gap-2">
                <span className="text-red-500">🌱</span> Currently learning: AI, PowerBI, Machine Learning, NoSQL, Data Science, RPA
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`space-y-8 ${activeSection !== 'skills' && 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard title="Back-end" icon={<Terminal />} skills={skills.backend} />
            <SkillCard title="Front-end" icon={<Code2 />} skills={skills.frontend} />
            <SkillCard title="Frameworks" icon={<Terminal />} skills={skills.frameworks} />
            <SkillCard title="Database" icon={<Database />} skills={skills.database} />
            <SkillCard title="DevOps" icon={<Cloud />} skills={skills.devops} />
            <SkillCard title="Tools" icon={<Tool />} skills={skills.tools} />
          </div>
        </section>

        {/* Contact Section */}
        <section className={`${activeSection !== 'contact' && 'hidden'}`}>
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 text-red-400">Connect with me</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <SocialLink
                href="https://instagram.com/gueguelas"
                icon={<Instagram className="w-6 h-6" />}
                label="Instagram"
              />
              <SocialLink
                href="https://linkedin.com/in/miguel-araujo-41761b32b/"
                icon={<Linkedin className="w-6 h-6" />}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:miguel0araujo0souza@gmail.com"
                icon={<Mail className="w-6 h-6" />}
                label="Email"
              />
              <SocialLink
                href="https://github.com/miguelaraujodesouza"
                icon={<Github className="w-6 h-6" />}
                label="GitHub"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-900/30 mt-12 py-6 text-center">
        <p className="text-red-200">&copy; 2025 Miguel Araújo</p>
      </footer>
    </div>
  );
}

function SkillCard({ title, icon, skills }: { title: string; icon: React.ReactNode; skills: string[] }) {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm transform transition-transform hover:scale-105">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-red-500">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-red-900/30 rounded-full text-sm font-medium text-red-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-red-900/30 rounded-lg hover:bg-red-800/50 transition-colors"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export default App;