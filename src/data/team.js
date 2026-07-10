import { assetUrl } from '../utils/assetUrl'

export const TEAM_KEY = 'ludik_team_members'
const TEAM_SEED_VERSION_KEY = 'ludik_team_members_seed_version'
const TEAM_SEED_VERSION = '2026-07-07-ludik-team-v4'

export const defaultTeam = [
  {
    id: '1',
    name: 'Ulang Adie',
    title: 'Director Operations',
    bio: 'Ludik Energy is fully committed to the objectives of the Nigerian Oil and Gas Industry Content Development Act (NOGICD) Act, thus recognising the importance of utilizing local human and material resources to drive national economic growth, build capacity and ensure sustainable industry participation.',
    credentials: ['BSc Accounting'],
    imageUrl: assetUrl('/ulangadie.jpeg'),
  },
  {
    id: '2',
    name: 'Dr Jonathan Omini',
    title: 'Finance/ Administration',
    bio: 'Ludik Energy has recognised its responsibility to contribute positively to the socio-economic development of its host communities while minimizing environmental impact.\n\nOur CSR commitment is sustainable practices, ethical conduct, and community engagement.',
    credentials: ['PhD Criminology (major Criminal Justice)'],
    imageUrl: assetUrl('/jonathanomini.jpg'),
  },
  {
    id: '3',
    name: 'Emilia-Cortez Eyo ACA, SaaS',
    title: 'Head of Human Resources/ Corporate',
    bio: 'Joined the company as the financial accountant and her approach to resources and divergent experiences gave way to being appointed the Human Resources Manager.',
    credentials: ['MSc Finance and Banking', 'Certificate; Human Psychology', 'HSE 1-3'],
    imageUrl: assetUrl('/emilia.jpeg'),
  },
  {
    id: '4',
    name: 'COBHAM EDET EFFIONG. \n\nACA, CFA, MBA, RIIAN, CISA',
    title: 'Head of Accounts',
    bio: 'combines technical depth in accounting, forensic investigation, and IT systems with 28 years of practical experience across high-risk industries Oil & Gas, delivering savings of over N500m through recovery of overpayments and blocking leakages. Qualifications & Education',
    credentials: ['Associate, Institute of Chartered Accountants of Nigeria ACA', 'Certified Forensic Accountant CFA', 'Certified Information Systems Auditor CISA – ISACA','Master of Business Administration MBA – University of Calabar','B.Sc. Accounting – University of Calabar','Registered Incorporated Internal Auditor of Nigeria'],
    imageUrl: assetUrl('/cobham.jpeg'),
  },
]

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

      if (seedVersion === 'custom') {
        return parsedTeam
      }

      if (seedVersion === TEAM_SEED_VERSION) {
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
