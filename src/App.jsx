import React from 'react';
import coloshop from './assets/coloshop.png'
import game from './assets/Game.png'
import cource from './assets/cource.png'


const ProjectCard = ({ title, description, tags, techStack, links, image }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="aspect-video w-full mb-4 overflow-hidden rounded-xl">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {/* Primary Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.primary.map((tag, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Feature Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.features.map((feature, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-gray-900 text-white rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a 
          href={links.source} 
          className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
        >
          <i className="fas fa-code" size={18}></i>
          <span>Source Code</span>
        </a>
        <a 
          href={links.demo} 
          className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
        >
          <i className="fas fa-external-link-alt" size={18}></i>
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );
};

const App = () => {
  // Function to handle resume download
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/resume.pdf";
    link.download = "frontend-developer-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Project data
  const projects = [
    {
      title: "Game-Tournaments",
      description: "I'm building an online BGMI tournament platform where players can register, join matches, and compete for prizes.",
      image: game,
      tags: {
        primary: ["Frontend"],
        features: ["Responsive design", "dynamic product listing", "secure transactions"]
      },
      techStack: ["React", "CSS"],
      links: {
        source: "https://github.com/nehapansare/icp-8.0-react-group-project-4",
        demo: " https://rtc-es.vercel.app"
      }
    },
    {
      title: "ColoShop",
      description: "A Coloshop, is an innovative e-commerce platform that combines online shopping with designer collaboration..",
      image: coloshop,
      tags: {
        primary: ["Frontend", "Backend"],
        features: ["JWT-based", "Designer profiles", "Payment Gateway", "Session RESTful APIs",]
      },
      techStack: ["React", "Tailwind", "React", "Express", "MongoDB","Node"],
      links: {
        source: "https://github.com/nehapansare/ColoShop",
        demo: "https://colo-shop-steel.vercel.app/"
      }
    },
    {
      title: "Teaching Platform",
      description: "A code learning platform with integrated editor and real-time compilation capabilities.",
      image: cource,
      tags: {
        primary: ["Frontend"],
        features: ["Smooth animations", "user-friendly navigation", "responsive design"]
      },
      techStack: ["HTML", "CSS", "JavaScript"],
      links: {
        source: "https://github.com/nehapansare/icp-8.0-html-css-javascript-group-project-3-",
        demo: "https://codee-x.netlify.app"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white px-6 py-6 sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-xl font-bold text-orange-500">Neha</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-orange-500">Home</a>
            <a href="#about" className="hover:text-orange-500">About</a>
            <a href="#projects" className="hover:text-orange-500">Projects</a>
          
          </div>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition-colors">
         <a href='#contact'>Contact Me </a>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16" id="home">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8 py-18">
            <h1 className="text-5xl font-bold">
              Hi<br />
              I'm <span className="text-orange-500">Neha</span><br />
              a FullStack Developer
            </h1>
            <p className="text-gray-600 max-w-lg">
            I develop dynamic, responsive web applications using modern technologies such as HTML, CSS, JavaScript, React, Tailwind, GitHub, MongoDB, Node, and Express.
            </p>
            <div className="space-y-6">
              <div className="space-x-4 flex items-center gap-4"  >
              <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                Hire Me
              </button>
             <button 
                 onClick={handleDownloadResume}
                 className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors flex items-center gap-2">
                <i className="fas fa-download"></i> {/* FontAwesome icon */}
                Download Resume
              </button>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-6">
                <a href="https://github.com/nehapansare" className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors">
                  <i className="fab fa-github"></i> {/* FontAwesome GitHub icon */}
                  <span>GitHub</span>
                </a>
                <a href="nehapansare007@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors">
                  <i className="fas fa-envelope"></i> {/* FontAwesome Email icon */}
                  <span>Email</span>
                </a>
                <a href="linkedin.com/in/neha-pansare-b8a1a8228" className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors">
                <i className="fa-brands fa-linkedin"></i> {/* FontAwesome Briefcase icon */}
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="w-100 h-100 rounded-full overflow-hidden">
              <img
                src=""
                alt="Profile"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </main>

      <section className="py-24 px-4 bg-gray-900" id="about">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          I'm Neha, a passionate FullStack Developer with experience in building responsive and user-friendly web applications. I specialize in React, HTML, CSS, and JavaScript,Tailwind, GitHub, MongoDB, Node, and Express ensuring smooth and interactive UI experiences. Always eager to learn and implement new technologies!
        </p>
      </div>
    </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-gray-50" id="projects" >
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center ">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-800 min-h-screen text-white" id="contact">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Feel free to reach out to me for any collaboration or project inquiries.
        </p>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 rounded bg-gray-700 border border-gray-600" />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 rounded bg-gray-700 border border-gray-600" />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 rounded bg-gray-700 border border-gray-600 h-32"></textarea>
          <button type="submit" className="bg-orange-500 px-6 py-3 rounded-md text-white hover:bg-orange-600 transition-colors">Send Message</button>
        </form>
      </div>
    </section>

    <footer className="bg-black text-gray-400 py-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="mb-4 md:mb-0">
          <span className="flex items-center gap-2">
            <i className="fas fa-phone"></i> Call Me Now: <a href="tel:+919511780462" className="text-white">+91 9511780462</a>
          </span>
        </div>
        <div className="mb-4 md:mb-0">
          <span className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt"></i> Location: Pune, India
          </span>
        </div>
        <div>
          <span className="flex items-center gap-2">
            <i className="fas fa-envelope"></i> Email: <a href="mailto:nehapansare007@gmail.com" className="text-white">nehapansare007@gmail.com</a>
          </span>
        </div>
      </div>
      <p className="text-sm mt-4">© 2025 Neha. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default App;
