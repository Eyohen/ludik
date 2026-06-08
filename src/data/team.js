export const TEAM_KEY = 'ludik_team_members'
const TEAM_SEED_VERSION_KEY = 'ludik_team_members_seed_version'
const TEAM_SEED_VERSION = '2026-05-06-ludik-team-v3'

export const defaultTeam = [
  {
    id: '1',
    name: 'Ulang Adie',
    title: 'Director Operations',
    bio: 'Ludik Energy is fully committed to the objectives of the Nigerian Oil and Gas Industry Content Development Act (NOGICD) Act, thus recognising the importance of utilizing local human and material resources to drive national economic growth, build capacity and ensure sustainable industry participation.',
    credentials: ['BSc Accounting'],
    imageUrl: '/ulangadie.jpeg',
  },
  {
    id: '2',
    name: 'Dr Jonathan Omini',
    title: 'Director Admin/Finance',
    bio: 'Ludik Energy has recognised its responsibility to contribute positively to the socio-economic development of its host communities while minimizing environmental impact.\n\nOur CSR commitment is sustainable practices, ethical conduct, and community engagement.',
    credentials: ['PhD Criminology (major Criminal Justice)'],
    imageUrl: '/jonathanomini.jpg',
  },
  {
    id: '3',
    name: 'Emilia-Cortez Eyo ACA, SaaS',
    title: 'Human Resources',
    bio: 'Joined the company as the financial accountant and her approach to resources and divergent experiences gave way to being appointed the Human Resources Manager.',
    credentials: ['MSc Finance and Banking', 'Certificate; Human Psychology', 'HSE 1-3'],
    imageUrl: '/emilia.jpeg',
  },
]

const seededDefaultNames = new Set([
  'Engr. Chukwuemeka Okafor',
  'Engr. Amaka Eze',
  'Mr. Emeka Nwosu',
  'Ulang Adie',
  'Dr Jonathan Omini',
  'Emilia-Cortez Eyo',
])

function isSeededTeam(list) {
  return (
    Array.isArray(list) &&
    list.length === defaultTeam.length &&
    list.every((member) => seededDefaultNames.has(member.name))
  )
}

function seedDefaultTeam() {
  localStorage.setItem(TEAM_KEY, JSON.stringify(defaultTeam))
  localStorage.setItem(TEAM_SEED_VERSION_KEY, TEAM_SEED_VERSION)
  return defaultTeam
}

export function getTeam() {
  try {
    const stored = localStorage.getItem(TEAM_KEY)
    const seedVersion = localStorage.getItem(TEAM_SEED_VERSION_KEY)

    if (stored) {
      const parsedTeam = JSON.parse(stored)
      const shouldRefreshSeededTeam = seedVersion !== TEAM_SEED_VERSION && isSeededTeam(parsedTeam)

      if (!shouldRefreshSeededTeam) {
        return parsedTeam
      }
    }

    return seedDefaultTeam()
  } catch {
    return defaultTeam
  }
}

export function saveTeam(list) {
  localStorage.setItem(TEAM_KEY, JSON.stringify(list))
  localStorage.setItem(TEAM_SEED_VERSION_KEY, 'custom')
}
