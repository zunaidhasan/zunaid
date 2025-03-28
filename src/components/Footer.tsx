
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-6 border-t border-tech-gray/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            Zunaid Hasan
          </span>
          <p className="text-tech-gray mt-2">AI & Machine Learning Developer</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <nav className="flex gap-6">
            <a href="#home" className="text-tech-gray hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-tech-gray hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-tech-gray hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-tech-gray hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-tech-gray hover:text-white transition-colors">Contact</a>
          </nav>
          
          <div className="h-5 w-px bg-tech-gray/20 hidden md:block"></div>
          
          <div className="flex gap-5">
            <a 
              href="https://github.com/zunaidhasan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tech-gray hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/zunaid712/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tech-gray hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            
            <a 
              href="https://medium.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tech-gray hover:text-white transition-colors"
              aria-label="Medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32H21v.319l-1.515 1.451a.45.45 0 0 0-.168.425v10.666a.448.448 0 0 0 .168.425l1.479 1.451v.319h-7.436v-.319l1.529-1.487c.152-.15.152-.195.152-.424V8.401L10.95 19.218h-.575L5.417 8.401v7.249c-.043.305.06.612.275.833l1.992 2.42v.316H3v-.316l1.992-2.42a.971.971 0 0 0 .259-.833V7.269z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-tech-gray/10 text-center text-tech-gray text-sm">
        <p>© {currentYear} Zunaid Hasan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
