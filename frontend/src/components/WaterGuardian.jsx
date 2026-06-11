import { useState } from "react"

function WaterGuardian() {
  const [rainfall, setRainfall] = useState("")
  const [result, setResult] = useState(null)

  const analyzeFloodRisk = () => {
    if (!rainfall) return

    let risk = "Low"

    if (rainfall > 100) risk = "High"
    else if (rainfall > 50) risk = "Moderate"

    setResult({
      rainfall,
      risk,
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-cyan-400">
        WaterGuardian
      </h1>

      <p className="text-slate-400 mt-2">
        Predict flood and waterlogging risks using AI.
      </p>

      <div className="mt-8 max-w-xl">
        <input
          type="number"
          placeholder="Enter rainfall (mm)"
          value={rainfall}
          onChange={(e) => setRainfall(e.target.value)}
          className="w-full bg-slate-900 border border-cyan-500/20 rounded-xl p-4 text-white"
        />

        <button
          onClick={analyzeFloodRisk}
          className="mt-4 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400"
        >
          Analyze Flood Risk
        </button>
      </div>

      {result && (
        <div className="mt-6 max-w-xl rounded-3xl bg-slate-900 border border-cyan-500/20 p-5">
          <h3 className="text-cyan-400 font-semibold text-lg">
            Flood Analysis Complete
          </h3>

          <div className="mt-4 space-y-2">
            <p>Rainfall: {result.rainfall} mm</p>
            <p>Risk Level: {result.risk}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default WaterGuardian