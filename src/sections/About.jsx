import { Code2, Lightbulb, Rocket, Users } from 'lucide-react'
import React from 'react'

const highlight = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Code that’s easy to read, easy to maintain, and hard to break."
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Blazing-fast interfaces engineered for smooth user experiences."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Turning ideas into reality through teamwork."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly learning, experimenting, and improving."
  },
]
const About = () => {
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* left-Column  */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me
              </span>
            </div>

            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground '>
              Building the future,
              <span className='font-serif italic font-normal text-white'> one component at a time.</span>
            </h2>

            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>
                As a Computer Science graduate with a strong foundation in the MERN stack, focused on
                building clean, responsive, and user-friendly web applications. Experienced in creating
                frontend interfaces using React, managing APIs, and developing backend features with
                Node.js, Express, and MongoDB. I enjoy working on real-world projects where I can turn
                ideas into functional and well-structured applications.
              </p>
              <br />
              <p>
                I learn quickly, adapt fast, and work well in collaborative environments. During my internship
                and personal projects, I gained hands-on experience in problem-solving, debugging, code
                merging, and delivering quality results. I am committed to improving my skills, writing clean
                code, and growing as a full-stack developer.
              </p>
            </div>

            <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
              <p className='text-lg font-medium italic text-foreground'>
                My mission is to build clean, scalable, and user-friendly web applications that turn real-world ideas into reliable digital solutions while continuously growing as a full-stack developer.
              </p>
            </div>
          </div>

          {/* right column   */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {
              highlight.map((item, index) => (
                <div key={index} className='glass p-6 rounded-2xl animate-fade-in' style={{animationDelay: `${(index+1)*100}ms`}}>
                  <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 mb-4'>
                    <item.icon className='w-6 h-6 text-primary'/>
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                  <p className='text-sm text-muted-foreground'>{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
