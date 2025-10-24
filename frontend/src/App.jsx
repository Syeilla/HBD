import { useState } from 'react'
import Header from './components/header'
import WishForm from './components/WishForm'
import Wishlist from './components/Wishlist'

function App() {
  const [wishes, setWishes] = useState([])

  const addWish = (wish) => setWishes([...wishes, wish])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <h1 className="text-4xl font-extrabold text-center text-pink-500 mb-8 tracking-wide">
          🎁 Tambahkan Wishlist Ulang Tahun 🎁
        </h1>
        <WishForm addWish={addWish} />
        <Wishlist wishes={wishes} />
      </main>

      <br />
      <br />
      
      <div>
        <footer className="text-center p-4 bg-gray-800 text-white mt-8">
          &copy; 2025 My Bro's Birthday Wishlist. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default App
