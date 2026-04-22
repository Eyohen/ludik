import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TEAM_KEY = 'ludik_team_members'

const defaultTeam = [
  {
    id: '1',
    name: 'Ulang Adie',
    title: 'Director Operations',
    bio: 'Ludik Energy is fully committed to the objectives of the Nigerian Oil and Gas Industry Content Development Act (NOGICD) Act, thus recognising the importance of utilizing local human and material resources to drive national economic growth, build capacity and ensure sustainable industry participation. BSc Accounting',
    imageUrl: '/ulangadie.jpeg',
  },
  {
    id: '2',
    name: 'Dr Jonathan Omini',
    title: 'Director Admin/Finance',
    bio: 'Ludik Energy has recognised its responsibility to contribute positively to the socio-economic development of its host communities while minimizing environmental impact. Our CSR commitment are sustainable practices, ethical conduct, and community engagement. PhD Criminology (major Criminal Justice)',
    imageUrl: '/jonathanomini.jpg',
  },
  {
    id: '3',
    name: 'Emilia-Cortez Eyo',
    title: 'Human Resources',
    bio: 'Joined the company as the Financial accountant and her approach to resources and divergent experiences gave way to being appointed the Human Resources Manager MSc Finance and Banking Certificate; Human Psychology jmHSE 1-3 ',
    imageUrl: '/emilia.jpeg',
  },
]

const teamHero = 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1400'

function getTeam() {
  try {
    const stored = localStorage.getItem(TEAM_KEY)
    if (stored) return JSON.parse(stored)
    localStorage.setItem(TEAM_KEY, JSON.stringify(defaultTeam))
    return defaultTeam
  } catch {
    return defaultTeam
  }
}

const TeamPage = () => {
  const [team, setTeam] = useState([])

  useEffect(() => {
    setTeam(getTeam())
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071b3a] pb-20 pt-32 text-white">
        <img
          src={teamHero}
          alt="African energy professionals collaborating in a team meeting"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071b3a]/95 to-[#071b3a]/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f4d35e]">Our Team</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              The people driving Ludik Energy forward.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#fff8d8]/80">
              Our leadership team brings together decades of experience across oil and gas engineering, project management, and business development in Africa's energy sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-[#fff8d8] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {team.length === 0 ? (
            <div className="flex min-h-40 items-center justify-center rounded-lg border border-[#e7ddaa] bg-white">
              <p className="text-[#526173]">No team members have been added yet.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {team.map((member, i) => (
                <motion.article
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="overflow-hidden rounded-lg border border-[#e7ddaa] bg-white shadow-sm shadow-[#071b3a]/5"
                >
                  <div className="h-64 overflow-hidden bg-[#0e2f5a]/10">
                    {member.imageUrl ? (
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-6xl font-extrabold text-[#071b3a]/20">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="block h-1 w-10 rounded-lg bg-[#f4d35e]" />
                    <h3 className="mt-4 text-xl font-extrabold text-[#071b3a]">{member.name}</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-wide text-[#b48f10]">{member.title}</p>
                    {member.bio && <p className="mt-3 text-sm leading-7 text-[#526173]">{member.bio}</p>}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-[#071b3a] sm:text-3xl">
            Interested in joining Ludik Energy?
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            We are always looking for talented professionals to join our growing team. Get in touch to explore opportunities.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#071b3a] px-8 text-sm font-bold text-[#fff8d8] transition-colors hover:bg-[#0e2f5a]"
          >
            Contact us
          </a>
        </div>
      </section>
    </div>
  )
}

export default TeamPage
