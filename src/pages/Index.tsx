
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Improved Intersection Observer to ensure elements become visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Select all elements with animation classes that should be triggered on scroll
    document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-in-right').forEach((el) => {
      // Make sure we don't start with opacity-0 class which might be overriding our animations
      if (el.classList.contains('opacity-0')) {
        el.classList.remove('opacity-0');
      }
      observer.observe(el);
    });

    // Add animation class to make elements visible
    document.documentElement.style.setProperty('--animate-delay', '0.2s');
    document.body.classList.add('loaded');

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
