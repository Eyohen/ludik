import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const aboutHero = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80'
const teamMeetingImg = 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400'
const fieldImg = 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80'

const industries = [
  'Upstream Oil & Gas Operations',
  'Pipeline Infrastructure',
  'Energy Infrastructure Development',
  'Industrial Facilities',
  'Engineering & Construction Projects',
]

const values = [
  {
    title: 'Safety First',
    body: 'Every project is executed with an unwavering commitment to worker safety, public safety, and environmental protection.',
  },
  {
    title: 'Technical Excellence',
    body: 'We combine local expertise with international best practices to deliver precision-engineered solutions.',
  },
  {
    title: 'Integrity',
    body: 'We maintain the highest standards of professionalism and transparency in all client and stakeholder relationships.',
  },
  {
    title: 'Innovation',
    body: 'We continuously adopt modern engineering practices to enhance performance, reduce risks, and deliver sustainable outcomes.',
  },
]

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071b3a] pt-32 pb-20 text-white">
        <img
          src={aboutHero}
          alt="African engineer reviewing construction works on-site"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071b3a]/95 to-[#071b3a]/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f4d35e]">About Us</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              An indigenous energy company built to last.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#fff8d8]/80">
              Committed to delivering reliable, efficient, and innovative solutions across the oil and gas industry — leveraging local expertise and international best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company story */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">Who We Are</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#071b3a] sm:text-4xl">
              Ludik Energy Limited
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#526173]">
              Ludik Energy Limited is an indigenous energy and engineering company committed to delivering reliable, efficient, and innovative solutions across the oil and gas industry. Our operations span engineering design, fabrication, construction, pipeline installation, rig operations, and maintenance services.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              We leverage local expertise and international best practices to provide high-quality solutions tailored to the needs of our clients. Our organisation is driven by a team of experienced professionals who bring technical knowledge, strategic insight, and operational excellence to every project.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              We are committed to maintaining the highest standards of professionalism, integrity, and safety in all our operations. Our goal is to enhance energy accessibility, drive economic growth, and establish Ludik Energy as a leading brand in the African energy sector.
            </p>
          </div>
          <img
            src={fieldImg}
            alt="African oil and gas field infrastructure at sunset"
            className="h-[36rem] w-full rounded-lg object-cover shadow-2xl shadow-[#071b3a]/18"
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#071b3a] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#f4d35e]">Our Purpose</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-[#f4d35e]/25 bg-[#fff8d8]/8 p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#f4d35e]/15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f4d35e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-[#f4d35e]">Vision</h3>
              <p className="mt-4 text-lg leading-8 text-[#fff8d8]/82">
                To be a trusted African leader in integrated energy services, delivering innovative and sustainable solutions across the global energy landscape.
              </p>
            </div>
            <div className="rounded-lg border border-[#f4d35e]/25 bg-[#fff8d8]/8 p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#f4d35e]/15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f4d35e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-[#f4d35e]">Mission</h3>
              <p className="mt-4 text-lg leading-8 text-[#fff8d8]/82">
                To deliver reliable, efficient, and safe energy solutions through innovation, strategic partnerships, and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#fff8d8] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">Core Values</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-[#071b3a] sm:text-4xl">
            The principles that guide every decision we make.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((val) => (
              <article key={val.title} className="rounded-lg border border-[#e7ddaa] bg-white p-6 shadow-sm shadow-[#071b3a]/5">
                <span className="block h-1 w-12 rounded-lg bg-[#f4d35e]" />
                <h3 className="mt-5 text-xl font-extrabold text-[#071b3a]">{val.title}</h3>
                <p className="mt-3 leading-7 text-[#526173]">{val.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <img
            src={teamMeetingImg}
            alt="Diverse African energy professionals in a project review meeting"
            className="h-[36rem] w-full rounded-lg object-cover shadow-2xl shadow-[#071b3a]/18"
          />
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">Industries We Serve</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#071b3a] sm:text-4xl">
              Spanning the full spectrum of energy and engineering sectors.
            </h2>
            <ul className="mt-8 space-y-4">
              {industries.map((industry) => (
                <li key={industry} className="flex items-center gap-4 rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-5 py-4">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#f4d35e]" />
                  <span className="font-semibold text-[#071b3a]">{industry}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4">
              <Link
                to="/services"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#071b3a] px-6 text-sm font-bold text-[#fff8d8] transition-colors hover:bg-[#0e2f5a]"
              >
                Our services
              </Link>
              <Link
                to="/about/team"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#e7ddaa] px-6 text-sm font-bold text-[#071b3a] transition-colors hover:bg-[#fff8d8]"
              >
                Meet our team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
