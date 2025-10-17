import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

// --- ICONS (SVG wale) ---
const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);
const LinkedinIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const MailIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" {...props}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);
const ExternalLinkIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
);
const DownloadIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
);
const MenuIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" {...props}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);
const XIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" {...props}><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg>
);

// --- DATA (Saari jaankari yahan hai) ---
const portfolioData = {
    firstName: "Yash",
    lastName: "Malviya",
    title: "Aspiring Full Stack Developer | DSA Enthusiast",
    headline: "Crafting Web Experiences with Code",
    about: "I am a passionate Full-Stack Web Developer specializing in React.js, Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript. I build scalable, efficient, and user-friendly web applications that solve real-world problems and showcase clean, maintainable code.Alongside development, I actively enhance my problem-solving skills through Data Structures & Algorithms (DSA) and competitive programming challenges, allowing me to approach complex problems with a structured, analytical mindset.I enjoy exploring emerging technologies and integrating them into impactful projects. My goal is to contribute to meaningful software solutions while continuously growing as a versatile and innovative developer.",
    contact: {
        email: "yashmalviya1915@gmail.com",
        phone: "+91 9305045837",
        linkedin: "https://www.linkedin.com/in/yash-malviya-1688a924b/",
        github: "https://github.com/yash1915",
        resumeUrl: "https://drive.google.com/drive/u/0/folders/1TjzJtzR1M2YdLOOnQS2_wxDXxzSnHYYk",
        profiles: [
            { name: "LeetCode", url: "https://leetcode.com/u/YASH_MALVIYA/", icon: "icons8-leetcode-50.png" },
            { name: "CodeChef", url: "https://www.codechef.com/users/yash_malviya", icon: "icons8-codechef-50.png" },
            { name: "Codolio", url: "https://codolio.com/profile/yash_malviya", icon: "ExternalLinkIcon" },
            { name: "Chess.com", url: "https://www.chess.com/member/the_yash_malviya108108108", icon: "icons8-chess-50.png" }
        ]
    },
    skills: {
        technical: ["C", "C++", "HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MongoDB"],
        curriculum: ["Data Structures & Algorithms (DSA)", "Object Oriented Programming (OOP)"],
        interests: ["Software Development", "Competitive Programming", "IoT"],
        tools: ["GitHub", "VS Code", "Postman", "MS Word"],
    },
    projects: [
        {
            title: "Full Stack Blog Application",
            description: "Engineered a full-stack blog application with 20+ RESTful API endpoints for complete post management, including nested comments, likes, and large-scale media uploads via Cloudinary. I built a secure, token-based authentication system using JWT. The system also features OTP-based email verification and a secure password reset flow to prevent unauthorized access. The application is deployed on Render and Vercel for high availability and seamless performance.",
            tech: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JS", "JWT", "Cloudinary","OTP Verification"],
            link: "https://blog-frontend-new-plum.vercel.app/",
            github: [
                { type: 'Frontend', url: 'https://github.com/yash1915/BlogFrontend_NEW' },
                { type: 'Backend', url: 'https://github.com/yash1915/BlogBackend_NEW' }
            ]
        },
        {
                title: "WSN - Based Smart Industrial Safety and Hazard Detection System",
                type:'College Team Project',
                description:"In a Team of four, we create a scalable and cost-effective system for real-time hazard detection in industrial environments. Integrated ESP32 with MQ-2, DHT22, PIR, and Flame sensors. Built a full-stack web dashboard (Node.js, Express, MongoDB) and programmed the microcontroller in C++. Live monitoring, historical data graphs, and automated email & buzzer alerts.",
                tech: ["ESP32", "MQ-2 Sensor", "DHT22 Sensor", "PIR Sensor", "Flame Sensor","HTML","CSS","JS","Node.js", "Express.js", "MongoDB", "C++","WebSockets","Team Collaboration"],
                link: "#", // Hardware project ka link nahi hai
                github: [
                { type: 'Frontend', url: 'https://github.com/yash1915/wsnfrontend' },
                { type: 'Backend', url: 'https://github.com/yash1915/wsnbackend' }
            ]
            },

        {
            title: "Password Generator",
            description: "Developed a user-friendly password generator designed to help users create strong and secure passwords. It features a clean, modern interface with a dark theme. Users can easily customize the length of their password using a slider and can choose to include uppercase letters, lowercase letters, numbers, and symbols. The strength of the generated password is also visually indicated to the user. Once a password has been generated, it can be copied to the clipboard with a single click.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://yash1915.github.io/password_generator/",
            github: "https://github.com/yash1915/password_generator"
        },
        
            {
                title: "Image Gallery",
                description: "showcases a collection of images in a grid layout. When a user hovers over an image, it smoothly transitions from grayscale to full color, slightly increasing in size to create an engaging focal point. A caption also fades in from the bottom, providing a title for each image. The overall design is minimalistic and user-friendly, ensuring a pleasant viewing experience. This gallery is perfect for photographers, designers, or anyone looking to display a portfolio of images in a stylish and professional manner.",
                tech: ["HTML", "CSS","CSS Flexbox", "CSS Grid"],
                link: "https://yash1915.github.io/IMAGEGALLARY/", 
                github: "https://github.com/yash1915/IMAGEGALLARY" 
            },
            {
                title: "Parallax Website",
                description: "A parallax website is a visually engaging and interactive web experience that creates an illusion of depth and movement as the user scrolls down the page. This is achieved by making the background content move at a different speed than the foreground content. The effect can be used to tell a story, guide the user's attention, and create a more immersive and memorable browsing experience",
                tech: ["HTML","CSS","CSS Flexbox"],
                link: "https://yash1915.github.io/PARALLAX-PRACTICE/",
                github: "https://github.com/yash1915/PARALLAX-PRACTICE" 
            }
    ],
    experience: [
        {
            role: "Summer Intern",
            company: "Signal and Telecom Training Centre (N.E Railway, Gorakhpur)",
            date: "June 2025 - July 2025",
            description: "Monitored 4+ railway signals and a data logger to ensure real-time safety. Diagnosed and reported a system fault, improving maintenance and reliability."
        }
    ],
    education: [
        {
            degree: "B.Tech in Electronics & Communication",
            institution: "Madan Mohan Malaviya University of Technology, Gorakhpur",
            date: "2022 - 2026",
            grade: "8.02/10.0 CGPA"
        },
        {
            degree: "Class XII (CBSE)",
            institution: "Little Flower House, Varanasi",
            date: "2019 - 2020",
            grade: "79.2%"
        }
    ],
    certificates: [
        {
            title: "Introduction to IoT",
            issuer: "NPTEL, IIT Kharagpur",
            link: "https://drive.google.com/file/d/1I05fEwtGJARPimxfLne-pO7LmDB3RHoM/view?usp=drivesdk"
        },
        {
            title: "Semiconductor Devices",
            issuer: "NPTEL, IISc Bangalore",
            link: "https://drive.google.com/file/d/1OGeQd2pWzutZ2K5PLKAH8bAelmmQlwuT/view?usp=sharing"
        },
        {
            title: "IBM Data Fundamentals",
            issuer: "IBM Skills Build",
            link: "https://www.credly.com/badges/783b3ee8-03cd-4f3a-85f4-39682c051956/public_url"
        }
    ],
    extracurricular: {
        text: "Chess Enthusiast – Active player on Chess.com with ratings - Rapid (850+), Blitz (465+), Bullet (625+), Daily (1005+).",
        link: "https://www.chess.com/member/the_yash_malviya108108108/stats?days=0"
    }
};

