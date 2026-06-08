import { useEffect, useState } from 'react'
import { getTeam, saveTeam } from '../../data/team'

const emptyForm = { name: '', title: '', bio: '', imageUrl: '' }

const AdminTeam = () => {
  const [members, setMembers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [deleteConfirm, setDeleteConfirm] = useState(null)

  useEffect(() => {
    setMembers(getTeam())
  }, [])

  const openCreate = () => {
    setEditTarget(null)
    setForm(emptyForm)
    setShowModal(true)
  }

  const openEdit = (m) => {
    setEditTarget(m.id)
    setForm({ name: m.name, title: m.title, bio: m.bio, imageUrl: m.imageUrl || '' })
    setShowModal(true)
  }

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSave = (e) => {
    e.preventDefault()
    let updated
    if (editTarget) {
      updated = members.map((m) => m.id === editTarget ? { ...m, ...form } : m)
    } else {
      updated = [...members, { ...form, id: Date.now().toString() }]
    }
    setMembers(updated)
    saveTeam(updated)
    setShowModal(false)
  }

  const handleDelete = (id) => {
    const updated = members.filter((m) => m.id !== id)
    setMembers(updated)
    saveTeam(updated)
    setDeleteConfirm(null)
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-[#071b3a]">Team Members</h1>
          <p className="mt-1 text-sm text-[#526173]">{members.length} member{members.length !== 1 ? 's' : ''} — shown on the public Team page</p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 rounded-lg bg-[#071b3a] px-4 py-2.5 text-sm font-bold text-[#fff8d8] hover:bg-[#0e2f5a]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add Member
        </button>
      </div>

      {members.length === 0 ? (
        <div className="mt-6 rounded-lg border border-[#e7ddaa] bg-white p-16 text-center">
          <p className="text-[#526173]">No team members yet.</p>
          <button onClick={openCreate} className="mt-3 text-sm font-bold text-[#071b3a] underline underline-offset-2">Add first member</button>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {members.map((m) => (
            <div key={m.id} className="overflow-hidden rounded-lg border border-[#e7ddaa] bg-white shadow-sm">
              <div className="h-44 overflow-hidden bg-[#0e2f5a]/10">
                {m.imageUrl ? (
                  <img src={m.imageUrl} alt={m.name} className="h-full w-full object-cover object-top" />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-5xl font-extrabold text-[#071b3a]/20">{m.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-[#071b3a]">{m.name}</h3>
                <p className="text-sm font-bold text-[#b48f10]">{m.title}</p>
                {m.bio && <p className="mt-2 whitespace-pre-line text-sm leading-6 text-[#526173] line-clamp-3">{m.bio}</p>}
                {m.credentials?.length > 0 && (
                  <ul className="mt-2 list-disc space-y-0.5 pl-5 text-sm leading-6 text-[#526173]">
                    {m.credentials.map((credential) => (
                      <li key={credential}>{credential}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 flex gap-3 border-t border-[#e7ddaa] pt-3">
                  <button onClick={() => openEdit(m)} className="text-xs font-bold text-[#071b3a] underline underline-offset-2">Edit</button>
                  <button onClick={() => setDeleteConfirm(m.id)} className="text-xs font-bold text-red-500 underline underline-offset-2">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-lg bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e7ddaa] px-6 py-4">
              <h3 className="text-lg font-extrabold text-[#071b3a]">
                {editTarget ? 'Edit Team Member' : 'Add Team Member'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-[#526173] hover:text-[#071b3a]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Full Name *</label>
                <input name="name" required value={form.name} onChange={handleChange}
                  className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]"
                  placeholder="Engr. Jane Obi" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Job Title / Role *</label>
                <input name="title" required value={form.title} onChange={handleChange}
                  className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]"
                  placeholder="Chief Operating Officer" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Photo URL</label>
                <input name="imageUrl" value={form.imageUrl} onChange={handleChange}
                  className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]"
                  placeholder="https://..." />
                {form.imageUrl && (
                  <img src={form.imageUrl} alt="preview" className="mt-2 h-20 w-20 rounded-lg object-cover object-top" />
                )}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Bio</label>
                <textarea name="bio" rows={4} value={form.bio} onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]"
                  placeholder="Brief professional biography..." />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowModal(false)}
                  className="rounded-lg border border-[#e7ddaa] px-4 py-2 text-sm font-bold text-[#526173] hover:bg-[#fff8d8]">
                  Cancel
                </button>
                <button type="submit"
                  className="rounded-lg bg-[#071b3a] px-4 py-2 text-sm font-bold text-[#fff8d8] hover:bg-[#0e2f5a]">
                  {editTarget ? 'Save changes' : 'Add member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-2xl">
            <h3 className="text-lg font-extrabold text-[#071b3a]">Remove Team Member</h3>
            <p className="mt-2 text-sm text-[#526173]">This will remove the member from the public Team page. This cannot be undone.</p>
            <div className="mt-5 flex justify-end gap-3">
              <button onClick={() => setDeleteConfirm(null)}
                className="rounded-lg border border-[#e7ddaa] px-4 py-2 text-sm font-bold text-[#526173] hover:bg-[#fff8d8]">
                Cancel
              </button>
              <button onClick={() => handleDelete(deleteConfirm)}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700">
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminTeam
