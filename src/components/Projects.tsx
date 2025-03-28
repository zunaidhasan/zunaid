
import { Github, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Language Translation Tool",
      description: "Developed a language translation tool that translates text from one language to another. Utilized Google Translate API / Microsoft Translator API for accurate machine translation. Implemented text preprocessing techniques to improve translation quality.",
      tags: ["Python", "Google Translate API", "NLP", "Machine Translation"],
      image: "/uploads/Language-Translation.png",
      githubUrl: "https://github.com/zunaidhasan/Language_Translation_Tool",
    },
    {
      title: "Chatbot for FAQs",
      description: "Built an AI chatbot to answer frequently asked questions using Natural Language Processing (NLP).Implemented NLP techniques with NLTK and SpaCy for better response generation. Designed an interactive UI for user-friendly chatbot interactions.",
      tags: ["Python", "NLTK", "SpaCy", "AI Chatbot Frameworks"],
      image: "bg-gradient-to-br from-emerald-500/20 to-blue-600/20",
      githubUrl: "https://github.com/zunaidhasan/Chatbot_FAQ",
    },
    {
      title: "Music Generation with AI",
      description: "Developed an AI-powered music generation system using Deep Learning (RNNs, GANs). Trained models to generate melodies and music sequences based on datasets. Experimented with different deep learning architectures for improved output quality.",
      tags: ["Python", "TensorFlow", "PyTorch", "RNNs", "GANs"],
      image: "bg-gradient-to-br from-amber-500/20 to-red-600/20",
      githubUrl: "https://github.com/zunaidhasan/Music-Generation-with-Al",
    },
    {
      title: "Object Detection and Tracking",
      description: "Developed a real-time object detection and tracking system using YOLO (You Only Look Once) and Faster R-CNN. Implemented deep learning models for accurate detection and tracking of objects in video streams. Applied OpenCV for image processing and visualization.",
      tags: ["Python", "TensorFlow", "OpenCV", "YOLO", "Faster R-CNN"],
      image: "bg-gradient-to-br from-pink-500/20 to-purple-600/20",
      githubUrl: "https://github.com/zunaidhasan/Object-Detection-and-Tracking",
    },
    {
      title: "BERT-based Sentiment Analysis",
      description: "Advanced sentiment analysis model using BERT (Bidirectional Encoder Representations from Transformers) for accurate text classification.",
      tags: ["PyTorch", "BERT", "NLP", "Python"],
      image: "bg-gradient-to-br from-cyan-500/20 to-blue-600/20",
      githubUrl: "https://github.com/zunaidhasan/BERT-based-Sentiment-Analysis",
    },
    {
      title: "Weather Application",
      description: "A responsive weather application that provides real-time weather data with a clean, intuitive interface using the OpenWeather API.",
      tags: ["JavaScript", "React", "OpenWeather API", "CSS"],
      image: "bg-gradient-to-br from-violet-500/20 to-indigo-600/20",
      githubUrl: "https://github.com/zunaidhasan/weather-app",
      liveUrl: "https://weather-app-zunaid.netlify.app/",
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-tech-darker/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">Projects</h2>
        <p className="text-lg text-tech-gray mb-12 max-w-3xl">
          Explore my portfolio of AI and software development projects, 
          showcasing my ability to create intelligent and innovative solutions.
        </p>
        
        <div className="grid-projects">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-panel overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-tech-blue/5 animate-fade-in flex flex-col h-full"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className={`aspect-video ${project.image} flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-tech-gray mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-xs rounded-full bg-tech-light-gray/10 text-tech-light-gray"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-tech-gray hover:text-white transition-colors duration-300 flex items-center gap-1"
                    aria-label="GitHub repository"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-tech-blue hover:text-tech-blue/80 transition-colors duration-300 flex items-center gap-1"
                      aria-label="Live demo"
                    >
                      <ArrowUpRight size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
