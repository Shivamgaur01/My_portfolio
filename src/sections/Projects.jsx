import { ArrowUpRight, Github } from 'lucide-react'
import React from 'react'
import { Animatedborderbutton } from '@/components/Animatedborderbutton'

const projects = [
  {
    title: "Netflix Clone with Firebase Auth",
    dexcription: "Built a functional Netflix-style clone using React, featuring Firebase Authentication for secure signup/ login flows.",
    image: "/public/projects/project-1.png",
    tags: ["React", "Firebase-Auth", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Shivamgaur01/Netflix-clone-with-firebase-auth"
  },
  {
    title: "Movie Explorer",
    dexcription: " Developed a movie discovery web app using React, integrating external APIs to fetch and display movie data dynamically.",
    image: "/public/projects/project-3.png",
    tags: ["React", "Tailwind CSS", "JavaScript", "TMDB_API"],
    github: "https://github.com/Shivamgaur01/movie_explorer"
  },
  {
    title: "Expense trekker",
    dexcription: "Created a personal finance tracking application with React, enabling users to add, categorize, and monitor expenses.",
    image: "/public/projects/project-2.png",
    tags: ["React", "Bootstrap", "JavaScript"],
    github: "https://github.com/Shivamgaur01/Expense-trekker"
  },
]

const Projects = () => {
  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      {/* bg glows  */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header  */}

        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Featured work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground '>
            Project that
            <span className='font-serif italic font-normal text-white' > make an impact. </span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            Here are some of the projects I’ve built, reflecting my ability to turn ideas into practical, well-structured solutions.
          </p>
        </div>

        {/* projects grid  */}
        <div className='grid md:grid-cols-2 gap-8'>
          {
            projects.map((project, indx) => (
              <div key={indx} className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1' style={{ animationDelay: `${(indx + 1) * 100}ms` }}>
                <div className='relative overflow-hidden aspect-video'>
                  <img src={project.image} alt="project-image" className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' />
                  <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60' />
                  {/* overlay links  */}
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <a target='blank' href={project.github} className='p-3 glass rounded-full hover:bg-primary/80 hover:text-primary-foreground transition-all'> <Github className='w-5 h-5' /> </a>
                  </div>
                </div>

                {/* content  */}
                <div className='p-6 space-y-4 '>
                  <div className='flex items-start justify-between'>
                    <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                    <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all' />
                  </div>
                  <p className='text-muted-foreground text-sm'>{project.dexcription}</p>
                  <div className='flex flex-wrap gap-2'>{project.tags.map((tag, idx) => (
                    <span key={idx} className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'>{tag}</span>
                  ))}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects
