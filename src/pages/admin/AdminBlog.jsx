import { useEffect, useState } from 'react'

const BLOG_KEY = 'ludik_blog_posts'

const emptyForm = {
  title: '',
  category: 'Industry Insight',
  excerpt: '',
  content: '',
  date: new Date().toISOString().split('T')[0],
  author: 'Ludik Energy Team',
  imageUrl: '',
}

const categories = ['Industry Insight', 'Company News', 'Project Update', 'Safety & Compliance', 'Technology', 'Sustainability']

function getPosts() {
  try {
    return JSON.parse(localStorage.getItem(BLOG_KEY) || '[]')
  } catch {
    return []
  }
}

function savePosts(list) {
  localStorage.setItem(BLOG_KEY, JSON.stringify(list))
}

function formatDate(str) {
  return new Date(str).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

const AdminBlog = () => {
  const [posts, setPosts] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  useEffect(() => {
    setPosts(getPosts())
  }, [])

  const openCreate = () => {
    setEditTarget(null)
    setForm(emptyForm)
    setShowModal(true)
  }

  const openEdit = (post) => {
    setEditTarget(post.id)
    setForm({
      title: post.title,
      category: post.category,
      excerpt: post.excerpt,
      content: post.content,
      date: post.date,
      author: post.author,
      imageUrl: post.imageUrl || '',
    })
    setShowModal(true)
  }

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSave = (e) => {
    e.preventDefault()
    let updated
    if (editTarget) {
      updated = posts.map((p) => p.id === editTarget ? { ...p, ...form } : p)
    } else {
      updated = [{ ...form, id: Date.now().toString() }, ...posts]
    }
    setPosts(updated)
    savePosts(updated)
    setShowModal(false)
  }

  const handleDelete = (id) => {
    const updated = posts.filter((p) => p.id !== id)
    setPosts(updated)
    savePosts(updated)
    setDeleteConfirm(null)
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-[#071b3a]">Blog Posts</h1>
          <p className="mt-1 text-sm text-[#526173]">{posts.length} post{posts.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 rounded-lg bg-[#071b3a] px-4 py-2.5 text-sm font-bold text-[#fff8d8] hover:bg-[#0e2f5a]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          New Post
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="mt-6 rounded-lg border border-[#e7ddaa] bg-white p-16 text-center">
          <p className="text-[#526173]">No blog posts yet.</p>
          <button onClick={openCreate} className="mt-3 text-sm font-bold text-[#071b3a] underline underline-offset-2">Create first post</button>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col overflow-hidden rounded-lg border border-[#e7ddaa] bg-white shadow-sm"
            >
              {post.imageUrl && (
                <img src={post.imageUrl} alt={post.title} className="h-36 w-full object-cover" />
              )}
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-2 inline-block rounded-md bg-[#f4d35e]/25 px-2 py-0.5 text-xs font-bold text-[#071b3a]">
                  {post.category}
                </span>
                <h3 className="text-base font-extrabold leading-snug text-[#071b3a]">{post.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-6 text-[#526173] line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between border-t border-[#e7ddaa] pt-3">
                  <p className="text-xs text-[#526173]">{formatDate(post.date)}</p>
                  <div className="flex gap-3">
                    <button onClick={() => openEdit(post)} className="text-xs font-bold text-[#071b3a] underline underline-offset-2">Edit</button>
                    <button onClick={() => setDeleteConfirm(post.id)} className="text-xs font-bold text-red-500 underline underline-offset-2">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e7ddaa] px-6 py-4 sticky top-0 bg-white z-10">
              <h3 className="text-lg font-extrabold text-[#071b3a]">
                {editTarget ? 'Edit Post' : 'New Post'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-[#526173] hover:text-[#071b3a]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Title *</label>
                <input name="title" required value={form.title} onChange={handleChange}
                  className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]"
                  placeholder="Article title" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Category</label>
                  <select name="category" value={form.category} onChange={handleChange}
                    className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]">
                    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Date</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange}
                    className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Author</label>
                  <input name="author" value={form.author} onChange={handleChange}
                    className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]"
                    placeholder="Author name" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Image URL</label>
                <input name="imageUrl" value={form.imageUrl} onChange={handleChange}
                  className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]"
                  placeholder="https://..." />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Excerpt *</label>
                <textarea name="excerpt" required rows={2} value={form.excerpt} onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]"
                  placeholder="Brief summary shown in card view..." />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Full Content *</label>
                <textarea name="content" required rows={8} value={form.content} onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-3 py-2 text-sm text-[#071b3a] outline-none focus:border-[#071b3a]"
                  placeholder="Full article text..." />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowModal(false)}
                  className="rounded-lg border border-[#e7ddaa] px-4 py-2 text-sm font-bold text-[#526173] hover:bg-[#fff8d8]">
                  Cancel
                </button>
                <button type="submit"
                  className="rounded-lg bg-[#071b3a] px-4 py-2 text-sm font-bold text-[#fff8d8] hover:bg-[#0e2f5a]">
                  {editTarget ? 'Save changes' : 'Publish post'}
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
            <h3 className="text-lg font-extrabold text-[#071b3a]">Delete Post</h3>
            <p className="mt-2 text-sm text-[#526173]">Are you sure you want to delete this blog post? This cannot be undone.</p>
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

export default AdminBlog
