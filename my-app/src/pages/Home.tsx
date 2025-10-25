import React, { useRef, useState } from 'react';
import { RetroGrid } from '../components/RetroGrid';
import CardNav from '../components/CardNav';
import Shuffle from '../components/Shuffle';
import SpotlightCard from '../components/SpotlightCard';

import { ArrowRight, Zap, Code2, Database, Layout, Server,ExternalLink, Github } from 'lucide-react';
import { 
  SiCplusplus, 
  SiC, 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiSocketdotio
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

export default function Home() {
  // CardNav configuration with gradient text
  const navItems = [
    {
      label: 'Projects',
      bgColor: '#1a1a1a',
      textColor: 'transparent',
      links: [
        { label: 'Web Development', href: '#webdev', ariaLabel: 'View web development projects' },
        { label: 'UI/UX Design', href: '#design', ariaLabel: 'View design projects' },
        { label: 'Mobile Apps', href: '#mobile', ariaLabel: 'View mobile projects' }
      ]
    },
    {
      label: 'Resources',
      bgColor: '#1a1a1a',
      textColor: 'transparent',
      links: [
        { label: 'Blog Posts', href: '#blog', ariaLabel: 'Read blog posts' },
        { label: 'Tutorials', href: '#tutorials', ariaLabel: 'Watch tutorials' },
        { label: 'Resources', href: '#resources', ariaLabel: 'View resources' }
      ]
    },
    {
      label: 'Contacts',
      bgColor: '#1a1a1a',
      textColor: 'transparent',
      links: [
        { label: 'Email', href: '#email', ariaLabel: 'Send email' },
        { label: 'LinkedIn', href: '#linkedin', ariaLabel: 'View LinkedIn' },
        { label: 'GitHub', href: '#github', ariaLabel: 'View GitHub' }
      ]
    }
  ];

  return (
<div className="min-h-screen bg-black">
      {/* CardNav Navigation with Glossy Effect */}
      <CardNav
        logo=""
        logoAlt="Company Logo"
        items={navItems}
        ease="power3.out"
        baseColor="#000000"
        menuColor="#FFFFFF"
        buttonBgColor="linear-gradient(to right, #c084fc, #f9a8d4, #93c5fd)"
        buttonTextColor="#ffffff"
      />

      {/* Hero Section with RetroGrid */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* RetroGrid as the background */}
        <RetroGrid
          angle={65}
          cellSize={60}
          opacity={0.5}
          lightLineColor="#9b1ccaff"
          darkLineColor="#c30f81ff"
          className="absolute inset-0"
        />
        
        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Main Heading with Shuffle Effect */}
            <div className="mb-6">
  <Shuffle
    text="Prateek Nigam"
    tag="h1"
    className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl px-4"
    style={{
      background: 'linear-gradient(to right, #c084fc, #f9a8d4, #93c5fd)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontFamily: "'Press Start 2P', cursive",
      imageRendering: 'pixelated',
      lineHeight: '1.3',
      wordBreak: 'break-word',
    }}
    shuffleDirection="right"
    duration={0.5}
    shuffleTimes={3}
    animationMode="evenodd"
    stagger={0.05}
    ease="power3.out"
    threshold={0.1}
    triggerOnce={true}
    triggerOnHover={true}
    scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
  />
</div>

            {/* Subheading */}
           <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 sm:text-xl">
              Experience immersive visual storytelling with cutting-edge animations
              and interactive elements that bring your ideas to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <SpotlightButton
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
                spotlightColor="rgba(255, 255, 255, 0.3)"
              >
                Contact Me
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </SpotlightButton>
              
              <SpotlightButton
             className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-black/50 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-black/70"
                spotlightColor="rgba(192, 132, 252, 0.2)"
              >
                <Zap className="h-5 w-5" />
                About Me
              </SpotlightButton>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
     <Shuffle
  text="About Me"
  tag="h2"
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4"
  style={{
    background: 'linear-gradient(to right, #c084fc, #f9a8d4, #93c5fd)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontFamily: "'Press Start 2P', cursive",
    imageRendering: 'pixelated',
    lineHeight: '1.4',
    wordBreak: 'break-word',
  }}
  shuffleDirection="right"
  duration={0.5}
  shuffleTimes={3}
  animationMode="evenodd"
  stagger={0.05}
  ease="power3.out"
  threshold={0.1}
  triggerOnce={true}
  triggerOnHover={true}
  scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
/>

            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Terminal Component - Centered */}
          <div className="max-w-4xl mx-auto">
            <SpotlightTerminal>
              <TerminalDemo />
            </SpotlightTerminal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
     <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
  {/* Section Heading - Outside the box */}
  <div className="text-center mb-16">
    <Shuffle
      text="Skills"
      tag="h2"
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4"
      style={{
        background: 'linear-gradient(to right, #c084fc, #f9a8d4, #93c5fd)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontFamily: "'Press Start 2P', cursive",
        imageRendering: 'pixelated',
        lineHeight: '1.4',
        wordBreak: 'break-word',
      }}
      shuffleDirection="right"
      duration={0.5}
      shuffleTimes={3}
      animationMode="evenodd"
      stagger={0.05}
      ease="power3.out"
      threshold={0.1}
      triggerOnce={true}
      triggerOnHover={true}
      scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
    />
    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
  </div>

  {/* Skills Container with background box */}
  <div className="max-w-[95%] mx-auto bg-black backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 border border-gray-800/30 shadow-2xl">
    {/* Skills Grid */}
    <div className="space-y-8">
      {/* Programming Languages */}
      <SkillCategory
        icon={<Code2 className="w-6 h-6" />}
        title="Programming Languages"
        skills={['C++', 'C', 'Python', 'JavaScript', 'TypeScript', 'Java']}
      />
      {/* Databases */}
      <SkillCategory
        icon={<Database className="w-6 h-6" />}
        title="Databases"
        skills={['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Firebase']}
      />
      {/* Frontend */}
      <SkillCategory
        icon={<Layout className="w-6 h-6" />}
        title="Frontend"
        skills={['React', 'Next.js', 'Tailwind CSS', 'GSAP', 'Framer Motion']}
      />
      {/* Backend */}
      <SkillCategory
        icon={<Server className="w-6 h-6" />}
        title="Backend"
        skills={['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Socket.io']}
      />
    </div>
  </div>
</section>
<section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
  {/* Section Heading - Outside the container */}
  <div className="text-center mb-16">
    <Shuffle
      text="Projects"
      tag="h2"
      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4"
      style={{
        background: 'linear-gradient(to right, #c084fc, #f9a8d4, #93c5fd)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontFamily: "'Press Start 2P', cursive",
        imageRendering: 'pixelated',
        lineHeight: '1.4',
        wordBreak: 'break-word',
      }}
      shuffleDirection="right"
      duration={0.5}
      shuffleTimes={3}
      animationMode="evenodd"
      stagger={0.05}
      ease="power3.out"
      threshold={0.1}
      triggerOnce={true}
      triggerOnHover={true}
      scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
    />
    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
  </div>

  {/* Projects Container */}
  <div className="max-w-7xl mx-auto">
    {/* Projects Grid - 4 Equal Cards in 2x2 Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Project 1 */}
      <ProjectCard
        title="E-Commerce Platform"
        description="Full-stack e-commerce solution with real-time inventory management, secure payment integration, and admin dashboard"
        image="https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
        tags={["React", "Node.js", "MongoDB", "Stripe"]}
        github="#"
        live="#"
      />

      {/* Project 2 */}
      <ProjectCard
        title="AI Chat Assistant"
        description="Intelligent chatbot powered by natural language processing and machine learning"
        image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
        tags={["Python", "TensorFlow", "React"]}
        github="#"
        live="#"
      />

      {/* Project 3 */}
      <ProjectCard
        title="Task Management App"
        description="Collaborative project management tool with real-time updates and team collaboration"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
        tags={["Next.js", "Firebase", "Tailwind"]}
        github="#"
        live="#"
      />

      {/* Project 4 */}
      <ProjectCard
        title="Weather Dashboard"
        description="Beautiful weather data visualization with real-time updates, forecasts, and interactive maps"
        image="https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop"
        tags={["React", "API", "D3.js", "GSAP"]}
        github="#"
        live="#"
      />
    </div>
  </div>
</section>
      {/* Contact Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
          <Shuffle
  text="Get In Touch"
  tag="h2"
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4"
  style={{
    background: 'linear-gradient(to right, #c084fc, #f9a8d4, #93c5fd)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontFamily: "'Press Start 2P', cursive",
    imageRendering: 'pixelated',
    lineHeight: '1.4',
    wordBreak: 'break-word',
  }}
  shuffleDirection="right"
  duration={0.5}
  shuffleTimes={3}
  animationMode="evenodd"
  stagger={0.05}
  ease="power3.out"
  threshold={0.1}
  triggerOnce={true}
  triggerOnHover={true}
  scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
/>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Channels */}
            <ContactChannels />

            {/* Send Message Form */}
            <SendMessageForm />
          </div>
        </div>
      </section>
    </div>
  );
}

