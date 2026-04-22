import { useEffect, useState } from 'react'

const EMPLOYEES_KEY = 'ludik_employees'

const emptyForm = { name: '', role: '', department: '', email: '', phone: '', startDate: '' }

function getEmployees() {
  try {
    return JSON.parse(localStorage.getItem(EMPLOYEES_KEY) || '[]')
  } catch {
    return []
  }
}

function saveEmployees(list) {
  localStorage.setItem(EMPLOYEES_KEY, JSON.stringify(list))
}

const departments = [
  'Engineering', 'Operations', 'Project Management', 'HSE', 'Procurement',
  'Finance', 'Human Resources', 'Business Development', 'Administration', 'Other',
]

const AdminEmployees = () => {
  const [employees, setEmployees] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [deleteConfirm, setDeleteConfirm] = useState(null)

  useEffect(() => {
    setEmployees(getEmployees())
  }, [])

  const openCreate = () => {
    setEditTarget(null)
    setForm(emptyForm)
    setShowModal(true)
  }

  const openEdit = (emp) => {
    setEditTarget(emp.id)
    setForm({ name: emp.name, role: emp.role, department: emp.department, email: emp.email, phone: emp.phone, startDate: emp.startDate })
    setShowModal(true)
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    let updated
    if (editTarget) {
      updated = employees.map((emp) => emp.id === editTarget ? { ...emp, ...form } : emp)
    } else {
      updated = [{ ...form, id: Date.now().toString() }, ...employees]
    }
    setEmployees(updated)
    saveEmployees(updated)
    setShowModal(false)
  }

  const handleDelete = (id) => {
    const updated = employees.filter((emp) => emp.id !== id)
    setEmployees(updated)
    saveEmployees(updated)
    setDeleteConfirm(null)
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-[#071b3a]">Employees</h1>
          <p className="mt-1 text-sm text-[#526173]">{employees.length} employee{employees.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 rounded-lg bg-[#071b3a] px-4 py-2.5 text-sm font-bold text-[#fff8d8] hover:bg-[#0e2f5a]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add Employee
        </button>
      </div>

      {employees.length === 0 ? (
        <div className="mt-6 rounded-lg border border-[#e7ddaa] bg-white p-16 text-center">
          <p className="text-[#526173]">No employees added yet.</p>
          <button onClick={openCreate} className="mt-3 text-sm font-bold text-[#071b3a] underline underline-offset-2">Add your first employee</button>
        </div>
      ) : (
        <div className="mt-6 overflow-hidden rounded-lg border border-[#e7ddaa] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e7ddaa] bg-[#fff8d8]">
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Name</th>
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Role</th>
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Department</th>
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Email</th>
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Phone</th>
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Start Date</th>
                  <th className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-[#526173]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7ddaa]">
                {employees.map((emp) => (
                  <tr key={emp.id} className="hover:bg-[#fff8d8]/50">
                    <td className="px-5 py-3 font-semibold text-[#071b3a]">{emp.name}</td>
                    <td className="px-5 py-3 text-[#526173]">{emp.role}</td>
                    <td className="px-5 py-3 text-[#526173]">{emp.department}</td>
                    <td className="px-5 py-3 text-[#526173]">{emp.email || '—'}</td>
                    <td className="px-5 py-3 text-[#526173]">{emp.phone || '—'}</td>
                    <td className="px-5 py-3 text-[#526173]">{emp.startDate || '—'}</td>
                    <td className="px-5 py-3">
                      <div className="flex gap-3">
                        <button
                          onClick={() => openEdit(emp)}
                          className="text-xs font-bold text-[#071b3a] underline underline-offset-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(emp.id)}
                          className="text-xs font-bold text-red-500 underline underline-offset-2"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Create/Edit modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-lg bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e7ddaa] px-6 py-4">
              <h3 className="text-lg font-extrabold text-[#071b3a]">
                {editTarget ? 'Edit Employee' : 'Add Employee'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-[#526173] hover:text-[#071b3a]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSave} className="p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Full Name *</label>
                  <input name="name" required value={form.name} onChange={handleChange}
                    className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]"
                    placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Role / Job Title *</label>
                  <input name="role" required value={form.role} onChange={handleChange}
                    className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]"
                    placeholder="Senior Engineer" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Department</label>
                  <select name="department" value={form.department} onChange={handleChange}
                    className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]">
                    <option value="">Select department</option>
                    {departments.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Start Date</label>
                  <input type="date" name="startDate" value={form.startDate} onChange={handleChange}
                    className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]"
                    placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]"
                    placeholder="+234 800 000 0000" />
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button type="button" onClick={() => setShowModal(false)}
                  className="rounded-lg border border-[#e7ddaa] px-4 py-2 text-sm font-bold text-[#526173] hover:bg-[#fff8d8]">
                  Cancel
                </button>
                <button type="submit"
                  className="rounded-lg bg-[#071b3a] px-4 py-2 text-sm font-bold text-[#fff8d8] hover:bg-[#0e2f5a]">
                  {editTarget ? 'Save changes' : 'Add employee'}
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
            <h3 className="text-lg font-extrabold text-[#071b3a]">Delete Employee</h3>
            <p className="mt-2 text-sm text-[#526173]">Are you sure you want to delete this employee? This action cannot be undone.</p>
            <div className="mt-5 flex justify-end gap-3">
              <button onClick={() => setDeleteConfirm(null)}
                className="rounded-lg border border-[#e7ddaa] px-4 py-2 text-sm font-bold text-[#526173] hover:bg-[#fff8d8]">
                Cancel
              </button>
              <button onClick={() => handleDelete(deleteConfirm)}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminEmployees
