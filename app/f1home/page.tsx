"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Image from "next/image"

export default function F1Homepage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/auth/me")
        setUser(response.data.user)
      } catch (error) {
        console.error("Failed to fetch user:", error)
        router.push("/auth")
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [router])

  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout")
      router.push("/auth")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  const f1Cars = [
    {
      id: 1,
      model: "Red Bull RB19",
      year: "2023",
      team: "Red Bull Racing",
      image: "https://www.amalgamcollection.com/cdn/shop/files/DSCF6360WIDEEDIT_2000x850_crop_center.jpg?v=1695661338",
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      model: "Ferrari SF-23",
      year: "2023",
      team: "Scuderia Ferrari",
      image: "https://media.formula1.com/image/upload/c_lfill,w_2048/q_auto/v1740000000/content/dam/fom-website/manual/2023/Launches2023/Ferrari2023Launch/Ferrari%20front.webp",
      color: "from-red-600 to-red-800"
    },
    {
      id: 3,
      model: "Mercedes W14",
      year: "2023",
      team: "Mercedes-AMG Petronas",
      image: "https://images.ctfassets.net/1fvlg6xqnm65/3hyYDXrtvItPbGRX0qZZG9/83813a6e7bc9368bca2872ac20af0c2c/MF1_230111_LAUNCH_CAR_PRIME_Studio_MasterRS-Front_Low132143_16x9.png?w=1920&q=75&fm=webp",
      color: "from-cyan-600 to-cyan-800"
    },
    {
      id: 4,
      model: "McLaren MCL60",
      year: "2023",
      team: "McLaren F1 Team",
      image: "https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/legacy/galleries/MCL60_rear_1600_x_900.jpg",
      color: "from-orange-600 to-orange-800"
    },
    {
      id: 5,
      model: "Aston Martin AMR23",
      year: "2023",
      team: "Aston Martin Aramco",
      image: "https://media.formula1.com/image/upload/c_lfill,w_2048/q_auto/v1740000000/content/dam/fom-website/manual/Misc/2023manual/Pre-season/February/AMR/AM23_CAR_2548%20TC%2016x9.webp",
      color: "from-green-600 to-green-800"
    },
    {
      id: 6,
      model: "Alpine A523",
      year: "2023",
      team: "BWT Alpine F1 Team",
      image: "https://cdn-1.motorsport.com/images/mgl/6l9gJnm0/s8/alpine-a523-1.jpg",
      color: "from-pink-600 to-pink-800"
    },
    {
      id: 7,
      model: "Williams FW45",
      year: "2023",
      team: "Williams Racing",
      image: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/manual/2023/Launches2023/WilliamsLaunch2023/FW45%20Livery%20-%20Front%20-%20AA23.webp",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 8,
      model: "Alfa Romeo C43",
      year: "2023",
      team: "Alfa Romeo F1 Team",
      image: "https://www.f1authentics.com/cdn/shop/files/16x9-Hero-C43-MONZA.jpg?crop=center&height=1800&v=1754382471&width=3200",
      color: "from-red-500 to-red-700"
    },
    {
      id: 9,
      model: "Haas VF-23",
      year: "2023",
      team: "MoneyGram Haas F1",
      image: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/manual/2023/Haas/Haas-Mag-1.webp",
      color: "from-gray-600 to-gray-800"
    },
    {
      id: 10,
      model: "AlphaTauri AT04",
      year: "2023",
      team: "Scuderia AlphaTauri",
      image: "https://global.honda/en/F1/machine/2022_AlphaTauriAT03/img/thumb.jpg",
      color: "from-blue-500 to-blue-700"
    }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-800 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-700 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #ef4444 2px, #ef4444 3px),
                          repeating-linear-gradient(90deg, transparent, transparent 2px, #ef4444 2px, #ef4444 3px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent z-10"></div>

      <header className="relative z-20 border-b border-zinc-800/50 backdrop-blur-sm bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/50">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-4xl font-black text-white tracking-tighter">
                  RACE<span className="text-red-600">HUB</span>
                </h1>
                <p className="text-xs text-gray-400 font-bold tracking-widest uppercase">F1 Gallery</p>
              </div>
            </div>

            <nav className="flex items-center gap-8">
              <div className="hidden md:flex items-center gap-6 mr-6 border-r border-zinc-800 pr-6">
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Driver:</span>
                <span className="text-white font-black text-sm uppercase tracking-tight">{user?.name || "Guest"}</span>
              </div>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-zinc-800/50 hover:bg-red-600 border border-zinc-700 hover:border-red-500 rounded-lg text-white font-bold text-xs uppercase tracking-widest transition-all duration-300"
              >
                Logout
              </button>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative z-10 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-500 text-xs font-bold uppercase tracking-widest">
                2023 Season
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
              THE GRID
            </h2>
            <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto">
              Welcome, {user?.name || "Racer"}. Explore the most advanced racing machines in Formula 1 history.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent to-red-600 rounded-full"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <div className="w-20 h-1 bg-gradient-to-l from-transparent to-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {f1Cars.map((car, index) => (
              <div
                key={car.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(car.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative h-[420px] bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden border transition-all duration-500 shadow-xl ${hoveredCard === car.id ? 'border-red-600 shadow-red-600/20 scale-[1.02]' : 'border-zinc-800/50 shadow-2xl'}`}>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${car.color}`}></div>

                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                    <Image
                      src={car.image}
                      alt={car.model}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${car.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="relative p-6 flex flex-col justify-between h-[calc(100%-224px)]">
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 bg-gradient-to-r ${car.color} bg-opacity-20 rounded-full text-xs font-bold uppercase tracking-wide text-white border border-white/10`}>
                        {car.team}
                      </span>
                    </div>

                    <div className="mb-4">
                      <h3 className={`text-2xl font-black mb-1 tracking-tight transition-colors ${hoveredCard === car.id ? 'text-red-500' : 'text-white'}`}>
                        {car.model}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-0.5 bg-gradient-to-r ${car.color} rounded-full`}></div>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                          {car.year}
                        </p>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white font-bold text-sm uppercase tracking-widest hover:bg-zinc-800 hover:border-red-600/50 transition-all duration-300 group/btn relative overflow-hidden">
                      <span className="relative z-10">View Details</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/10 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                    </button>
                  </div>
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${car.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}></div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${car.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500 -z-10 rounded-2xl`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-zinc-800/50 bg-black/30 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/50">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                © 2024 <span className="font-black text-white">RACE<span className="text-red-600">HUB</span></span>. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm font-bold uppercase">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm font-bold uppercase">Terms</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm font-bold uppercase">Contact</a>
            </div>
          </div>
        </div>
      </footer>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent z-10"></div>
    </div>
  )
}
