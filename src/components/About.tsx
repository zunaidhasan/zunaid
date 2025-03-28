
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="glass-panel p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg leading-relaxed mb-6">
              I'm Zunaid Hasan, a final-year Computer Science student at a leading university in Bangladesh. 
              My journey in technology began with a fascination for how computer systems could solve complex problems, 
              and that curiosity evolved into a passion for Artificial Intelligence and Machine Learning.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              With a strong foundation in computer science fundamentals and specialized knowledge in AI/ML, 
              I've developed various projects that leverage data-driven approaches to create intelligent solutions.
              I'm particularly interested in natural language processing, computer vision, and how these technologies 
              can be applied to real-world problems.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              When I'm not coding or building ML models, you'll find me exploring the latest advancements in technology, 
              contributing to open-source projects, or sharing my knowledge through technical articles.
            </p>
            
            <a 
              href="#"
              className="inline-flex items-center gap-2 text-tech-blue hover:underline group"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('resume');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>More about my journey</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="space-y-6">
            <div className="glass-panel p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
              <ul className="space-y-4">
                <li className="border-l-2 border-tech-blue pl-4 py-1">
                  <h4 className="font-medium text-white">BSc in Computer Science</h4>
                  <p className="text-tech-gray">Daffodil International University • 2022 - 2025</p>
                </li>
                <li className="border-l-2 border-tech-purple pl-4 py-1">
                  <h4 className="font-medium text-white">AI & Machine Learning Specialization</h4>
                  <p className="text-tech-gray">Coursera • 2022</p>
                </li>
              </ul>
            </div>
            
            <div className="glass-panel p-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-semibold mb-4 text-white">Experience</h3>
              <ul className="space-y-4">
                <li className="border-l-2 border-tech-blue pl-4 py-1">
                  <h4 className="font-medium text-white">AI Intern</h4>
                  <p className="text-tech-gray">CodeAlpha • 2025</p>
                </li>
                <li className="border-l-2 border-tech-purple pl-4 py-1">
                  <h4 className="font-medium text-white">Student Researcher</h4>
                  <p className="text-tech-gray">University AI Lab • 2022 - Present</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div id="resume" className="mt-16 flex justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a 
            href="#" 
            className="button-primary flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              // In a real implementation, this would download the resume
              const resumeUrl = '/uploads/Zunaid Hasan Resume.pdf'; // Adjust the path as needed
              window.open(resumeUrl, '_blank');
            }}
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
