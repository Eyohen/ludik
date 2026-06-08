import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const heroImg = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80'
const nigerDeltaImg = 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80'

const highlights = [
  {
    value: '10km',
    label: 'Pipeline replacement delivered for NAOC in the Niger Delta',
  },
  {
    value: '30%',
    label: 'Reduction in operational downtime achieved for Offshore Nigeria rig operations',
  },
  {
    value: '100K BPD',
    label: 'Crude oil storage system capacity at Amukpe',
  },
  {
    value: '0',
    label: 'Safety incidents across all completed projects',
  },
]

const ProjectsPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071b3a] pb-20 pt-32 text-white">
        <img
          src={heroImg}
          alt="African engineer reviewing project plans at a major construction site"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071b3a]/95 to-[#071b3a]/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f4d35e]">Projects</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              A strong track record of delivery.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#fff8d8]/80">
              Our project history spans pipeline infrastructure, rig support, crude oil storage systems, and brownfield facility revamps — all executed with precision and zero compromise on safety.
            </p>
            <Link
              to="/projects/portfolio"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#f4d35e] px-8 text-sm font-extrabold text-[#071b3a] transition-colors hover:bg-[#fff8d8]"
            >
              View our portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#fff8d8] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.value}
              className="rounded-lg border border-[#e7ddaa] bg-white p-6 shadow-sm shadow-[#071b3a]/5"
            >
              <p className="font-display text-4xl font-extrabold text-[#071b3a]">{h.value}</p>
              <p className="mt-2 text-sm leading-6 text-[#526173]">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery approach */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <img
            src={nigerDeltaImg}
            alt="Industrial energy infrastructure in the Niger Delta region of Nigeria"
            className="h-[36rem] w-full rounded-lg object-cover shadow-2xl shadow-[#071b3a]/18"
          />
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">Our Delivery Model</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#071b3a] sm:text-4xl">
              Precision execution from concept to commissioning.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#526173]">
              Every Ludik Energy project begins with a thorough understanding of client requirements, site conditions, and regulatory obligations. We deploy structured project management frameworks, dedicated site teams, and real-time performance monitoring to ensure every milestone is met.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Our collaborative approach means we work alongside clients as true partners — not just contractors. We provide transparent reporting, proactive risk management, and responsive problem-solving throughout the project lifecycle.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                to="/projects/portfolio"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#071b3a] px-6 text-sm font-bold text-[#fff8d8] transition-colors hover:bg-[#0e2f5a]"
              >
                View portfolio
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#e7ddaa] px-6 text-sm font-bold text-[#071b3a] transition-colors hover:bg-[#fff8d8]"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
