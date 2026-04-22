import { useEffect, useState } from 'react'

const KEYS = {
  BLOG: 'ludik_blog_posts',
  TEAM: 'ludik_team_members',
  EMPLOYEES: 'ludik_employees',
  SUBMISSIONS: 'ludik_submissions',
}

function count(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]').length
  } catch {
    return 0
  }
}

function getRecentSubmissions() {
  try {
    return JSON.parse(localStorage.getItem(KEYS.SUBMISSIONS) || '[]').slice(0, 5)
  } catch {
    return []
  }
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

const StatCard = ({ label, value, color }) => (
  <div className="rounded-lg border border-[#e7ddaa] bg-white p-6 shadow-sm">
    <p className="text-sm font-semibold text-[#526173]">{label}</p>
    <p className={`mt-2 text-4xl font-extrabold ${color || 'text-[#071b3a]'}`}>{value}</p>
  </div>
)

const AdminDashboard = () => {
  const [stats, setStats] = useState({ blog: 0, team: 0, employees: 0, submissions: 0 })
  const [recent, setRecent] = useState([])

  useEffect(() => {
    setStats({
      blog: count(KEYS.BLOG),
      team: count(KEYS.TEAM),
      employees: count(KEYS.EMPLOYEES),
      submissions: count(KEYS.SUBMISSIONS),
    })
    setRecent(getRecentSubmissions())
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#071b3a]">Dashboard</h1>
      <p className="mt-1 text-sm text-[#526173]">Overview of your Ludik Energy admin panel.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Contact Submissions" value={stats.submissions} color="text-[#0e2f5a]" />
        <StatCard label="Blog Posts" value={stats.blog} />
        <StatCard label="Team Members" value={stats.team} />
        <StatCard label="Employees" value={stats.employees} />
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-lg font-extrabold text-[#071b3a]">Recent Contact Submissions</h2>
        {recent.length === 0 ? (
          <div className="rounded-lg border border-[#e7ddaa] bg-white p-8 text-center text-sm text-[#526173]">
            No submissions yet. They will appear here when visitors submit the contact form.
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border border-[#e7ddaa] bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e7ddaa] bg-[#fff8d8]">
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Date</th>
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Name</th>
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Organisation</th>
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7ddaa]">
                {recent.map((s) => (
                  <tr key={s.id} className="hover:bg-[#fff8d8]/50">
                    <td className="px-5 py-3 text-[#526173]">{formatDate(s.submittedAt)}</td>
                    <td className="px-5 py-3 font-semibold text-[#071b3a]">{s.firstName} {s.lastName}</td>
                    <td className="px-5 py-3 text-[#526173]">{s.organization || '—'}</td>
                    <td className="px-5 py-3 text-[#526173]">{s.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