// SpotlightButton Component - For interactive buttons
function SpotlightButton({ 
  children, 
  className = "", 
  spotlightColor = 'rgba(255, 255, 255, 0.25)',
  onClick
}: { 
  children: React.ReactNode; 
  className?: string; 
  spotlightColor?: string;
  onClick?: () => void;
}) {
  const divRef = useRef<HTMLButtonElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLButtonElement> = e => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <button
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
        }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}

// SkillBadge Component with SpotlightCard effect
function SkillBadge({ skill, icon }: { skill: string; icon: React.ReactNode }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center gap-3 px-6 py-4 text-base font-medium rounded-xl border border-gray-800/50 bg-black backdrop-blur-sm text-white hover:scale-105 hover:border-gray-700 transition-all duration-200 overflow-hidden flex-1 min-w-[160px]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(192, 132, 252, 0.3), transparent 80%)`
        }}
      />
      <div className="relative z-10 flex items-center gap-3">
        {icon}
        <span className="text-base font-semibold">{skill}</span>
      </div>
    </div>
  );
}

// SkillCategory Component - Each category takes full width row with Spotlight effect
function SkillCategory({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  
  // Get official icons for each skill
  const getSkillIcon = (skill: string) => {
    const skillIcons: { [key: string]: React.ReactNode } = {
      // Programming Languages
      'C++': <SiCplusplus className="w-7 h-7 text-[#00599C]" />,
      'C': <SiC className="w-7 h-7 text-[#A8B9CC]" />,
      'Python': <SiPython className="w-7 h-7 text-[#3776AB]" />,
      'JavaScript': <SiJavascript className="w-7 h-7 text-[#F7DF1E]" />,
      'TypeScript': <SiTypescript className="w-7 h-7 text-[#3178C6]" />,
      'Java': <FaJava className="w-7 h-7 text-[#007396]" />,
      
      // Databases
      'MongoDB': <SiMongodb className="w-7 h-7 text-[#47A248]" />,
      'MySQL': <SiMysql className="w-7 h-7 text-[#4479A1]" />,
      'PostgreSQL': <SiPostgresql className="w-7 h-7 text-[#4169E1]" />,
      'Redis': <SiRedis className="w-7 h-7 text-[#DC382D]" />,
      'Firebase': <SiFirebase className="w-7 h-7 text-[#FFCA28]" />,
      
      // Frontend
      'React': <SiReact className="w-7 h-7 text-[#61DAFB]" />,
      'Next.js': <SiNextdotjs className="w-7 h-7 text-white" />,
      'Tailwind CSS': <SiTailwindcss className="w-7 h-7 text-[#06B6D4]" />,
      'GSAP': <SiGreensock className="w-7 h-7 text-[#88CE02]" />,
      'Framer Motion': <SiFramer className="w-7 h-7 text-[#0055FF]" />,
      
      // Backend
      'Node.js': <SiNodedotjs className="w-7 h-7 text-[#339933]" />,
      'Express': <SiExpress className="w-7 h-7 text-white" />,
      'REST APIs': <TbApi className="w-7 h-7 text-[#4CAF50]" />,
      'GraphQL': <SiGraphql className="w-7 h-7 text-[#E10098]" />,
      'Socket.io': <SiSocketdotio className="w-7 h-7 text-white" />
    };
    
    return skillIcons[skill] || (
      <Code2 className="w-7 h-7 text-purple-500" />
    );
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-xl p-8 border border-gray-800 bg-transparent backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(192, 132, 252, 0.25), transparent 80%)`
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-4 justify-evenly">
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} icon={getSkillIcon(skill)} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Terminal Component with Spotlight Effect Wrapper
function SpotlightTerminal({ children }: { children: React.ReactNode }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-lg"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(192, 132, 252, 0.2), transparent 80%)`
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Terminal Component
function Terminal({ children }: { children: React.ReactNode }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-black rounded-lg border border-gray-800 shadow-2xl overflow-hidden"
    >
      {/* Spotlight Effect on Terminal Border */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out rounded-lg"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(192, 132, 252, 0.4), transparent 60%)`,
          boxShadow: opacity > 0 ? `0 0 40px rgba(192, 132, 252, ${opacity * 0.5})` : 'none'
        }}
      />
      
      {/* Terminal Header */}
      <div className="relative z-10 flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-2 text-sm text-gray-400">terminal</span>
      </div>
      
      {/* Terminal Content */}
      <div className="relative z-10 p-6 font-mono text-sm space-y-2">
        {children}
      </div>
    </div>
  );
}

