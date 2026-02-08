const experiences = [
  {
    period: "August 2025 - present",
    role: "Frontend developer",
    company: "ARM WorldWide",
    description: "Working in ARM WorldWide as a Frontend Developer involves building responsive and user-friendly interfaces, primarily using modern JavaScript frameworks. Alongside frontend responsibilities, the role also includes backend tasks such as developing CMS dashboards using Node.js, integrating APIs, and handling basic server-side logic, providing a well-rounded development experience.",
    technologies: ["React", "NextJs", "JavaScript", "NodeJs", "MongoDB", "ExpressJs"],
    current: true

  },

  {
    period: "March 2025 - August 2025",
    role: "MERN Full Stack Training",
    company: "CETPA Infotech Pvt Ltd",
    description: "Training in a CETPA as a MERN Full Stack Developer focuses on hands-on experience in developing web applications using MongoDB, Express.js, React.js, and Node.js. It involves building frontend and backend features, creating APIs, managing databases, and working with development teams, helping build practical skills and industry-ready experience.",
    technologies: ["React", "NextJs", "JavaScript", "NodeJs", "MongoDB", "ExpressJs"],
    current: false
  }
]

import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className='py-32 relative overflow-hidden'>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className='container mx-auto px-6 relative z-10'>
        {/* section header  */}
        <div className='max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            career Journey
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground '>
            Experience that <span className='font-serif italic font-normal text-white'>
              speaks volumes.
            </span>
          </h2>

          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            A timeline of my professional growth, from curious beginner
          </p>
        </div>

        {/* timeline  */}
        <div className='relative'>
          <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)] ' />
          {/* experience items  */}
          <div className='space-y-12'>
            {
              experiences.map((exp, idx) => (
                <div key={idx} className='relative grid md:grid-cols-2 gap-8 animate-fade-in' style={{animationDelay: `${(idx+1)*150}ms`}}>
                  {/* timeline dot  */}
                  <div className='absolute ring-4 ring-background left-0 md:left-1/2 top-0 w-3 h-3 rounded-full -translate-x-1/2 bg-primary z-10'>
                  {exp.current && <span className='absolute inset-0 animate-ping bg-primary rounded-full opacity-75'/>}
                  </div>

                  {/* content  */}
                  <div className= {`pl-8 md:pl-0 ${idx %2 === 0 ? "md:pr-16 md:text-right": "md:col-start-2 md:pl-16" }`}>
                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                      <span className='text-sm text-primary font-medium '>{exp.period}</span>
                      <h3 className='text-xl font-semibold mt-2'>{exp.role}</h3>
                      <p className='text-muted-foreground'>{exp.company}</p>
                      <p className='text-muted-foreground text-sm mt-4'>{exp.description}</p>
                      <div className={`flex flex-wrap gap-2 mt-4 ${idx%2===0 ? "md:justify-end" : ""}`}>
                        {exp.technologies.map((tech, index) => (
                          <span key={index} className='px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground'>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </section >
  )
}

export default Experience
