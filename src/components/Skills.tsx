
const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', proficiency: 95 },
        { name: 'JavaScript', proficiency: 90 },
        { name: 'TypeScript', proficiency: 85 },
        { name: 'Java', proficiency: 80 },
        { name: 'C++', proficiency: 75 },
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', proficiency: 90 },
        { name: 'PyTorch', proficiency: 85 },
        { name: 'Scikit-learn', proficiency: 90 },
        { name: 'Natural Language Processing', proficiency: 85 },
        { name: 'Computer Vision', proficiency: 80 },
      ]
    },
    {
      title: 'Web & Tools',
      skills: [
        { name: 'React', proficiency: 90 },
        { name: 'Node.js', proficiency: 85 },
        { name: 'Git', proficiency: 90 },
        { name: 'Docker', proficiency: 80 },
        { name: 'AWS', proficiency: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">Skills</h2>
        <p className="text-lg text-tech-gray mb-12 max-w-3xl">
          A comprehensive overview of my technical expertise and proficiency in various technologies,
          with a focus on AI/ML development and programming.
        </p>
        
        <div className="grid-skills">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="glass-panel p-8 animate-fade-in"
              style={{ animationDelay: `${0.2 * categoryIndex}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-tech-gray/20 text-white">
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-tech-light-gray">{skill.name}</span>
                      <span className="text-tech-gray">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-tech-gray/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-tech-blue to-tech-purple"
                        style={{ 
                          width: `${skill.proficiency}%`,
                          transition: 'width 1s ease-in-out',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-panel p-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-xl font-semibold mb-6 text-white">Other Skills & Interests</h3>
          
          <div className="flex flex-wrap gap-3">
            {[
              'Data Visualization', 'RESTful APIs', 'GraphQL', 'MongoDB', 'PostgreSQL', 
              'UI/UX Design', 'Agile Methodology', 'System Design', 'Cloud Computing',
              'Deep Learning', 'Reinforcement Learning', 'Data Analysis', 'Big Data',
              'Microservices', 'CI/CD', 'Testing', 'Mobile Development'
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-tech-light-gray hover:bg-white/10 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