function TypingAnimation({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [displayText, setDisplayText] = React.useState("");
  const text = typeof children === 'string' ? children : '';
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    setDisplayText("");
    setIsComplete(false);
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className={`text-white ${className}`}>
      {displayText}
      {!isComplete && <span className="animate-pulse">▊</span>}
    </div>
  );
}

function AnimatedSpan({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} ${className}`}>
      {children}
    </div>
  );
}

function TerminalDemo() {
  const [showCommand, setShowCommand] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowCommand(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Terminal>
      {showCommand && <TypingAnimation>&gt; cat prateek-nigam.json</TypingAnimation>}
      <AnimatedSpan className="text-gray-400 ml-2" delay={2500}>
        <span className="text-pink-400">{'{'}</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-4" delay={2700}>
        <span className="text-cyan-400">"name"</span>
        <span className="text-white">: </span>
        <span className="text-green-400">"Prateek Nigam"</span>
        <span className="text-white">,</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-4" delay={2900}>
        <span className="text-cyan-400">"role"</span>
        <span className="text-white">: </span>
        <span className="text-green-400">"Full Stack Developer & UI Enthusiast"</span>
        <span className="text-white">,</span>
      </AnimatedSpan>
      
      <AnimatedSpan className="text-gray-400 ml-4" delay={3300}>
        <span className="text-cyan-400">"bio"</span>
        <span className="text-white">: </span>
        <span className="text-green-400">"Passionate coder who turns coffee into elegant code and creative ideas into stunning digital experiences"</span>
        <span className="text-white">,</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-4" delay={3500}>
        <span className="text-cyan-400">"passions"</span>
        <span className="text-white">: [</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-8" delay={3700}>
        <span className="text-green-400">"Writing clean, scalable code"</span>
        <span className="text-white">,</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-8" delay={3900}>
        <span className="text-green-400">"Crafting pixel-perfect interfaces"</span>
        <span className="text-white">,</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-8" delay={4100}>
        <span className="text-green-400">"Exploring cutting-edge web technologies"</span>
        <span className="text-white">,</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-8" delay={4300}>
        <span className="text-green-400">"Building immersive user experiences"</span>
        <span className="text-white">,</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-8" delay={4500}>
        <span className="text-green-400">"Solving complex problems with elegant solutions"</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-4" delay={4700}>
        <span className="text-white">],</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-4" delay={4900}>
        <span className="text-cyan-400">"skills"</span>
        <span className="text-white">: {'{'}</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-8" delay={5100}>
        <span className="text-purple-400">"frontend"</span>
        <span className="text-white">: [</span>
        <span className="text-green-400">"React"</span>
        <span className="text-white">, </span>
        <span className="text-green-400">"Next.js"</span>
        <span className="text-white">, </span>
        <span className="text-green-400">"TypeScript"</span>
        <span className="text-white">, </span>
        <span className="text-green-400">"JavaScript"</span>
        <span className="text-white">],</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-8" delay={5300}>
        <span className="text-purple-400">"styling"</span>
        <span className="text-white">: [</span>
        <span className="text-green-400">"Tailwind CSS"</span>
        <span className="text-white">, </span>
        <span className="text-green-400">"Framer Motion"</span>
        <span className="text-white">, </span>
        <span className="text-green-400">"GSAP"</span>
        <span className="text-white">, </span>
        <span className="text-green-400">"CSS3"</span>
        <span className="text-white">],</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-8" delay={5500}>
        <span className="text-purple-400">"backend"</span>
        <span className="text-white">: [</span>
        <span className="text-green-400">"Node.js"</span>
        <span className="text-white">, </span>
        <span className="text-green-400">"Express"</span>
        <span className="text-white">, </span>
        <span className="text-green-400">"MongoDB"</span>
        <span className="text-white">],</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-8" delay={5700}>
        <span className="text-purple-400">"tools"</span>
        <span className="text-white">: [</span>
        <span className="text-green-400">"Git"</span>
        <span className="text-white">, </span>
        <span className="text-green-400">"VS Code"</span>
        <span className="text-white">, </span>
        <span className="text-green-400">"Figma"</span>
        <span className="text-white">, </span>
        <span className="text-green-400">"Postman"</span>
        <span className="text-white">]</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-4" delay={5900}>
        <span className="text-white">{'}'}</span>
        <span className="text-white">,</span>
      </AnimatedSpan>
      <AnimatedSpan className="text-gray-400 ml-2" delay={6100}>
        <span className="text-pink-400">{'}'}</span>
      </AnimatedSpan>
    </Terminal>
  );
}
function ProjectCard({ title, description, image, tags, github, live }: { 
  title: string; 
  description: string; 
  image: string; 
  tags: string[]; 
  github: string; 
  live: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group h-full rounded-xl border border-gray-800 bg-black overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out z-10"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(192, 132, 252, 0.3), transparent 80%)`
        }}
      />

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
        
        {/* Action Buttons - Show on Hover */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <a
            href={github}
            className="p-2 rounded-lg bg-black/80 backdrop-blur-sm border border-gray-700 text-white hover:bg-purple-500 hover:border-purple-500 transition-all"
            aria-label="View GitHub repository"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={live}
            className="p-2 rounded-lg bg-black/80 backdrop-blur-sm border border-gray-700 text-white hover:bg-pink-500 hover:border-pink-500 transition-all"
            aria-label="View live project"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 z-20">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View More Link */}
        <a
          href={live}
          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-pink-400 transition-colors group/link"
        >
          View Project
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

// Contact Channels Component
function ContactChannels() {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl border border-gray-800 bg-black backdrop-blur-sm p-6 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(192, 132, 252, 0.25), transparent 80%)`
        }}
      />

      <div className="relative z-10">
       <h3 className="text-base sm:text-lg md:text-xl font-bold mb-6" style={{
  fontFamily: "'Press Start 2P', cursive",
  background: 'linear-gradient(to right, #c084fc, #f9a8d4, #93c5fd)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  lineHeight: '1.4',
}}>
  CONTACT CHANNELS
</h3>

        <div className="space-y-3">
          {/* Email */}
          <ContactCard
            icon={<Server className="w-5 h-5 text-purple-400" />}
            title="EMAIL"
            content="your.email@example.com"
            href="mailto:your.email@example.com"
          />

          {/* GitHub */}
          <ContactCard
            icon={<Github className="w-5 h-5 text-purple-400" />}
            title="GITHUB"
            content="github.com/yourusername"
            href="https://github.com/yourusername"
          />

          {/* LinkedIn */}
          <ContactCard
            icon={<Database className="w-5 h-5 text-purple-400" />}
            title="LINKEDIN"
            content="linkedin.com/in/yourname"
            href="https://linkedin.com/in/yourname"
          />
        </div>
      </div>
    </div>
  );
}

// Contact Card Component
function ContactCard({ icon, title, content, href }: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
  href: string;
}) {
  const divRef = useRef<HTMLAnchorElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <a
      ref={divRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative block rounded-xl border border-gray-800 bg-transparent p-3 overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(192, 132, 252, 0.3), transparent 80%)`
        }}
      />

      <div className="relative z-10 flex items-center gap-4">
        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold text-purple-400 mb-1" style={{
            fontFamily: "'Press Start 2P', 'Courier New', monospace",
          }}>
            {title}
          </p>
          <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
            {content}
          </p>
        </div>
        <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
      </div>
    </a>
  );
}

// Send Message Form Component
function SendMessageForm() {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl border border-gray-800 bg-black backdrop-blur-sm p-6 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(192, 132, 252, 0.25), transparent 80%)`
        }}
      />

      <div className="relative z-10">
     
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-xs font-bold text-purple-400 mb-2" style={{
              fontFamily: "'Press Start 2P', 'Courier New', monospace",
            }}>
              ▸ NAME
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-transparent border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none transition-all"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-xs font-bold text-purple-400 mb-2" style={{
              fontFamily: "'Press Start 2P', 'Courier New', monospace",
            }}>
              ▸ EMAIL
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-transparent border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none transition-all"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-xs font-bold text-purple-400 mb-2" style={{
              fontFamily: "'Press Start 2P', 'Courier New', monospace",
            }}>
              ▸ MESSAGE
            </label>
            <textarea
              rows={5}
              placeholder="Describe your quest..."
              className="w-full px-4 py-3 bg-transparent border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <SpotlightButton
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/50"
            spotlightColor="rgba(255, 255, 255, 0.3)"
          >
            <Zap className="h-5 w-5" />
            SEND MESSAGE
          </SpotlightButton>
        </form>
      </div>
    </div>
  );
}