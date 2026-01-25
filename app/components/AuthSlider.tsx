"use client"

import { useState } from "react"
import { useFormik } from "formik"
import { loginSchema } from "../validation/loginSchema"
import { signupSchema } from "../validation/signupSchema"

export default function AuthSlider() {
  const [isSignup, setIsSignup] = useState(false)

  const loginForm = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values) => console.log("Login:", values),
  })

  const signupForm = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: signupSchema,
    onSubmit: (values) => console.log("Signup:", values),
  })

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-800 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Racing Stripes Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

      <div className="relative w-full max-w-6xl z-10">
        
        {/* Main Container */}
        <div className="relative h-[650px] bg-gradient-to-br from-zinc-900 to-black rounded-2xl shadow-2xl overflow-hidden border border-red-900/30">
          
          {/* Top Racing Stripe */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-white to-red-600 z-20"></div>
          
          {/* SLIDER CONTAINER */}
          <div
            className={`relative h-full flex transition-transform duration-700 ease-in-out ${
              isSignup ? "-translate-x-1/2" : "translate-x-0"
            }`}
            style={{ width: "200%" }}
          >

            {/* ========== LOGIN SECTION ========== */}
            <div className="w-1/2 h-full flex">
              
              {/* Left Side - Form */}
              <div className="w-[45%] bg-gradient-to-br from-zinc-900 to-black px-12 py-16 flex flex-col justify-center relative">
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #ef4444 2px, #ef4444 3px),
                                    repeating-linear-gradient(90deg, transparent, transparent 2px, #ef4444 2px, #ef4444 3px)`,
                  backgroundSize: '40px 40px'
                }}></div>

                <div className="mb-10 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/50">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <h1 className="text-4xl font-black text-white tracking-tighter">
                      RACE<span className="text-red-600">HUB</span>
                    </h1>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Welcome Back</h2>
                  <p className="text-gray-400 text-sm font-medium">Access your racing dashboard</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-transparent mt-3 rounded-full"></div>
                </div>

                <form onSubmit={loginForm.handleSubmit} className="space-y-6 relative z-10">
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-300 mb-2.5 uppercase tracking-widest">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        name="email"
                        type="email"
                        placeholder="your.email@racing.com"
                        onChange={loginForm.handleChange}
                        onBlur={loginForm.handleBlur}
                        value={loginForm.values.email}
                        className="w-full px-5 py-3.5 bg-zinc-800/50 border-2 border-zinc-700/50 rounded-xl focus:border-red-600 focus:bg-zinc-800 focus:ring-2 focus:ring-red-600/20 transition-all outline-none text-white placeholder-gray-500 font-medium backdrop-blur-sm"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                    {loginForm.errors.email && loginForm.touched.email && (
                      <p className="text-red-500 text-xs mt-2.5 font-semibold flex items-center gap-1">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {loginForm.errors.email}
                      </p>
                    )}
                  </div>

                  <div className="group">
                    <label className="block text-xs font-bold text-gray-300 mb-2.5 uppercase tracking-widest">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        name="password"
                        type="password"
                        placeholder="••••••••••"
                        onChange={loginForm.handleChange}
                        onBlur={loginForm.handleBlur}
                        value={loginForm.values.password}
                        className="w-full px-5 py-3.5 bg-zinc-800/50 border-2 border-zinc-700/50 rounded-xl focus:border-red-600 focus:bg-zinc-800 focus:ring-2 focus:ring-red-600/20 transition-all outline-none text-white placeholder-gray-500 font-medium backdrop-blur-sm"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                    {loginForm.errors.password && loginForm.touched.password && (
                      <p className="text-red-500 text-xs mt-2.5 font-semibold flex items-center gap-1">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {loginForm.errors.password}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <label className="flex items-center cursor-pointer group/check">
                      <input type="checkbox" className="w-4 h-4 rounded border-zinc-600 bg-zinc-800 text-red-600 focus:ring-red-600 focus:ring-offset-zinc-900" />
                      <span className="ml-2.5 text-gray-400 font-medium group-hover/check:text-gray-300 transition-colors">Remember me</span>
                    </label>
                    <button type="button" className="text-red-500 font-bold hover:text-red-400 transition-colors relative group/forgot">
                      Forgot Password?
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover/forgot:w-full transition-all duration-300"></span>
                    </button>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/50 hover:from-red-700 hover:via-red-800 hover:to-red-700 active:scale-[0.98] transition-all duration-300 text-sm relative overflow-hidden group/btn mt-8"
                  >
                    <span className="relative z-10">Access Paddock</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                  </button>

                  <div className="text-center pt-6">
                    <p className="text-sm text-gray-400 font-medium">
                      New to the grid?{" "}
                      <button
                        type="button"
                        className="text-red-500 font-bold hover:text-red-400 transition-colors relative group/join"
                        onClick={() => setIsSignup(true)}
                      >
                        Join Now
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover/join:w-full transition-all duration-300"></span>
                      </button>
                    </p>
                  </div>
                </form>
              </div>

              {/* Right Side - F1 Background */}
              <div className="w-[55%] relative overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                <img 
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1SwHPq.img?w=768&h=432&m=6"
                  alt="F1 Car"
                  className="w-full h-full object-cover opacity-90"
                />
                {/* Speed Lines Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10"></div>
                <div className="absolute bottom-10 left-10 z-20">
                  <h3 className="text-white text-4xl font-black tracking-tighter mb-2">MAXIMUM<br/>VELOCITY</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-0.5 bg-red-600"></div>
                    <p className="text-gray-300 text-sm font-bold">EXPERIENCE RACING</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== SIGNUP SECTION ========== */}
            <div className="w-1/2 h-full flex">
              
              {/* Left Side - Form */}
              <div className="w-[45%] bg-gradient-to-br from-zinc-900 to-black px-12 py-16 flex flex-col justify-center relative">
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #ef4444 2px, #ef4444 3px),
                                    repeating-linear-gradient(90deg, transparent, transparent 2px, #ef4444 2px, #ef4444 3px)`,
                  backgroundSize: '40px 40px'
                }}></div>

                <div className="mb-8 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/50">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <h1 className="text-4xl font-black text-white tracking-tighter">
                      RACE<span className="text-red-600">HUB</span>
                    </h1>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Join the Grid</h2>
                  <p className="text-gray-400 text-sm font-medium">Create your racing profile</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-transparent mt-3 rounded-full"></div>
                </div>

                <form onSubmit={signupForm.handleSubmit} className="space-y-5 relative z-10">
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-300 mb-2.5 uppercase tracking-widest">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        name="name"
                        placeholder="Max Verstappen"
                        onChange={signupForm.handleChange}
                        onBlur={signupForm.handleBlur}
                        value={signupForm.values.name}
                        className="w-full px-5 py-3.5 bg-zinc-800/50 border-2 border-zinc-700/50 rounded-xl focus:border-red-600 focus:bg-zinc-800 focus:ring-2 focus:ring-red-600/20 transition-all outline-none text-white placeholder-gray-500 font-medium backdrop-blur-sm"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                    {signupForm.errors.name && signupForm.touched.name && (
                      <p className="text-red-500 text-xs mt-2.5 font-semibold flex items-center gap-1">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {signupForm.errors.name}
                      </p>
                    )}
                  </div>

                  <div className="group">
                    <label className="block text-xs font-bold text-gray-300 mb-2.5 uppercase tracking-widest">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        name="email"
                        type="email"
                        placeholder="driver@f1racing.com"
                        onChange={signupForm.handleChange}
                        onBlur={signupForm.handleBlur}
                        value={signupForm.values.email}
                        className="w-full px-5 py-3.5 bg-zinc-800/50 border-2 border-zinc-700/50 rounded-xl focus:border-red-600 focus:bg-zinc-800 focus:ring-2 focus:ring-red-600/20 transition-all outline-none text-white placeholder-gray-500 font-medium backdrop-blur-sm"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                    {signupForm.errors.email && signupForm.touched.email && (
                      <p className="text-red-500 text-xs mt-2.5 font-semibold flex items-center gap-1">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {signupForm.errors.email}
                      </p>
                    )}
                  </div>

                  <div className="group">
                    <label className="block text-xs font-bold text-gray-300 mb-2.5 uppercase tracking-widest">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        name="password"
                        type="password"
                        placeholder="••••••••••"
                        onChange={signupForm.handleChange}
                        onBlur={signupForm.handleBlur}
                        value={signupForm.values.password}
                        className="w-full px-5 py-3.5 bg-zinc-800/50 border-2 border-zinc-700/50 rounded-xl focus:border-red-600 focus:bg-zinc-800 focus:ring-2 focus:ring-red-600/20 transition-all outline-none text-white placeholder-gray-500 font-medium backdrop-blur-sm"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                    {signupForm.errors.password && signupForm.touched.password && (
                      <p className="text-red-500 text-xs mt-2.5 font-semibold flex items-center gap-1">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {signupForm.errors.password}
                      </p>
                    )}
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/50 hover:from-red-700 hover:via-red-800 hover:to-red-700 active:scale-[0.98] transition-all duration-300 text-sm relative overflow-hidden group/btn mt-8"
                  >
                    <span className="relative z-10">Start Your Journey</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                  </button>

                  <div className="text-center pt-6">
                    <p className="text-sm text-gray-400 font-medium">
                      Already a member?{" "}
                      <button
                        type="button"
                        className="text-red-500 font-bold hover:text-red-400 transition-colors relative group/signin"
                        onClick={() => setIsSignup(false)}
                      >
                        Sign In
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover/signin:w-full transition-all duration-300"></span>
                      </button>
                    </p>
                  </div>
                </form>
              </div>

              {/* Right Side - F1 Background */}
              <div className="w-[55%] relative overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                <img 
                  src="https://destinationformula1.com/wp-content/uploads/2025/12/F1-2026-Car-Renders.jpg"
                  alt="F1 Car"
                  className="w-full h-full object-cover opacity-90"
                />
                {/* Speed Lines Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10"></div>
                <div className="absolute bottom-10 left-10 z-20">
                  <h3 className="text-white text-4xl font-black tracking-tighter mb-2">NEXT<br/>GENERATION</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-0.5 bg-red-600"></div>
                    <p className="text-gray-300 text-sm font-bold">2026 REGULATIONS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}