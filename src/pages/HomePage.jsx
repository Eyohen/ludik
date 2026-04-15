import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const heroImage = '/hero.jpeg';
const logo = '/logo.jpeg';
const refineryImage = 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80';
const civilImage = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80';
const complianceImage = 'https://images.pexels.com/photos/36453960/pexels-photo-36453960.jpeg?auto=compress&cs=tinysrgb&w=1400';

const metrics = [
  { value: '1978409', label: 'CAC registration number' },
  { value: '2022', label: 'incorporated in Nigeria' },
  { value: '9', label: 'flow station operations experience' },
  { value: '200+', label: 'well network exposure' },
];

const services = [
  'Construction and structural civil engineering',
  'Borehole drilling and production support',
  'Rural and street electrification',
  'Dredging and shoreline protection',
  'Pipeline sectional replacement',
  'Mechanical installation and maintenance',
  'Mud logging and drilling support',
  'Fabrication, FPSO, oil and gas services',
  'General supply and contract execution',
];

const projects = [
  {
    name: '12 inch Tebidaba sectional replacement',
    client: 'NAOC',
    scope: '10 km replacement works at Clough Creek.',
  },
  {
    name: 'Produced water tank 1T-4301',
    client: 'AGPC',
    scope: 'Construction delivery for Anoh Gas Processing Company.',
  },
  {
    name: 'Ogbainbiri manifold revamp',
    client: 'Agip Oando',
    scope: 'Brownfield revamp works for existing production infrastructure.',
  },
  {
    name: 'Crude oil storage system',
    client: 'Amukpe',
    scope: '100,000 BPD storage system, bundwall, and piping works.',
  },
];

const compliance = ['CAC', 'PENCOM', 'TAX', 'NSITF', 'ITF', 'BPP', 'SCUML'];

