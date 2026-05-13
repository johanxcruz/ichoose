import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white mt-20 px-6">

      {/* LOGO */}
      <img
        src={logo}
        alt="ICHOOSE logo"
        className="w-72 md:w-96 mb-6 drop-shadow-2xl hover:scale-105 transition"
      />

      {/* TÍTULO */}
      <h1 className="text-5xl md:text-6xl font-bold text-purple-500">
        ICHOOSE
      </h1>

      {/* FRASE */}
      <p className="mt-6 text-xl text-gray-300 max-w-xl">
        Descubre productos únicos inspirados en anime, cultura pop y estilo urbano.
      </p>

      <p className="mt-3 text-gray-500">
        Tu estilo, tu identidad, tu elección.
      </p>

      {/* BOTÓN */}
      <Link to="/catalogo">
        <button className="mt-10 bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700 transition">
          Ver Catálogo
        </button>
      </Link>

    </div>
  )
}

export default Home