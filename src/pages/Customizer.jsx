import { useEffect, useRef, useState } from "react"
import * as fabric from "fabric"

function Customizer() {

  const canvasRef = useRef(null)

  const [selectedColor, setSelectedColor] = useState("#ffffff")
  const [customText, setCustomText] = useState("Anime")
  useEffect(() => {

    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: "#f3f4f6",
    })

    // Media básica
    const sock = new fabric.Rect({
      left: 100,
      top: 50,
      width: 150,
      height: 300,
      fill: selectedColor,
      rx: 40,
      ry: 40,
      selectable: false,
    })

    canvas.add(sock)

    // Texto anime
    const text = new fabric.Text(customText, {
      left: 130,
      top: 180,
      fontSize: 28,
      fill: "black",
    })

    canvas.add(text)

    return () => {
      canvas.dispose()
    }

  }, [selectedColor, customText])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-10">

      <h1 className="text-4xl font-bold mb-8 text-purple-500">
        Personaliza tu media
      </h1>

      {/* Selector color */}
      <div className="mb-6 flex gap-4 items-center">

        <p>Color:</p>

        <input
          type="color"
          value={selectedColor}
          onChange={(e) =>
            setSelectedColor(e.target.value)
          }
        />

      </div>
      <div className="mb-6 flex flex-col items-center">

  <p className="mb-2">
    Texto personalizado
  </p>

  <input
    type="text"
    placeholder="Escribe un nombre o anime"
    value={customText}
    onChange={(e) =>
      setCustomText(e.target.value)
    }
    className="px-4 py-2 rounded-xl text-black w-72"
  />

</div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={400}
        height={500}
        className="border-4 border-purple-500 rounded-xl bg-white"
      />

    </div>
  )
}

export default Customizer