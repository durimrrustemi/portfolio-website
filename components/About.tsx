import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-5 lg:py-32 dark:bg-body scroll-mt-header">
      <div className="container mx-auto px-6 lg:px-20">
        {/* "About" Label */}
        <p className="text-heading dark:text-heading-dark font-semibold text-xl lg:text-2xl mb-8 lg:mb-16">About</p>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-24">
          {/* Left Image */}
          <div className="w-full lg:flex-1 lg:max-w-xl">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/durim-rrustemi.png" 
                alt="Durim Rrustemi - Full-Stack Software Engineer"
                width={800}
                height={800}
                className="w-full h-auto"
                style={{ transform: 'scale(1.05)', transformOrigin: 'center' }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:flex-1 flex flex-col gap-5 lg:gap-8">
            {/* "About Me" Heading */}
            <h2 className="text-heading dark:text-heading-dark font-bold text-4xl lg:text-6xl leading-tight">
              About Me
            </h2>

            {/* Text */}
            <p className="text-body dark:text-body-dark text-lg lg:text-2xl leading-relaxed">
              Full-Stack Software Engineer with 7+ years of experience building scalable back-end systems, secure APIs,
              and cloud-native applications. Proven track record in financial services and international projects, with
              expertise in .NET Core, Python/FastAPI, Node.js, AWS, and modern front-end frameworks.
            </p>

            <p className="text-body dark:text-body-dark text-lg lg:text-2xl leading-relaxed">
              Strong ownership of architecture and infrastructure decisions, from database design to frontend stack selection.
              Passionate about delivering high-performance, cost-effective solutions that scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

