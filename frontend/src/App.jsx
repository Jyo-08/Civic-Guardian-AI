import { useState, useEffect } from "react"
import WasteVision from "./components/WasteVision"
import WaterGuardian from "./components/WaterGuardian"
import SafeRoute from "./components/SafeRoute"

function App() {
  const [time, setTime] = useState(new Date())
  const [page, setPage] = useState("dashboard")

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  return (
    
    <div className="min-h-screen bg-slate-950 text-white flex">
      <aside className="w-64 bg-slate-900 border-r border-cyan-500/20 p-6">
       <h1
  onClick={() => setPage("dashboard")}
  className="text-2xl font-bold text-cyan-400 cursor-pointer"
>
  CivicGuardian
</h1>
        <p className="text-sm text-slate-400 mt-1">AI Command Center</p>

        <nav className="mt-10 space-y-3">
  <button
    onClick={() => setPage("dashboard")}
    className={`w-full text-left px-4 py-3 rounded-full transition-all duration-300 cursor-pointer
      ${
        page === "dashboard"
          ? "bg-cyan-500/20 text-cyan-400"
          : "text-slate-300 hover:bg-slate-800 hover:text-cyan-300"
      }`}
  >
    🏙 Dashboard
  </button>

  <button
    onClick={() => setPage("wastevision")}
    className={`w-full text-left px-4 py-3 rounded-full transition-all duration-300 cursor-pointer
      ${
        page === "wastevision"
          ? "bg-cyan-500/20 text-cyan-400"
          : "text-slate-300 hover:bg-slate-800 hover:text-cyan-300"
      }`}
  >
    ♻️ WasteVision
  </button>

  <button
  onClick={() => setPage("waterguardian")}
  className={`w-full text-left px-4 py-3 rounded-full transition-all duration-300 cursor-pointer
    ${
      page === "waterguardian"
        ? "bg-cyan-500/20 text-cyan-400"
        : "text-slate-300 hover:bg-slate-800 hover:text-cyan-300"
    }`}
>
  💧 WaterGuardian
</button>

  <button
  onClick={() => setPage("saferoute")}
  className={`w-full text-left px-4 py-3 rounded-full transition-all duration-300 cursor-pointer
    ${
      page === "saferoute"
        ? "bg-cyan-500/20 text-cyan-400"
        : "text-slate-300 hover:bg-slate-800 hover:text-cyan-300"
    }`}
>
  🚶 SafeRoute
</button>

  <button className="w-full text-left px-4 py-3 rounded-full text-slate-300 hover:bg-slate-800 hover:text-cyan-300 transition-all duration-300 cursor-pointer">
    📊 Analytics
  </button>
</nav>
      </aside>

      <main className="flex-1 p-8">

  {page === "dashboard" && (
    <>
      <h2 className="text-4xl font-bold">
        Smart City Command Center
      </h2>

      <p className="text-cyan-400 mt-2">
        Live Monitoring • {time.toLocaleTimeString()}
      </p>

      <p className="text-slate-400 mt-2">
        Monitoring safer, cleaner and flood-resilient cities using AI.
      </p>

      <div className="grid grid-cols-4 gap-6 mt-8">
        <Card title="Waste Alerts" value="24" />
        <Card title="Flood Risk Zones" value="7" />
        <Card title="Unsafe Roads" value="12" />
        <Card title="Civic Score" value="82%" />
      </div>

      <div className="mt-8 grid grid-cols-3 gap-6">
        <section className="col-span-2 h-96 rounded-2xl bg-slate-900 border border-cyan-500/20 p-6">
          <h3 className="text-xl font-semibold text-cyan-400">
            City Risk Map
          </h3>

          <div className="h-full flex items-center justify-center text-slate-500">
            Map integration coming soon
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900 border border-cyan-500/20 p-6">
          <h3 className="text-xl font-semibold text-cyan-400">
            Live Alerts
          </h3>

          <div className="mt-6 space-y-4 text-sm">
            <Alert color="red" text="High garbage accumulation near Zone 4" />
            <Alert color="yellow" text="Moderate flood risk near Main Road" />
            <Alert color="green" text="SafeRoute active for Night Mode" />
          </div>
        </section>
      </div>
    </>
  )}

  {page === "wastevision" && <WasteVision />}
  {page === "waterguardian" && <WaterGuardian />}
  {page === "saferoute" && <SafeRoute />}

</main>
    </div>
  )
}

function Card({ title, value }) {
  return (
    <div className="rounded-2xl bg-slate-900 border border-cyan-500/20 p-6 shadow-lg">
      <p className="text-slate-400 text-sm">{title}</p>
      <h3 className="text-3xl font-bold mt-3 text-cyan-400">{value}</h3>
    </div>
  )
}


function Alert({ color, text }) {
  const colors = {
    red: "bg-red-500",
    yellow: "bg-yellow-400",
    green: "bg-green-500",
  }

  return (
    <div className="flex items-center gap-3">
      <span className={`w-3 h-3 rounded-full ${colors[color]}`}></span>
      <p className="text-slate-300">{text}</p>
    </div>
  )
}

export default App