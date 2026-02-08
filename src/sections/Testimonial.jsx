import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import React, { useState } from 'react'

const testimonials = [
  {
    quote:
      "Shivam is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Anurag Sahani",
    role: "Senior full stack developer, ARM WorldWide",

  },
  {
    quote:
      "Working with Shivam was very amazing experience. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Raj Kalra",
    role: "Senior full Stack trainer, CETPA Infotech",

  },
  {
    quote:
      "Shivam's expertise in React helped us rebuild our entire frontend in record time. He is a continous learner and did the amazing job during all the times",
    author: "Paras dave",
    role: "Team Manager, ARM WorldWide",

  },
];

const Testimonial = () => {
  const [activeIndx, setActiveIndx] = useState(0)

  const next = ()=>{
    setActiveIndx((prev)=> (prev+1) % testimonials.length)
  }
  const previous = ()=>{
    setActiveIndx((prev)=> (prev-1 + testimonials.length)% testimonials.length)
  }
  return (
    <section id="testimonial" className='py-32 relative overflow-hidden'>
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className='container mx-auto px-6 relative z-10'>
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* testimonial carousel  */}
        <div className='max-w-4xl mx-auto'>
          <div className='relative'>
            {/* main testimonal  */}
            <div className='glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200'>
              <div className='absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center'>
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className='text-xl md:text-2xl font-medium leading-relaxed mb-8 mt-4'>{testimonials[activeIndx].quote}</blockquote>

              <div className='flex items-center gap-4'>
                <div className='font-semibold'>{testimonials[activeIndx].author}</div>
                <div className='text-sm text-muted-foreground'>{testimonials[activeIndx].role}</div>
              </div>
            </div>

            {/* testimonial navigation  */}

            <div className='flex items-center justify-center gap-4 mt-8'>
              <button onClick={previous} className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all '>
                <ChevronLeft/>
              </button>

              <div className='flex gap-2'>
                {
                  testimonials.map((_, indx)=>(
                    <button key={indx} onClick={()=> setActiveIndx(indx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${indx === activeIndx ? 'w-8 bg-primary': 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`} />
                  ))
                }
              </div>

              <button onClick={next} className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all '>
                <ChevronRight />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
