function Analytics() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-cyan-400">Analytics</h1>

      <p className="text-slate-400 mt-2">
        Civic risk insights across waste, water and route safety.
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <AnalyticsCard
          title="Waste Risk Trend"
          value="High"
          detail="24 reports this week"
        />

        <AnalyticsCard
          title="Flood Risk Trend"
          value="Moderate"
          detail="7 zones under watch"
        />

        <AnalyticsCard
          title="Route Safety Trend"
          value="Stable"
          detail="12 unsafe roads detected"
        />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">
        <section className="rounded-3xl bg-slate-900 border border-cyan-500/20 p-6">
          <h2 className="text-xl font-semibold text-cyan-400">
            Civic Risk Summary
          </h2>

          <div className="mt-6 space-y-4">
            <RiskBar label="Waste Risk" value="80%" />
            <RiskBar label="Flood Risk" value="55%" />
            <RiskBar label="Route Risk" value="42%" />
          </div>
        </section>

        <section className="rounded-3xl bg-slate-900 border border-cyan-500/20 p-6">
          <h2 className="text-xl font-semibold text-cyan-400">
            AI Insights
          </h2>

          <ul className="mt-6 space-y-4 text-slate-300">
            <li>♻️ Waste accumulation is highest in Zone 4.</li>
            <li>💧 Flood risk may increase if rainfall exceeds 100mm.</li>
            <li>🚶 Night routes require better lighting coverage.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

function AnalyticsCard({ title, value, detail }) {
  return (
    <div className="rounded-3xl bg-slate-900 border border-cyan-500/20 p-6">
      <p className="text-slate-400 text-sm">{title}</p>
      <h3 className="text-3xl font-bold text-cyan-400 mt-3">{value}</h3>
      <p className="text-slate-500 mt-2 text-sm">{detail}</p>
    </div>
  )
}

function RiskBar({ label, value }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-slate-300">{label}</span>
        <span className="text-cyan-400">{value}</span>
      </div>

      <div className="w-full h-3 rounded-full bg-slate-800">
        <div
          className="h-3 rounded-full bg-cyan-400"
          style={{ width: value }}
        ></div>
      </div>
    </div>
  )
}

export default Analytics