const capabilities = [
  {
    title: 'Procurement',
    body: 'Local and imported goods, process facilities, mechanical works, electrical works, minor metal fabrication, storage tanks, and manpower provision.',
  },
  {
    title: 'Commissioning',
    body: 'Quality-led verification, documentation, testing, operation readiness, and site validation against client project requirements.',
  },
  {
    title: 'Operations',
    body: 'Well, reservoir, and facility management across routine production, extended testing, maintenance planning, MER, EOR, and well intervention support.',
  },
  {
    title: 'Maintenance',
    body: 'Rotating and static equipment repair using condition-based maintenance, preventive maintenance, cleaning, planning, and controlled execution.',
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#fff8d8] text-[#102033]">
      <Navbar />
      <main>
        <section id="home" className="relative min-h-[88svh] overflow-hidden bg-[#071b3a] text-white">
          <img
            src={heroImage}
            alt="Industrial energy facility with pipework and steel structures"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,58,0.94),rgba(14,47,90,0.82),rgba(244,211,94,0.18))]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fff8d8] to-transparent" />

          <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-center px-4 pb-20 pt-32 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="max-w-4xl"
            >
              <p className="mb-5 inline-flex items-center gap-3 rounded-lg border border-[#f4d35e]/45 bg-[#fff8d8]/12 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#fff8d8]">
                LUDIK Energy Limited
              </p>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-7xl">
                Integrated engineering, energy infrastructure, and industrial services.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                Civil construction, mechanical works, procurement, commissioning, operations, maintenance, and oil and gas project support across Nigeria.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#f4d35e] px-6 text-sm font-extrabold text-[#071b3a] shadow-lg shadow-[#f4d35e]/20 transition-colors hover:bg-[#fff8d8]">
                  Start a project conversation
                </a>
                <a href="#services" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#fff8d8]/45 px-6 text-sm font-extrabold text-[#fff8d8] transition-colors hover:bg-[#fff8d8]/12">
                  Explore capabilities
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-[#e7ddaa] bg-[#fff8d8] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-[#e7ddaa] bg-white/80 p-5 shadow-sm shadow-[#071b3a]/5">
                <p className="font-display text-3xl font-extrabold text-[#071b3a]">{metric.value}</p>
                <p className="mt-1 text-sm font-semibold text-[#526173]">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="company" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">Company Profile</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#071b3a] sm:text-5xl">
                Built for demanding field conditions, complex assets, and accountable delivery.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#526173]">
                LUDIK Energy Limited delivers construction, production support, procurement, commissioning, maintenance, and general contracting services for public and private sector clients.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-[#e7ddaa] bg-[#fff8d8] p-5">
                  <p className="text-sm font-extrabold uppercase text-[#0e2f5a]">Registered Office</p>
                  <p className="mt-3 leading-7 text-[#526173]">
                    Alba Plaza, Plot 91, Obafemi Awolowo Way, Jabi, Abuja.
                  </p>
                </div>
                <div className="rounded-lg border border-[#e7ddaa] bg-[#fff8d8] p-5">
                  <p className="text-sm font-extrabold uppercase text-[#0e2f5a]">Incorporated</p>
                  <p className="mt-3 leading-7 text-[#526173]">
                    LUDIK Energy Limited was incorporated on 19 September 2022.
                  </p>
                </div>
              </div>
            </div>
            <img
              src={refineryImage}
              alt="Industrial plant at sunset with refinery structures"
              className="h-[34rem] w-full rounded-lg object-cover shadow-2xl shadow-[#071b3a]/18"
            />
          </div>
        </section>

        <section id="services" className="bg-[#fff8d8] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">Our Services</p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#071b3a] sm:text-5xl">
                  Multi-disciplinary support for infrastructure and energy projects.
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-[#526173]">
                One partner for field execution, technical manpower, asset support, and materials supply.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service} className="rounded-lg border border-[#e7ddaa] bg-white p-6 shadow-sm shadow-[#071b3a]/5 transition-transform hover:-translate-y-1">
                  <span className="block h-1 w-14 rounded-lg bg-[#f4d35e]" />
                  <h3 className="mt-5 text-xl font-extrabold leading-7 text-[#071b3a]">{service}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[#071b3a] px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#f4d35e]">Project Experience</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">
                Delivery history across oil, gas, civil, and production facilities.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#fff8d8]/78">
                Experience spans pipeline replacement, tank construction, manifold revamps, crude oil storage works, bundwall construction, and production facility support.
              </p>
              <img
                src={civilImage}
                alt="Engineer reviewing construction work on an industrial site"
                className="mt-8 h-72 w-full rounded-lg border border-[#f4d35e]/20 object-cover"
              />
            </div>
            <div className="grid gap-4">
              {projects.map((project) => (
                <article key={project.name} className="rounded-lg border border-[#f4d35e]/18 bg-[#fff8d8]/8 p-6">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <h3 className="text-2xl font-extrabold">{project.name}</h3>
                    <span className="rounded-lg bg-[#f4d35e] px-3 py-1 text-xs font-extrabold uppercase text-[#071b3a]">
                      {project.client}
                    </span>
                  </div>
                  <p className="mt-3 leading-7 text-[#fff8d8]/72">{project.scope}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="operations" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">Execution Model</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#071b3a] sm:text-5xl">
                Procurement, commissioning, operations, and maintenance under one delivery discipline.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((item) => (
                <article key={item.title} className="rounded-lg border border-[#e7ddaa] bg-[#fff8d8] p-6">
                  <h3 className="text-2xl font-extrabold text-[#071b3a]">{item.title}</h3>
                  <p className="mt-4 leading-7 text-[#526173]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="compliance" className="bg-[#fff8d8] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <img
              src={complianceImage}
              alt="African engineer in safety gear representing regulated project compliance"
              className="h-[32rem] w-full rounded-lg object-cover shadow-2xl shadow-[#071b3a]/18"
            />
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">Compliance</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#071b3a] sm:text-5xl">
                Registered, documented, and prepared for regulated project environments.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#526173]">
                Corporate documentation supports procurement readiness, contract onboarding, statutory compliance, and client due diligence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {compliance.map((item) => (
                  <span key={item} className="rounded-lg border border-[#e7ddaa] bg-white px-4 py-3 text-sm font-extrabold text-[#071b3a] shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-lg bg-[#0e2f5a] p-6 text-white shadow-xl shadow-[#071b3a]/18 lg:grid-cols-[1fr_1fr] lg:p-10">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#f4d35e]">Contact</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">
                Speak with LUDIK Energy Limited.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#fff8d8]/78">
                For construction, energy infrastructure, procurement, commissioning, operations, maintenance, and general contract enquiries.
              </p>
            </div>
            <div className="grid gap-4">
              <a href="mailto:ludikenergy@gmail.com" className="rounded-lg border border-[#f4d35e]/25 bg-[#fff8d8] p-5 text-[#071b3a] transition-transform hover:-translate-y-1">
                <p className="text-sm font-extrabold uppercase text-[#0e2f5a]">Email</p>
                <p className="mt-2 text-xl font-extrabold">ludikenergy@gmail.com</p>
              </a>
              <a href="tel:+2348037337221" className="rounded-lg border border-[#f4d35e]/25 bg-[#fff8d8] p-5 text-[#071b3a] transition-transform hover:-translate-y-1">
                <p className="text-sm font-extrabold uppercase text-[#0e2f5a]">Telephone</p>
                <p className="mt-2 text-xl font-extrabold">+234 (0) 803 733 7221</p>
              </a>
              <a href="tel:+2348035703562" className="rounded-lg border border-[#f4d35e]/25 bg-[#fff8d8] p-5 text-[#071b3a] transition-transform hover:-translate-y-1">
                <p className="text-sm font-extrabold uppercase text-[#0e2f5a]">Telephone</p>
                <p className="mt-2 text-xl font-extrabold">+234 (0) 803 570 3562</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
