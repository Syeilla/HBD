export default function Wishlist({ wishes }) {
  if (!wishes.length)
    return <p className="text-center text-gray-500 mt-6 text-lg">Belum ada wishlist. Tambahkan hadiahmu!</p>

  return (
    <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {wishes.map((wish, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-6 rounded-3xl shadow-2xl hover:scale-105 transform transition-transform cursor-pointer"
        >
          <h2 className="text-xl font-bold text-pink-600 mb-2">{wish.name}</h2>
          <p className="text-gray-700">{wish.desc}</p>
        </div>
      ))}
    </div>
  )
}
