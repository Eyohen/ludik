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

const completedProjects = [
  {
    name: '10" Clough Creek–Tebidaba Pipeline (10 km) Sectional Replacement to 12"',
    date: 'December 2020',
  },
  {
    name: 'Idu 3LS Flowline Sectional Replacement (4" × 3.250 m, Schedule 80)',
    date: 'March 2025',
  },
  {
    name: 'Idu 3SS Flowline Sectional Replacement (4" × 3.250 m, Schedule 80)',
    date: 'March 2025',
  },
  {
    name: 'Idu 10SS Flowline Sectional Replacement and Harvested Portion',
    date: 'March 2025',
  },
  {
    name: 'Isoko 3LS and Oleh 4LS Restoration and Procurement',
    date: 'August 2025',
  },
  {
    name: 'Idu 10S Flowline Sectional Replacement and Harvested Portion',
    date: 'September 2025',
  },
  {
    name: 'Egbegoro 12 Flowline Sectional Replacement',
    date: 'September 2025',
  },
  {
    name: '4" × 163 m, Schedule 80, Obrikom 12T Flowline Sectional Replacement Activity',
    date: 'October 2025',
  },
  {
    name: '4" × 2.5 km Obrikom 9 Flowline Sectional Replacement',
    date: 'November 2025',
  },
  {
    name: '17.5 km Idu 6ST Flowline (6", Schedule 120) Sectional Replacement',
    date: 'November 2025',
  },
  {
    name: '17.5 km Idu V Flowline (6", Schedule 120) Sectional Replacement',
    date: 'December 2025',
  },
  {
    name: '4" × 1,500 m Oshie 12SS/LS Flowline Laying Project Works',
    date: 'December 2025',
  },
  {
    name: '4" × 3.4 km Oshie 8SS/LS Flowline Laying Project Works',
    date: 'December 2025',
  },
  {
    name: 'Idu NAG Manifold Modification for Production Through MP Header',
    date: 'February 2026',
  },
  {
    name: '56 km Clough Creek–Tebidaba Pipeline Sectional Replacement Site Inspections',
    date: 'June 2026',
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

      {/* Completed projects */}
      <section className="bg-[#071b3a] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#f4d35e]">Project Experience</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Selected completed projects.</h2>
            <p className="mt-4 text-lg leading-8 text-[#fff8d8]/75">
              Pipeline, flowline, restoration, inspection, and production infrastructure works delivered across the Niger Delta.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {completedProjects.map((project, index) => (
              <motion.article
                key={`${project.name}-${project.date}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                className="flex gap-4 rounded-lg border border-white/15 bg-white/5 p-5"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#f4d35e]" />
                <div>
                  <h3 className="font-bold leading-7 text-white">{project.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#f4d35e]">{project.date}</p>
                </div>
              </motion.article>
            ))}
          </div>
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
