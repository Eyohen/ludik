import { useEffect, useState } from 'react'

const SUBMISSIONS_KEY = 'ludik_submissions'

function getSubmissions() {
  try {
    return JSON.parse(localStorage.getItem(SUBMISSIONS_KEY) || '[]')
  } catch {
    return []
  }
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const AdminSubmissions = () => {
  const [submissions, setSubmissions] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    setSubmissions(getSubmissions())
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-[#071b3a]">Contact Submissions</h1>
          <p className="mt-1 text-sm text-[#526173]">{submissions.length} total submission{submissions.length !== 1 ? 's' : ''}</p>
        </div>
      </div>

      {submissions.length === 0 ? (
        <div className="mt-6 rounded-lg border border-[#e7ddaa] bg-white p-16 text-center">
          <svg className="mx-auto mb-4 text-[#e7ddaa]" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <p className="text-[#526173]">No submissions yet.</p>
          <p className="mt-1 text-sm text-[#526173]/70">Submissions from the contact form will appear here.</p>
        </div>
      ) : (
        <div className="mt-6 overflow-hidden rounded-lg border border-[#e7ddaa] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e7ddaa] bg-[#fff8d8]">
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Date</th>
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Name</th>
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Organisation</th>
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Email</th>
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Phone</th>
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7ddaa]">
                {submissions.map((s) => (
                  <tr key={s.id} className="hover:bg-[#fff8d8]/50">
                    <td className="whitespace-nowrap px-5 py-3 text-[#526173]">{formatDate(s.submittedAt)}</td>
                    <td className="px-5 py-3 font-semibold text-[#071b3a]">{s.firstName} {s.lastName}</td>
                    <td className="px-5 py-3 text-[#526173]">{s.organization || '—'}</td>
                    <td className="px-5 py-3 text-[#526173]">
                      <a href={`mailto:${s.email}`} className="text-[#0e2f5a] hover:underline">{s.email}</a>
                    </td>
                    <td className="px-5 py-3 text-[#526173]">
                      {s.phone ? <a href={`tel:${s.phone}`} className="hover:underline">{s.phone}</a> : '—'}
                    </td>
                    <td className="px-5 py-3">
                      <button
                        onClick={() => setSelected(s)}
                        className="text-xs font-bold text-[#071b3a] underline underline-offset-2 hover:text-[#0e2f5a]"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-lg bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e7ddaa] px-6 py-4">
              <h3 className="text-lg font-extrabold text-[#071b3a]">Submission Detail</h3>
              <button onClick={() => setSelected(null)} className="text-[#526173] hover:text-[#071b3a]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="space-y-4 p-6">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-bold uppercase text-[#526173]">First Name</p>
                  <p className="mt-1 font-semibold text-[#071b3a]">{selected.firstName}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-[#526173]">Last Name</p>
                  <p className="mt-1 font-semibold text-[#071b3a]">{selected.lastName}</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-[#526173]">Organisation</p>
                <p className="mt-1 text-[#071b3a]">{selected.organization || '—'}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-[#526173]">Email</p>
                <p className="mt-1 text-[#071b3a]">{selected.email}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-[#526173]">Phone</p>
                <p className="mt-1 text-[#071b3a]">{selected.phone || '—'}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-[#526173]">Message</p>
                <p className="mt-1 whitespace-pre-wrap text-sm leading-7 text-[#526173]">{selected.message}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-[#526173]">Submitted</p>
                <p className="mt-1 text-sm text-[#526173]">{formatDate(selected.submittedAt)}</p>
              </div>
            </div>
            <div className="flex justify-end gap-3 border-t border-[#e7ddaa] px-6 py-4">
              <a
                href={`mailto:${selected.email}`}
                className="rounded-lg bg-[#071b3a] px-4 py-2 text-sm font-bold text-[#fff8d8] hover:bg-[#0e2f5a]"
              >
                Reply by email
              </a>
              <button
                onClick={() => setSelected(null)}
                className="rounded-lg border border-[#e7ddaa] px-4 py-2 text-sm font-bold text-[#526173] hover:bg-[#fff8d8]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminSubmissions
