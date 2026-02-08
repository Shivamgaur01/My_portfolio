import React from 'react'
import Button from '../components/Button'
import { ArrowRight, Github, Instagram, Linkedin, ChevronDown, Download } from 'lucide-react'
import { Animatedborderbutton } from '../components/Animatedborderbutton'

const skills = [
  "React",
  "JSX",
  "Node.js",
  "Redux",
  "ExpressJs",
  "MongoDB",
  "JavaScript",
  "SQL",
  "HTML",
  "Wordpress",
  "CSS",
  "Python",
  "Bootstrap",
  "TailwindCSS",
  "Git",
  "GitHub actions",
  "Figma",
  "Vercel",

]

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      <div className='absolute inset-0'>
        <img
          src="/hero-bg.jpg"
          alt="hero-img"
          className='w-full h-full object-cover opacity-40 '
        />
        <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background' />
      </div>

      {/* green dots  */}

      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {
          [...Array(30)].map((_, i) => (
            <div key={i} className='absolute w-1.5 h-1.5 rounded-full opacity-60'
              style={{
                backgroundColor: "#20B2A6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }} />
          ))
        }
      </div>

      {/* content  */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* left column text content  */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse' />Full-Stack Developer <span className='w-2 h-2 rounded-full bg-primary' /> MERN Stack specialist
              </span>
            </div>

            {/* headline  */}
            <div className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                Crafting <span className='text-primary glow-text'>digital</span>
                <br />
                experiences with
                <br />
                <span className='font-serif italic font-normal text-white'>precision.</span>
              </h1>
              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300'>
                I’m a passionate Full-Stack Developer with a strong specialization in the <span className='animate-pulse text-primary italic font-bold'>MERN Stack</span>. I enjoy building scalable, user-focused web applications by combining clean frontend experiences with robust backend systems. I love turning ideas into high-quality digital products. I’m always eager to learn, improve, and work on challenging real-world problems.

              </p>
            </div>

            {/* CTA  */}
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-400'>
              <Button size='lg' href="#contact">Contact Me <ArrowRight className='w-5 h-5' /></Button>
              <a href="/public/MYLATESTWEBDEVRESUME.pdf" download>
                <Animatedborderbutton>
                  <Download className="w-5 h-5" />
                  Download CV
                </Animatedborderbutton>
              </a>
            </div>

            {/* social-links  */}
            <div className='flex items-center gap-4 animate-fade-in animation-delay-500 '>
              <span className='text-sm text-muted-foreground '>Follow me:- </span>
              {
                [
                  { icon: Github, href: "https://github.com/Shivamgaur01" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/shivam-gaur-749097296" },
                  { icon: Instagram, href: "https://www.instagram.com/shivamgaur462/" },

                ].map((social, index) => (
                  <a target='blank' className='p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300' key={index} href={social.href}>{<social.icon className='w-5 h-5' />}</a>
                ))
              }
            </div>
          </div>
          {/* right column profile image  */}
          <div className='relative animate-fade-in animation-delay-300'>
            {/* profile image  */}
            <div className='relative max-w-md mx-auto '>
              <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse' />
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img src="/my-image.jpg" alt="my photo" className='w-full aspect-[4/5] object-cover rounded-2xl' />

                {/* floating badge  */}
                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full' />

                    <span className='text-sm font-medium'>Available to Work</span>
                  </div>
                </div>

                {/* stats badge  */}
                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-2xl font-bold text-primary '>6+</div>
                  <div className='text-xs text-muted-foreground'>Months Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skill section  */}
        <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>
          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>
              {
                [...skills, ...skills].map((skills, index) => (
                  <div key={index} className='flex-shrink-0 px-8 py-4'>
                    <span className='text-xl font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors'>
                      {skills}
                    </span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800 z-40"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

export default Hero
