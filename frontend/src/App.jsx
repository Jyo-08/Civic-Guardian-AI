import { useState, useEffect } from "react"

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  return (
    
    <div className="min-h-screen bg-slate-950 text-white flex">
      <aside className="w-64 bg-slate-900 border-r border-cyan-500/20 p-6">
        <h1 className="text-2xl font-bold text-cyan-400">CivicGuardian</h1>
        <p className="text-sm text-slate-400 mt-1">AI Command Center</p>

        <nav className="mt-10 space-y-4">
          <p className="text-cyan-400">🏙 Dashboard</p>
          <p className="text-slate-300">♻️ WasteVision</p>
          <p className="text-slate-300">💧 WaterGuardian</p>
          <p className="text-slate-300">🚶 SafeRoute</p>
          <p className="text-slate-300">📊 Analytics</p>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h2 className="text-4xl font-bold">Smart City Command Center</h2>
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
            <h3 className="text-xl font-semibold text-cyan-400">City Risk Map</h3>
            <div className="h-full flex items-center justify-center text-slate-500">
              Map integration coming soon
            </div>
          </section>

          <section className="rounded-2xl bg-slate-900 border border-cyan-500/20 p-6">
            <h3 className="text-xl font-semibold text-cyan-400">Live Alerts</h3>
            <div className="mt-6 space-y-4 text-sm">
              <Alert color="red" text="High garbage accumulation near Zone 4" />
              <Alert color="yellow" text="Moderate flood risk near Main Road" />
              <Alert color="green" text="SafeRoute active for Night Mode" />
            </div>
          </section>
        </div>
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