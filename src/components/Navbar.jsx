import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="w-full flex flex-col md:flex-row justify-between items-center gap-6 px-6 md:px-10 py-5 bg-black border-b border-purple-900">

      <h1 className="text-3xl font-bold text-purple-500">
        ICHOOSE
      </h1>

      <ul className="flex flex-wrap justify-center gap-6 text-white">

        <Link to="/">
          <li className="hover:text-purple-400 transition">
            Inicio
          </li>
        </Link>

        <Link to="/catalogo">
          <li className="hover:text-purple-400 transition">
            Catálogo
          </li>
        </Link>

        <Link to="/login">
          <li className="hover:text-purple-400 transition">
            Login
          </li>
        </Link>

      </ul>

      <button className="bg-purple-600 px-5 py-2 rounded-xl hover:bg-purple-700 transition text-white">
        Login
      </button>

    </nav>
  )
}

export default Navbar