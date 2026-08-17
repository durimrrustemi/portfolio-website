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
    <section id="home" className="bg-bg-shade pt-24 lg:pt-40 pb-5 lg:pb-32 scroll-mt-header">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Main Content - Centered */}
          <div className="flex flex-col items-center text-center gap-8">
            <div className="flex flex-col gap-6">
              <p className="text-heading font-semibold text-xl lg:text-2xl">
                Hey, I am Durim Rrustemi
              </p>
              <h1 className="text-heading font-bold text-5xl lg:text-7xl leading-tight">
                Full-Stack Software Engineer
              </h1>
              <p className="text-body text-lg lg:text-2xl leading-relaxed max-w-3xl mx-auto">
                7+ years of experience building scalable back-end systems and cloud-native applications. I help businesses turn complex problems into high-performance software solutions.
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
                className="inline-flex items-center justify-center px-8 py-3.5 border border-primary text-primary font-medium rounded hover:bg-primary hover:text-white transition-all"
              >
                View Experience
              </a>
            </div>

            {/* Tech Stack */}
            <div className="w-full mt-8 pt-8 lg:mt-12 lg:pt-12 border-t border-heading/10">
              <p className="text-heading/70 font-medium text-sm lg:text-base mb-4 lg:mb-6 uppercase tracking-wider">
                Tech Stack
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="relative group p-3 lg:p-5 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-transparent hover:border-accent/30 cursor-pointer"
                    onMouseEnter={(e) => {
                      const img = e.currentTarget.querySelector('img')
                      if (img) {
                        img.style.filter = 'brightness(0) saturate(100%) invert(45%) sepia(70%) saturate(1000%) hue-rotate(240deg) brightness(95%) contrast(90%)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      const img = e.currentTarget.querySelector('img')
                      if (img) {
                        img.style.filter = 'brightness(0) saturate(100%) invert(40%) sepia(50%) saturate(600%) hue-rotate(120deg) brightness(90%) contrast(90%)'
                      }
                    }}
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain transition-all duration-300"
                        style={{
                          filter: 'brightness(0) saturate(100%) invert(40%) sepia(50%) saturate(600%) hue-rotate(120deg) brightness(90%) contrast(90%)',
                        }}
                      />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-heading text-white text-sm font-medium px-3 py-1.5 rounded whitespace-nowrap">
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
