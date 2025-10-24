import { useState } from 'react'

export default function WishForm({ addWish }) {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    addWish({ name, desc })
    setName('')
    setDesc('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-xl flex flex-col sm:flex-row gap-4 items-center"
    >
      <input
        type="text"
        placeholder="Nama Kamu"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
      />
      <input
        type="text"
        placeholder="Ucapan Kamu"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="flex-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-pink-600 transition-colors"
      >
        Tambah
      </button>
    </form>
  )
}
