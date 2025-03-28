
import { useState } from 'react';
import { Mail, MessageSquare, Github, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-tech-darker/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">Contact Me</h2>
        <p className="text-lg text-tech-gray mb-12 max-w-3xl">
          Have a project in mind or want to discuss collaboration opportunities?
          Feel free to reach out, and I'll get back to you as soon as possible.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-panel p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6 text-white">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-tech-light-gray mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input-field"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-tech-light-gray mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input-field"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="connect.zunaid@gmail.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-tech-light-gray mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="input-field resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="button-primary w-full flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <MessageSquare size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="glass-panel p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold mb-6 text-white">Connect With Me</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:connect.zunaid@gmail.com" 
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-full bg-tech-blue/10 text-tech-blue">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white group-hover:text-tech-blue transition-colors">Email</h4>
                    <p className="text-tech-gray">connect.zunaid@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/zunaidhasan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-full bg-tech-gray/10 text-tech-gray">
                    <Github size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white group-hover:text-tech-gray transition-colors">GitHub</h4>
                    <p className="text-tech-gray">github.com/zunaidhasan</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/zunaid712/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-full bg-tech-blue/10 text-tech-blue">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white group-hover:text-tech-blue transition-colors">LinkedIn</h4>
                    <p className="text-tech-gray">linkedin.com/in/zunaid712/</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="glass-panel p-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-semibold mb-4 text-white">Let's Collaborate</h3>
              <p className="text-tech-gray">
                I'm always open to discussing new projects, innovative ideas, or opportunities to be part of your vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
