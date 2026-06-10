import { useState } from "react"

function WasteVision() {
  const [image, setImage] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-cyan-400">WasteVision</h1>

      <p className="text-slate-400 mt-2">
        Detect and classify urban waste using AI.
      </p>

      <div className="mt-8 w-full max-w-xl">
  <input
    id="waste-upload"
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="hidden"
  />

  <label
    htmlFor="waste-upload"
    className="flex flex-col items-center justify-center h-56 border-2 border-dashed border-cyan-500/30 rounded-3xl cursor-pointer hover:border-cyan-400 hover:bg-cyan-500/5 transition-all duration-300"
  >
    <div className="text-center">
      <div className="text-5xl mb-4">♻️</div>

      <h3 className="text-xl font-semibold text-cyan-400">
        Upload Waste Image
      </h3>

      <p className="text-slate-400 mt-2">
        Click here to browse image
      </p>

      <p className="text-xs text-slate-500 mt-4">
        JPG • PNG • JPEG
      </p>
    </div>
  </label>
</div>

      {image && (
  <div className="mt-6 max-w-xl rounded-3xl bg-slate-900 border border-cyan-500/20 p-4">
    <p className="text-cyan-400 mb-3 font-semibold">
      Image Preview
    </p>

    <img
      src={image}
      alt="Preview"
      className="rounded-2xl w-full max-h-80 object-cover"
    />

    <button
      className="mt-6 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all duration-300"
    >
      Analyze Waste
    </button>

  </div>
)}
    </div>
    
  )
  
  
}

export default WasteVision