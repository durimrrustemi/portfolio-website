export default function Experience() {
  const experiences = [
    {
      title: 'Full-Stack Software Engineer',
      company: 'Elba Technologies',
      period: 'February 2024 - Present',
      achievements: [
        'Designed and implemented new backend architecture on FastAPI/Python, including a new DB model; migrated production data with zero downtime.',
        'Introduced Infrastructure as Code with AWS CDK and CodePipeline, enabling automated deployments, self-scaling infrastructure.',
        'Proposed and led adoption of SvelteKit + Vite + Tailwind as the new frontend stack, replacing legacy JavaScript PWA; deployed on S3 + CloudFront, cutting load times from seconds to milliseconds.',
        'Delivered AWS Lambda event integrations with third-party services using CDK + pipelines.',
        'Optimized AWS setup, reducing monthly costs from $6k → $3k while improving performance.',
        'Took end-to-end responsibility for architecture, database design, cloud infra, and CI/CD.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Raiffeisen Bank Kosovo',
      period: 'June 2018 - January 2024',
      achievements: [
        'Maintained core banking system and legacy .NET applications (2018–2020).',
        'Promoted to Software Developer in the e-Banking tribe, building web & mobile banking solutions.',
        'Integrated 3rd party services (utilities, telecoms, government payments) into digital channels, expanding customer functionality.',
        'Built scalable APIs with 99.99% uptime, powering e-Banking services for 100k+ customers.',
        'Acted as Code Reviewer & Release Manager in later years, ensuring code quality and managing production deployments with minimal downtime.',
      ],
    },
  ]

  const education = [
    {
      degree: 'BSc Computer and Electrical Engineering',
      institution: 'University of Prishtina',
      note: 'Scholarship',
    },
    {
      degree: 'Graduate',
      institution: "USAID's Transformational Leadership Program, American University of Kosovo",
      note: '',
    },
    {
      degree: 'Distinct Graduate',
      institution: 'LIMAK Airport Institute, Boğaziçi University',
      note: '',
    },
    {
      degree: 'Winner',
      institution: 'National Math Competition',
      note: '',
    },
  ]

  const languages = [
    { language: 'German', proficiency: 'Full professional proficiency (C1)' },
    { language: 'English', proficiency: 'Full professional proficiency (C1)' },
    { language: 'Albanian', proficiency: 'Native' },
  ]

  return (
    <section id="experience" className="py-5 lg:py-32 bg-bg-shade scroll-mt-header">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Professional Experience */}
        <div className="mb-12 lg:mb-32">
          <div className="flex flex-col gap-3 lg:gap-5 mb-8 lg:mb-16">
            <p className="text-heading font-semibold text-xl lg:text-2xl">Career</p>
            <h2 className="text-heading font-bold text-4xl lg:text-6xl leading-tight">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-4 lg:space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-5 lg:p-8 rounded-lg border-l-4 border-primary hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-heading font-bold text-2xl lg:text-3xl mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-semibold text-xl lg:text-2xl mb-1">
                      {exp.company}
                    </p>
                    <p className="text-body/70 text-lg">{exp.period}</p>
                  </div>
                  <ul className="space-y-3 mt-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-3 text-body text-lg leading-relaxed">
                        <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Education */}
          <div>
            <div className="flex flex-col gap-3 lg:gap-5 mb-6 lg:mb-12">
              <p className="text-heading font-semibold text-xl lg:text-2xl">Education</p>
              <h2 className="text-heading font-bold text-3xl lg:text-5xl leading-tight">
                Academic Background
              </h2>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 lg:p-6 bg-white rounded-lg border-l-4 border-primary hover:shadow-md transition-shadow"
                >
                  <h3 className="text-heading font-bold text-xl lg:text-2xl mb-2">
                    {edu.degree}
                    {edu.note && (
                      <span className="ml-2 text-primary text-lg">({edu.note})</span>
                    )}
                  </h3>
                  <p className="text-body text-lg">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex flex-col gap-3 lg:gap-5 mb-6 lg:mb-12">
              <p className="text-heading font-semibold text-xl lg:text-2xl">Languages</p>
              <h2 className="text-heading font-bold text-3xl lg:text-5xl leading-tight">
                Language Skills
              </h2>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="p-4 lg:p-6 bg-white rounded-lg border-l-4 border-primary hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap items-center gap-2 lg:flex-col lg:items-start">
                    <h3 className="text-heading font-bold text-lg lg:text-2xl">
                      {lang.language}
                    </h3>
                    {['German', 'English'].includes(lang.language) ? (
                      <p className="text-body text-base lg:text-lg">
                        <span className="lg:hidden">Fluent</span>
                        <span className="hidden lg:inline">{lang.proficiency}</span>
                      </p>
                    ) : (
                      <p className="text-body text-base lg:text-lg">{lang.proficiency}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
