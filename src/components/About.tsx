import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Globe,
  Code,
  Lightning,
  Rocket,
  Heart,
  Database,
  GitBranch,
  Cube,
  Terminal,
  Cloud,
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

 const skills = [
  // ===== Backend Core =====
  { icon: Code, name: 'Java (Core & OOPs)', level: 92 },
  { icon: Rocket, name: 'Spring Boot', level: 90 },
  { icon: Rocket, name: 'Spring MVC', level: 88 },
  { icon: Rocket, name: 'Spring Security (JWT)', level: 85 },
  { icon: Database, name: 'JPA / Hibernate', level: 88 },
  { icon: Terminal, name: 'REST API Development', level: 90 },
  { icon: Database, name: 'JDBC', level: 85 },
  { icon: Cube, name: 'Maven / Gradle', level: 87 },

  // ===== Database =====
  { icon: Database, name: 'MySQL', level: 90 },
  { icon: Database, name: 'PostgreSQL', level: 85 },
  { icon: Database, name: 'MongoDB', level: 82 },

  // ===== Frontend =====
  { icon: Globe, name: 'HTML5', level: 90 },
  { icon: Lightning, name: 'CSS3', level: 88 },
  { icon: Code, name: 'JavaScript (ES6+)', level: 50 },
  { icon: Code, name: 'React.js', level: 82 },
  { icon: Cube, name: 'Bootstrap / Tailwind CSS', level: 86 },

  // ===== Tools & DevOps =====
  { icon: GitBranch, name: 'Git & GitHub', level: 90 },
  { icon: Terminal, name: 'Postman / API Testing', level: 88 },
  { icon: Cube, name: 'Docker (Basics)', level: 80 },
 

  // ===== Advanced / Bonus =====
  { icon: Rocket, name: 'WebSocket (Realtime Apps)', level: 82 },
  { icon: Rocket, name: 'Microservices Basics', level: 78 },
  { icon: Database, name: 'Redis (Caching Basics)', level: 70 }
];



  useEffect(() => {
    const ctx = gsap.context(() => {
      /* IMAGE ANIMATION */
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      /* TEXT ANIMATION */
      gsap.from(contentRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
      });

      /* SKILLS SAFE ANIMATION (NO REF BUG) */
      gsap.from('.skill-card', {
        y: 30,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.skill-card',
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        {/* ================= TOP GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ===== IMAGE ===== */}
          <div ref={imageRef} className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse" />

              <div className="relative w-full h-full glass rounded-full p-2 hover:shadow-glow-primary transition-all duration-500 group">
                <div className="w-full h-full cursor-pointer rounded-full overflow-hidden bg-gradient-secondary">
                  <img
                    src="/Images/profileLogo.jpg"
                    alt="Vishal Gupta - Backend Developer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full animate-float" />
              <div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/20 rounded-full animate-float"
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>

          {/* ===== CONTENT ===== */}
          <div ref={contentRef} className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
                About <span className="text-primary-glow">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-6" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
I’m an aspiring Java Full Stack Developer with hands-on experience in building secure, scalable, and high-performance web applications using Java, Spring Boot, Spring MVC, JPA/Hibernate, and RESTful APIs, along with databases like MySQL and MongoDB.

  </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I focus on developing clean backend architectures, implementing authentication and efficient database management, and creating responsive user interfaces using HTML, CSS, JavaScript, and React. I’m passionate about solving real-world problems, writing maintainable code, and continuously improving my system design and problem-solving skills.
          
            </p>

            {/* ===== STATS ===== */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="glass px-4 py-2 rounded-lg">
                <span className="text-primary-glow font-medium">Fresher</span>
                <span className="text-muted-foreground ml-1">
                  Backend Developer
                </span>
              </div>

              <div className="glass px-4 py-2 rounded-lg">
                <span className="text-secondary-glow font-medium">5+</span>
                <span className="text-muted-foreground ml-1">
                  Projects Completed
                </span>
              </div>

              <div className="glass px-4 py-2 rounded-lg">
                <span className="text-accent-glow font-medium">350+</span>
                <span className="text-muted-foreground ml-1">
                  DSA Problems Solved
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SKILLS ================= */}
         <div className="mt-20">
          <h3 className="text-3xl font-light text-center text-foreground mb-12">
            My <span className="text-primary-glow">Skills</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="glass p-6 cursor-pointer rounded-xl hover:shadow-glow-primary transition-all duration-300 hover:scale-105 group">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-bounce">
                    <skill.icon size={24} className="text-primary-foreground" />
                  </div>

                  <h4 className="text-lg font-medium text-foreground">{skill.name}</h4>

                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }} />
                  </div>

                  <span className="text-primary-glow font-medium">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
          
      </div>

      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default About;
