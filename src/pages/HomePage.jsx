import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const heroImage = '/hero.jpeg'

const africanEngineers = '/industriesweserve.jpeg'
const refineryImage = '/facility.jpeg'
const engineer = '/engineeringexcellence.jpeg'

const metrics = [
  { value: '1978409', label: 'CAC Registration Number' },
  { value: '2022', label: 'Incorporated in Nigeria' },
  { value: '9', label: 'Flow Station Operations' },
  { value: '200+', label: 'Well Network Exposure' },
]

const services = [
  {
    title: 'Oil Rig Project Support',
    desc: 'Complete support services for oil rig operations, ensuring efficient performance, safety compliance, and operational reliability.',
  },
  {
    title: 'Pipeline Infrastructure',
    desc: 'End-to-end pipeline solutions covering design, construction, installation, inspection, and maintenance.',
  },
  {
    title: 'Energy Project Management',
    desc: 'Seamless project execution from planning to completion — on time, on budget, without compromising quality.',
  },
  {
    title: 'Industrial Maintenance Support',
    desc: 'Comprehensive maintenance services for industrial facilities and energy infrastructure to maximise asset performance.',
  },
]

const industries = [
  'Upstream Oil & Gas Operations',
  'Pipeline Infrastructure',
  'Energy Infrastructure Development',
  'Industrial Facilities',
  'Engineering & Construction Projects',
]

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92svh] overflow-hidden bg-[#071b3a] text-white">
        <img
          src={heroImage}
          alt="Industrial energy facility with pipework and steel structures in Nigeria"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,58,0.95),rgba(14,47,90,0.85),rgba(244,211,94,0.12))]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fff8d8] to-transparent" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-center px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <p className="mb-5 inline-flex items-center gap-3 rounded-lg border border-[#f4d35e]/45 bg-[#fff8d8]/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#f4d35e]">
              LUDIK Energy Limited
            </p>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-6xl xl:text-7xl">
              Premier indigenous oil and gas engineering for Africa's energy future.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Positioned at the intersection of engineering innovation and operational excellence, we deliver comprehensive solutions that address the most complex challenges in today's energy industry.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#f4d35e] px-7 text-sm font-extrabold text-[#071b3a] shadow-lg shadow-[#f4d35e]/25 transition-colors hover:bg-[#fff8d8]"
              >
                Start a project conversation
              </Link>
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#fff8d8]/45 px-7 text-sm font-extrabold text-[#fff8d8] transition-colors hover:bg-[#fff8d8]/12"
              >
                Explore capabilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-b border-[#e7ddaa] bg-[#fff8d8] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-[#e7ddaa] bg-white/80 p-5 shadow-sm shadow-[#071b3a]/5"
            >
              <p className="font-display text-3xl font-extrabold text-[#071b3a]">{metric.value}</p>
              <p className="mt-1 text-sm font-semibold text-[#526173]">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company profile */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">Company Profile</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#071b3a] sm:text-5xl">
              Built on deep technical expertise and a relentless commitment to quality.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#526173]">
              Ludik Energy Limited is a premier indigenous oil and gas engineering company delivering advanced, high-performance solutions across the energy value chain. We specialise in integrated solutions across upstream and midstream operations, ensuring efficiency, reliability, and sustainability in every project.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Our operations are guided by international best practices, strict safety standards, and a commitment to environmental sustainability. Through strategic partnerships and continuous innovation, we continue to position ourselves as a trusted partner in the global energy landscape.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/about"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#071b3a] px-6 text-sm font-bold text-[#fff8d8] transition-colors hover:bg-[#0e2f5a]"
              >
                Learn about us
              </Link>
              <Link
                to="/about/team"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#e7ddaa] px-6 text-sm font-bold text-[#071b3a] transition-colors hover:bg-[#fff8d8]"
              >
                Meet our team
              </Link>
            </div>
          </div>
          <img
            src={refineryImage}
            alt="African industrial refinery facility at sunset"
            className="h-[36rem] w-full rounded-lg object-cover shadow-2xl shadow-[#071b3a]/18"
          />
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-[#fff8d8] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">Our Services</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#071b3a] sm:text-5xl">
                Integrated solutions across the energy value chain.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg border border-[#071b3a]/25 bg-[#071b3a] px-6 text-sm font-bold text-[#fff8d8] transition-colors hover:bg-[#0e2f5a]"
            >
              View all services
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-lg border border-[#e7ddaa] bg-white p-7 shadow-sm shadow-[#071b3a]/5 transition-transform hover:-translate-y-1"
              >
                <span className="block h-1 w-14 rounded-lg bg-[#f4d35e]" />
                <h3 className="mt-5 text-xl font-extrabold leading-7 text-[#071b3a]">{service.title}</h3>
                <p className="mt-3 leading-7 text-[#526173]">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries we serve */}
      <section className="bg-[#071b3a] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#f4d35e]">Industries We Serve</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">
              Spanning the full spectrum of energy and engineering sectors.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#fff8d8]/78">
              We adopt a modern engineering approach that combines data-driven insights, advanced technologies, and a highly skilled workforce — enabling precision delivery and long-term asset reliability.
            </p>
            <ul className="mt-8 space-y-3">
              {industries.map((industry) => (
                <li key={industry} className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#f4d35e]" />
                  <span className="font-semibold text-[#fff8d8]/88">{industry}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/projects/portfolio"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#f4d35e] px-6 text-sm font-bold text-[#071b3a] transition-colors hover:bg-[#fff8d8]"
              >
                View our portfolio
              </Link>
            </div>
          </div>
          <img
            src={africanEngineers}
            alt="African engineers reviewing plans at an energy project site"
            className="h-[34rem] w-full rounded-lg border border-[#f4d35e]/20 object-cover shadow-2xl shadow-black/30"
          />
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <img
            src={engineer}
            alt="African engineer in safety gear on a regulated project site"
            className="h-[32rem] w-full rounded-lg object-cover shadow-2xl shadow-[#071b3a]/18"
          />
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">Our Approach</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#071b3a] sm:text-5xl">
              Engineering excellence, operational discipline, and client-focused delivery.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#526173]">
              We work closely with our clients to understand their specific needs, develop tailored solutions, and execute projects with precision and accountability. Our collaborative approach fosters strong partnerships and ensures that we consistently exceed expectations.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              We emphasise proactive planning, efficient resource utilisation, and continuous performance monitoring to ensure successful project outcomes.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#071b3a] px-6 text-sm font-bold text-[#fff8d8] transition-colors hover:bg-[#0e2f5a]"
            >
              Read more about us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fff8d8] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-lg bg-[#0e2f5a] p-10 text-center text-white shadow-xl shadow-[#071b3a]/18">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#f4d35e]">Get in Touch</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">
            Ready to drive energy forward?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#fff8d8]/78">
            We respond to all enquiries within 24 hours and provide tailored solutions to meet your needs. Let's build something exceptional together.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#f4d35e] px-8 text-sm font-extrabold text-[#071b3a] transition-colors hover:bg-[#fff8d8]"
            >
              Contact us today
            </Link>
            <Link
              to="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#fff8d8]/35 px-8 text-sm font-extrabold text-[#fff8d8] transition-colors hover:bg-[#fff8d8]/10"
            >
              Our services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
