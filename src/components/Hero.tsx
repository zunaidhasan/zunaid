
import { useState, useEffect } from 'react';
import { Code, Github, Linkedin, Monitor } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "AI  & Machine Learning developer passionate about creating intelligent solutions to real-world problems.";
  
  useEffect(() => {
    let index = 0;
    let interval = setInterval(() => {
      if (index < fullText.length) {
        setText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, 50); // Adjust typing speed here (ms)
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-blue/30 rounded-full filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-tech-purple/20 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-3 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-tech-blue/10 to-tech-purple/10 backdrop-blur-sm border border-tech-blue/20">
            <span className="text-sm font-medium text-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
              Final-Year Computer Science Student
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">Zunaid Hasan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-tech-light-gray mb-8 max-w-2xl leading-relaxed relative">
            {text}
            <span className={`inline-block w-0.5 h-6 bg-tech-blue ml-1 animate-pulse ${isTypingComplete ? 'opacity-0' : 'opacity-100'}`} style={{ transition: 'opacity 0.5s' }}></span>
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="button-primary flex items-center gap-2">
              <Monitor size={18} />
              <span>Get in Touch</span>
            </a>
            
            <a href="#projects" className="button-secondary flex items-center gap-2">
              <Code size={18} />
              <span>View Projects</span>
            </a>
          </div>
          
          <div className="mt-12 flex gap-5">
            <a 
              href="https://github.com/zunaidhasan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tech-gray hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/zunaid712/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tech-gray hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            
            <a 
              href="https://medium.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tech-gray hover:text-white transition-colors duration-300"
              aria-label="Medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32H21v.319l-1.515 1.451a.45.45 0 0 0-.168.425v10.666a.448.448 0 0 0 .168.425l1.479 1.451v.319h-7.436v-.319l1.529-1.487c.152-.15.152-.195.152-.424V8.401L10.95 19.218h-.575L5.417 8.401v7.249c-.043.305.06.612.275.833l1.992 2.42v.316H3v-.316l1.992-2.42a.971.971 0 0 0 .259-.833V7.269z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="md:col-span-2 animate-slide-in-right">
          <div className="relative">
            <div className="absolute inset-0 -left-4 -top-4 bg-gradient-to-br from-tech-blue to-tech-purple opacity-50 blur-xl rounded-full"></div>
            <div className="glass-panel relative p-1 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/20 to-tech-purple/20 opacity-80"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-tech-dark/80 to-tech-darker">
                <Avatar className="w-full h-full rounded-xl">
                  <AvatarImage 
                    src="/uploads/78b7c333-e74d-4a3a-bc7c-e4681b2c2d88.gif" 
                    alt="Zunaid Hasan" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-white text-opacity-10 text-7xl font-bold">
                    ZH
                  </AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-tech-darker via-transparent to-transparent opacity-30 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-tech-gray hover:text-white transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
