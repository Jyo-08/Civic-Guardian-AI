import { useState } from "react"

function SafeRoute() {
  const [source, setSource] = useState("")
  const [destination, setDestination] = useState("")
  const [result, setResult] = useState(null)

  const analyzeRoute = () => {
    if (!source || !destination) return

    setResult({
      source,
      destination,
      safetyScore: "78%",
      riskLevel: "Moderate",
      recommendation: "Use a better-lit alternate route after 8 PM",
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-cyan-400">SafeRoute</h1>

      <p className="text-slate-400 mt-2">
        Find safer travel routes using civic risk intelligence.
      </p>

      <div className="mt-8 max-w-xl space-y-4">
        <input
          type="text"
          placeholder="Enter source location"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="w-full bg-slate-900 border border-cyan-500/20 rounded-xl p-4 text-white"
        />

        <input
          type="text"
          placeholder="Enter destination location"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full bg-slate-900 border border-cyan-500/20 rounded-xl p-4 text-white"
        />

        <button
          onClick={analyzeRoute}
          className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400"
        >
          Analyze Safe Route
        </button>
      </div>

      {result && (
        <div className="mt-6 max-w-xl rounded-3xl bg-slate-900 border border-cyan-500/20 p-5">
          <h3 className="text-cyan-400 font-semibold text-lg">
            Route Safety Analysis Complete
          </h3>

          <div className="mt-4 space-y-2">
            <p>From: {result.source}</p>
            <p>To: {result.destination}</p>
            <p>Safety Score: {result.safetyScore}</p>
            <p>Risk Level: {result.riskLevel}</p>
            <p>Recommendation: {result.recommendation}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SafeRoute