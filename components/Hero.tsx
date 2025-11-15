'use client'

import Image from 'next/image'

export default function Hero() {
  const techStack = [
    { name: '.NET', logo: '/icons/dotnet.svg' },
    { name: 'Node.js', logo: '/icons/nodejs.svg' },
    { name: 'FastAPI', logo: '/icons/fastapi.svg' },
    { name: 'AWS', logo: '/icons/aws.svg' },
    { name: 'Angular', logo: '/icons/angular.svg' },
    { name: 'React', logo: '/icons/react.svg' },
    { name: 'Docker', logo: '/icons/docker.svg' },
  ]

  return (
    <section id="home" className="bg-bg-shade dark:bg-body pt-32 lg:pt-40 pb-20 lg:pb-32">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Main Content - Centered */}
          <div className="flex flex-col items-center text-center gap-8">
            <div className="flex flex-col gap-6">
              <p className="text-heading dark:text-heading-dark font-semibold text-xl lg:text-2xl">
                Hey, I am Durim Rrustemi
              </p>
              <h1 className="text-heading dark:text-heading-dark font-bold text-5xl lg:text-7xl leading-tight">
                Full-Stack Software Engineer
              </h1>
              <p className="text-body dark:text-body-dark text-lg lg:text-2xl leading-relaxed max-w-3xl mx-auto">
                7+ years of experience building scalable back-end systems, secure APIs, and cloud-native applications. 
                Proven track record in financial services and international projects.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-medium rounded hover:bg-accent transition-all"
              >
                Get In Touch
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-primary text-primary dark:text-white font-medium rounded hover:bg-primary hover:text-white transition-all"
              >
                View Experience
              </a>
            </div>

            {/* Tech Stack */}
            <div className="w-full mt-12 pt-12 border-t border-heading/10 dark:border-heading-dark/10">
              <p className="text-heading/70 dark:text-heading-dark/70 font-medium text-sm lg:text-base mb-6 uppercase tracking-wider">
                Tech Stack
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="relative group p-5 bg-white dark:bg-bg-shade-dark rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-transparent hover:border-accent/30 cursor-pointer"
                    onMouseEnter={(e) => {
                      const img = e.currentTarget.querySelector('img')
                      if (img) {
                        img.style.filter = 'brightness(0) saturate(100%) invert(37%) sepia(91%) saturate(3276%) hue-rotate(322deg) brightness(97%) contrast(89%)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      const img = e.currentTarget.querySelector('img')
                      if (img) {
                        img.style.filter = 'brightness(0) saturate(100%) invert(26%) sepia(89%) saturate(1583%) hue-rotate(240deg) brightness(97%) contrast(105%)'
                      }
                    }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image 
                        src={tech.logo} 
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain transition-all duration-300"
                        style={{
                          filter: 'brightness(0) saturate(100%) invert(26%) sepia(89%) saturate(1583%) hue-rotate(240deg) brightness(97%) contrast(105%)',
                        }}
                      />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-heading dark:bg-heading-dark text-white dark:text-heading text-sm font-medium px-3 py-1.5 rounded whitespace-nowrap">
                        {tech.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

