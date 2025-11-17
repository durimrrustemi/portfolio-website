export default function Skills() {
  const skills = [
    {
      title: 'Backend Development',
      description:
        'Expert in .NET Core, FastAPI/Python, and Node.js. Building scalable APIs with 99.99% uptime, serving 100k+ customers.',
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
    },
    {
      title: 'Cloud & DevOps',
      description:
        'AWS expert (CDK, Lambda, EC2, S3, CloudFront). Infrastructure as Code, CI/CD pipelines, and cost optimization expertise.',
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
    {
      title: 'Frontend Development',
      description:
        'Modern frameworks including Angular, SvelteKit, and React. Performance optimization cutting load times to milliseconds.',
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Architecture & Security',
      description:
        'End-to-end ownership of system architecture, database design, authentication, and security best practices.',
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="skills" className="py-5 lg:py-32 dark:bg-bg-shade-dark scroll-mt-header">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <div className="flex flex-col gap-3 lg:gap-5 mb-8 lg:mb-16">
          <p className="text-heading dark:text-heading-dark font-semibold text-xl lg:text-2xl">My Skills</p>
          <h2 className="text-heading dark:text-heading-dark font-bold text-4xl lg:text-6xl leading-tight">
            What I Do
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 lg:gap-8 p-5 lg:p-8 bg-bg-shade dark:bg-body border-b-4 border-primary rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                {/* Icon */}
                <div className="w-14 h-14 lg:w-20 lg:h-20 bg-white dark:bg-bg-shade-dark rounded-xl shadow-md flex items-center justify-center">
                  {skill.icon}
                </div>
                {/* Title */}
                <h3 className="text-heading dark:text-heading-dark font-bold text-2xl lg:text-3xl leading-tight">
                  {skill.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-body dark:text-body-dark text-lg lg:text-xl leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