const Section = ({ id, title, children }) => (
    <motion.section 
        id={id} 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 text-center">{title}</h2>
            {children}
        </div>
    </motion.section>
);

const SkillBadge = ({ skill }) => (
    <div className="bg-slate-800 text-teal-300 py-2 px-4 rounded-lg text-sm font-medium shadow-md hover:bg-slate-700 transition-all duration-300">
        {skill}
    </div>
);

// --- Main Components ---
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navLinks = [ { href: "#about", label: "About" }, { href: "#skills", label: "Skills" }, { href: "#projects", label: "Projects" }, { href: "#experience", label: "Experience" }, { href: "#extracurricular", label: "Extracurricular" }, { href: "#contact", label: "Contact" }];

    useEffect(() => {
        const handleScroll = () => { setScrolled(window.scrollY > 20); };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#" className="text-2xl font-bold text-teal-400">Yash Malviya</a>
                    <nav className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            {navLinks.map(link => ( <a key={link.href} href={link.href} className="text-slate-300 hover:text-teal-400 transition-colors duration-300">{link.label}</a> ))}
                        </div>
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-teal-400">
                            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
                    <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => ( <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-teal-400 hover:bg-slate-800">{link.label}</a> ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

const Hero = ({ data, onImageChange }) => {
    const [profilePic, setProfilePic] = useState('profile-transparent.png'); // Transparent image ka istemal karein
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => { setProfilePic(event.target.result); onImageChange(event.target.result); };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center bg-slate-900 text-white pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column: Text Content */}
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 leading-tight">
                            <span>Hi, I'm</span>
                            <div className="relative h-[48px] sm:h-[60px] lg:h-[72px]">
                                <span className="opacity-0" aria-hidden="true">Yash Malviya</span>
                                <span className="absolute left-0 top-0 w-full text-center md:text-left">
                                    <TypeAnimation
                                        sequence={[
                                            'Yash Malviya',
                                            5000,
                                            '',
                                            500
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        className="text-teal-400"
                                        repeat={Infinity}
                                    />
                                </span>
                            </div>
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl text-slate-300">{data.title}</p>
                        <p className="mt-2 text-md sm:text-lg text-slate-400 max-w-xl mx-auto md:mx-0">{data.headline}</p>
                        <div className="mt-8 flex justify-center md:justify-start gap-4">
                            <a href={data.contact.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-teal-500/50"> <DownloadIcon /> Resume </a>
                            <a href="#contact" className="bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold py-3 px-6 rounded-lg transition-all duration-300"> Contact Me </a>
                        </div>
                    </div>

                    {/* Right Column: Profile Picture */}
                    <div className="flex justify-center items-center">
                        <div className="relative group">
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-slate-800">
                                <img 
                                    src={profilePic} 
                                    alt="Yash Malviya" 
                                    className="w-full h-full object-cover" 
                                    style={{ 
                                        objectPosition: '50% 10%'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const About = ({ content }) => (
    <Section id="about" title="About Me">
        <p className="text-slate-400 text-lg text-center max-w-3xl mx-auto leading-relaxed"> {content} </p>
    </Section>
);

const Skills = ({ skills }) => (
    <Section id="skills" title="My Skills">
        <div className="space-y-12"> {/* Thoda vertical space badhaya hai */}
            {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="text-center"> {/* Har section ko center align kiya hai */}
                    <h3 className="text-xl font-semibold text-teal-400 mb-4 capitalize">{category}</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {skillList.map(skill => <SkillBadge key={skill} skill={skill} />)}
                    </div>
                </div>
            ))}
        </div>
    </Section>
);
const Projects = ({ projects }) => (
    <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            {projects.map(project => (
                <div key={project.title} className="bg-slate-800/50 p-6 rounded-xl shadow-lg hover:shadow-teal-500/20 border border-slate-700 hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
                whileHover={{ y: -8, scale: 1.03 }}>
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-slate-100 flex items-center flex-wrap">{project.title}{project.type&&(<span className="bg-sky-900 text-sky-300 text-xs font-semibold ml-3 px-2.5 py-1 rounded-full">{project.type}</span>
                        )}
                    </h3>
                        <div className="flex items-center gap-4">
                            {project.link && project.link !== '#' && <a href={project.link} target="_blank" rel="noopener noreferrer" title="View Live" className="text-slate-400 hover:text-teal-400"><ExternalLinkIcon /></a>}
                            {project.github && typeof project.github === 'string' && project.github !== '#' && ( <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Source" className="text-slate-400 hover:text-teal-400"><GithubIcon /></a> )}
                        </div>
                    </div>
                    <p className="text-slate-400 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
                    <div className="flex justify-between items-end">
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => <span key={t} className="bg-slate-700 text-teal-300 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>)}
                        </div>
                        {project.github && Array.isArray(project.github) && (
                            <div className="flex items-center gap-2">
                                {project.github.map(repo => (
                                    <a key={repo.type} href={repo.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 font-semibold py-1 px-2 rounded-md transition-colors"> <GithubIcon className="h-4 w-4" /> {repo.type} </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const Experience = ({ experiences }) => (
    <Section id="experience" title="Experience">
        <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-slate-700">
                {experiences.map((exp, index) => (
                    <div key={index} className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-500 rounded-full -left-3 ring-8 ring-slate-900">
                             <svg className="w-2.5 h-2.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-100">{exp.role} <span className="text-teal-400 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3 bg-teal-900">{exp.company}</span></h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-slate-500">{exp.date}</time>
                        <p className="text-base font-normal text-slate-400">{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const Education = ({ education }) => (
     <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl shadow-lg border border-slate-700">
                    <h3 className="text-lg font-bold text-teal-400">{edu.degree}</h3>
                    <p className="text-slate-300 mt-1">{edu.institution}</p>
                    <p className="text-slate-500 text-sm mt-2">{edu.date}</p>
                    <p className="text-slate-400 text-sm mt-1">{edu.grade}</p>
                </div>
            ))}
        </div>
    </Section>
);

const Certificates = ({ certificates }) => (
    <Section id="certificates" title="Certificates">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map(cert => (
                <a key={cert.title} href={cert.link} target="_blank" rel="noopener noreferrer" className={`bg-slate-800/50 p-6 rounded-xl shadow-lg border border-slate-700 group transition-all duration-300 flex flex-col justify-between hover:border-teal-500/50 hover:-translate-y-1`}>
                    <div>
                        <h3 className={`text-lg font-bold text-slate-100`}>{cert.title}</h3>
                        <p className={`text-slate-400 text-sm mt-1`}>{cert.issuer}</p>
                    </div>
                    <div className="mt-4 text-teal-400 text-sm font-semibold flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"> View Certificate <ExternalLinkIcon className="ml-2"/> </div>
                </a>
            ))}
        </div>
    </Section>
);

const Extracurricular = ({ data }) => (
    <Section id="extracurricular" title="Extracurricular Activities">
        <div className="text-center max-w-2xl mx-auto">
            <p className="bg-slate-800/50 p-6 rounded-xl shadow-lg border border-slate-700 group transition-all duration-300 flex flex-col justify-between hover:border-teal-500/50 hover:-translate-y-1">
                {data.text}
            </p>
            <a 
                href={data.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-teal-500/20"
            >
                <img src="/icons8-chess-50.png" alt="Chess Icon" className="h-6 w-6 mr-3" />
                View Stats
            </a>
        </div>
    </Section>
);


const Contact = ({ contact }) => (
    <Section id="contact" title="Get In Touch">
        <div className="text-center max-w-2xl mx-auto">
            <p className="text-slate-400 mb-8"> I'm currently open to new opportunities and collaborations. Feel free to reach out to me. </p>
            <a href={`mailto:${contact.email}`} className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-teal-500/50 text-lg"> Say Hello </a>
        </div>
    </Section>
);

const Footer = ({ contact }) => {
    return (
        <footer className="bg-slate-900/50 border-t border-slate-800 text-slate-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center flex-wrap items-center gap-8 mb-8">
                    {/* Standard SVG Icons */}
                    <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300" title="GitHub"><GithubIcon /></a>
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300" title="LinkedIn"><LinkedinIcon /></a>
                    <a href={`mailto:${contact.email}`} className="hover:text-teal-400 transition-colors duration-300" title="Email"><MailIcon /></a>
                    
                    {/* Image Icons */}
                    <a href={portfolioData.contact.profiles.find(p => p.name === 'LeetCode').url} target="_blank" rel="noopener noreferrer" title="LeetCode">
                        <img src="/icons8-leetcode-50.png" alt="LeetCode" className="h-6 w-6 transition-transform duration-300 hover:scale-110"/>
                    </a>
                    <a href={portfolioData.contact.profiles.find(p => p.name === 'CodeChef').url} target="_blank" rel="noopener noreferrer" title="CodeChef">
                        <img src="/icons8-codechef-50.png" alt="CodeChef" className="h-6 w-6 transition-transform duration-300 hover:scale-110" />
                    </a>
                    {/* Codolio Icon */}
                    <a href={portfolioData.contact.profiles.find(p => p.name === 'Codolio').url} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300" title="Codolio">
                        <ExternalLinkIcon className="h-6 w-6" />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Yash Malviya. All Rights Reserved.</p>
            </div>
        </footer>
    );
};


// --- Main App Component ---
export default function App() {
    const [profilePicture, setProfilePicture] = useState('profile.jpeg');
    const handleImageUpdate = (newImage) => { setProfilePicture(newImage); };

    return (
        <div className="bg-slate-900 text-slate-300 font-sans leading-normal tracking-tight">
            <Header />
            <main>
                <Hero data={{...portfolioData, profileImg: profilePicture}} onImageChange={handleImageUpdate} />
                <About content={portfolioData.about} />
                <Skills skills={portfolioData.skills} />
                <Projects projects={portfolioData.projects} />
                <Experience experiences={portfolioData.experience} />
                <Education education={portfolioData.education} />
                <Certificates certificates={portfolioData.certificates} />
                <Extracurricular data={portfolioData.extracurricular} />
                <Contact contact={portfolioData.contact} />
            </main>
            <Footer contact={portfolioData.contact} />
        </div>
    )
}
