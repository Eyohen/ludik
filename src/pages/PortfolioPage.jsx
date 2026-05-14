import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const pipelineImg = '/pipelineinfrastructure.jpeg'
const offshoreImg = '/ogbainbiri.jpeg'
const civilImg = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80'

const caseStudies = [
  {
    id: 'pipeline-niger-delta',
    title: 'Pipeline Installation Project',
    location: 'Niger Delta, Nigeria',
    client: 'Confidential Client',
    scope: 'Design and installation of pipeline infrastructure across the Niger Delta region, including survey works, detailed engineering, procurement, construction, and commissioning.',
    outcome: 'Delivered on schedule with full regulatory compliance and zero safety incidents. The project met all client performance specifications and received commendation from the regulatory authority for safety standards.',
    tags: ['Pipeline', 'Infrastructure', 'Niger Delta', 'Construction'],
    image: pipelineImg,
    imageAlt: 'Large diameter pipeline installation infrastructure in the Niger Delta region',
  },
  {
    id: 'rig-offshore',
    title: 'Rig Support Operations',
    location: 'Offshore Nigeria',
    client: 'Confidential Client',
    scope: 'Comprehensive operational support and maintenance services for an offshore oil rig, including preventive maintenance, equipment inspection, troubleshooting, and HSE compliance monitoring.',
    outcome: 'Improved operational efficiency significantly and reduced downtime by 30% through the implementation of a structured preventive maintenance programme and 24/7 support capability.',
    tags: ['Rig Operations', 'Offshore', 'Maintenance', 'HSE'],
    image: offshoreImg,
    imageAlt: 'Offshore oil rig platform in Nigerian waters at dusk',
  },

  {
    id: 'crude-storage',
    title: 'Crude oil Flow Storage, Yenagoa, Bayelsa, Nigeria',
    location: 'Delta State, Nigeria',
    client: 'Amukpe',
    scope: 'High Pressure crude oil flow system project including P & id project including tank construction, bund wall and piping works, structural steelwork, and associated civil engineering.',
    outcome: 'Successfully delivered the full storage system with all civil, mechanical, and piping works completed to client specification. The facility has been operating without incident since commissioning.',
    tags: ['Storage', 'Civil Works', 'Piping', 'Tank Construction'],
    image: pipelineImg,
    imageAlt: 'Large crude oil storage tanks and piping infrastructure at an African facility',
  },
]

const PortfolioPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#071b3a] pb-20 pt-32 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f4d35e]">Our Portfolio</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Proven delivery across Nigeria's energy landscape.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#fff8d8]/80">
              From offshore rig support to onshore pipeline installation, our portfolio reflects our commitment to precision, safety, and on-time delivery across the most demanding projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-[#fff8d8] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-14">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`grid items-center gap-10 overflow-hidden rounded-lg border border-[#e7ddaa] bg-white shadow-sm shadow-[#071b3a]/5 lg:grid-cols-[1fr_1fr] ${i % 2 === 1 ? 'lg:grid-cols-[1fr_1fr]' : ''}`}
            >
              {i % 2 === 0 ? (
                <>
                  <img
                    src={cs.image}
                    alt={cs.imageAlt}
                    className="h-80 w-full object-cover lg:h-full lg:min-h-[380px]"
                  />
                  <div className="px-6 py-8 lg:px-8 lg:py-10">
                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-[#f4d35e]/25 px-2.5 py-1 text-xs font-bold text-[#071b3a]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="mt-4 text-2xl font-extrabold text-[#071b3a]">{cs.title}</h2>
                    <p className="mt-1 text-sm font-semibold text-[#b48f10]">{cs.location}</p>
                    <div className="mt-5 space-y-4">
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wide text-[#526173]">Scope</p>
                        <p className="mt-1.5 leading-7 text-[#526173]">{cs.scope}</p>
                      </div>
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wide text-[#526173]">Outcome</p>
                        <p className="mt-1.5 leading-7 text-[#526173]">{cs.outcome}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="px-6 py-8 lg:px-8 lg:py-10">
                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-[#f4d35e]/25 px-2.5 py-1 text-xs font-bold text-[#071b3a]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="mt-4 text-2xl font-extrabold text-[#071b3a]">{cs.title}</h2>
                    <p className="mt-1 text-sm font-semibold text-[#b48f10]">{cs.location}</p>
                    <div className="mt-5 space-y-4">
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wide text-[#526173]">Scope</p>
                        <p className="mt-1.5 leading-7 text-[#526173]">{cs.scope}</p>
                      </div>
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wide text-[#526173]">Outcome</p>
                        <p className="mt-1.5 leading-7 text-[#526173]">{cs.outcome}</p>
                      </div>
                    </div>
                  </div>
                  <img
                    src={cs.image}
                    alt={cs.imageAlt}
                    className="h-80 w-full object-cover lg:h-full lg:min-h-[380px]"
                  />
                </>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071b3a] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to add your project to our portfolio?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#fff8d8]/78">
            Contact us to discuss your project requirements. We deliver results — on time, on budget, and to specification.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#f4d35e] px-10 text-sm font-extrabold text-[#071b3a] transition-colors hover:bg-[#fff8d8]"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage
