import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const rigImg = '/oilrigsupport.jpeg'
const pipelineImg = '/pipelineinfrastructure.jpeg'
const projectMgmtImg = '/projectmanagement.jpeg'
const maintenanceImg = '/maintenance.jpeg'

const services = [
  {
    id: 'rig',
    title: 'Oil Rig Project Support',
    intro: 'We provide complete support services for oil rig operations, ensuring efficient performance, safety compliance, and operational reliability.',
    image: rigImg,
    imageAlt: 'African oil rig workers operating heavy equipment offshore at night',
    items: [
      'Rig installation and commissioning',
      'Operational support and troubleshooting',
      'Preventive maintenance programs',
      'Equipment optimization and upgrades',
      'Safety compliance and training',
      '24/7 emergency response capability',
    ],
    closing: 'We ensure that all rig operations are executed efficiently, minimising downtime and maximising productivity for our clients.',
  },
  {
    id: 'pipeline',
    title: 'Pipeline Infrastructure',
    intro: 'We deliver end-to-end pipeline infrastructure solutions covering design, construction, installation, and maintenance.',
    image: pipelineImg,
    imageAlt: 'Large diameter pipeline infrastructure across an African landscape',
    items: [
      'Pipeline design and engineering',
      'Construction and installation',
      'Inspection and maintenance',
      'Corrosion protection systems',
      'Pressure testing and certification',
      'Regulatory compliance management',
    ],
    closing: 'Our pipeline solutions are designed for durability, efficiency, and long-term reliability in the most demanding field conditions.',
  },
  {
    id: 'project-management',
    title: 'Energy Project Management',
    intro: 'Our project management services ensure seamless execution from planning to completion, delivering results on time and within budget.',
    image: projectMgmtImg,
    imageAlt: 'African energy project management team reviewing plans in a strategy session',
    items: [
      'Project planning and scheduling',
      'Budget management and cost control',
      'Resource allocation and optimization',
      'Risk management and mitigation',
      'Stakeholder communication',
      'Quality assurance and compliance',
    ],
    closing: 'We guarantee on-time, on-budget delivery without compromising quality — driven by disciplined execution and clear accountability.',
  },
  {
    id: 'maintenance',
    title: 'Industrial Maintenance Support',
    intro: 'We provide comprehensive maintenance services for industrial facilities and energy infrastructure to maximise asset performance and longevity.',
    image: maintenanceImg,
    imageAlt: 'African engineer in safety gear performing industrial equipment inspection',
    items: [
      'Preventive maintenance planning',
      'Corrective maintenance services',
      'Equipment diagnostics and repair',
      'Spare parts management',
      'Maintenance training programs',
      'Performance monitoring and reporting',
    ],
    closing: 'Our approach ensures maximum asset performance and longevity, reducing unplanned downtime and operating costs across your facilities.',
  },
]

const ServicesPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#071b3a] pb-20 pt-32 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f4d35e]">Our Services</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Comprehensive services across the energy value chain.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#fff8d8]/80">
              From rig operations to pipeline infrastructure, project management to industrial maintenance — one partner for all your energy engineering needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`px-4 py-20 sm:px-6 lg:px-8 ${i % 2 === 0 ? 'bg-white' : 'bg-[#fff8d8]'}`}
        >
          <div className={`mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr] ${i % 2 === 1 ? 'lg:grid-cols-[1fr_1fr]' : ''}`}>
            {i % 2 === 0 ? (
              <>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">
                    0{i + 1}
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold text-[#071b3a] sm:text-4xl">{service.title}</h2>
                  <p className="mt-4 text-lg leading-8 text-[#526173]">{service.intro}</p>
                  <ul className="mt-6 space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#f4d35e]" />
                        <span className="text-[#526173]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-base leading-7 text-[#526173]">{service.closing}</p>
                </div>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-[36rem] w-full rounded-lg object-cover shadow-2xl shadow-[#071b3a]/18"
                />
              </>
            ) : (
              <>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-[36rem] w-full rounded-lg object-cover shadow-2xl shadow-[#071b3a]/18"
                />
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">
                    0{i + 1}
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold text-[#071b3a] sm:text-4xl">{service.title}</h2>
                  <p className="mt-4 text-lg leading-8 text-[#526173]">{service.intro}</p>
                  <ul className="mt-6 space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#f4d35e]" />
                        <span className="text-[#526173]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-base leading-7 text-[#526173]">{service.closing}</p>
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#071b3a] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to start a project?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#fff8d8]/78">
            Contact our team to discuss your requirements. We respond within 24 hours and tailor our solutions to your specific needs.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#f4d35e] px-8 text-sm font-extrabold text-[#071b3a] transition-colors hover:bg-[#fff8d8]"
            >
              Get in touch
            </Link>
            <Link
              to="/projects/portfolio"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#fff8d8]/35 px-8 text-sm font-extrabold text-[#fff8d8] transition-colors hover:bg-[#fff8d8]/10"
            >
              View our portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
