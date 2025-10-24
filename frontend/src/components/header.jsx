export default function Header() {
  const navItems = ['Home', 'Profile', 'Wishlist']

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold tracking-wider">🎉 Birthday Wishlist</div>

        {/* Navbar */}
        <div className="flex gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-lg font-medium hover:text-yellow-200 transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
