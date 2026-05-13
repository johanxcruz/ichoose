import { Link } from "react-router-dom"

function Navbar({ setCartOpen, cart, user, profile, onLogout }) {

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-black border-b border-purple-900">

      {/* LOGO */}
      <Link to="/">
        <h1 className="text-2xl font-bold text-purple-500">
          ICHOOSE
        </h1>
      </Link>

      {/* LINKS CENTRO */}
      <div className="flex gap-6 text-white">
        <Link to="/" className="hover:text-purple-400">
          Inicio
        </Link>

        <Link to="/catalogo" className="hover:text-purple-400">
          Catálogo
        </Link>

        <Link to="/login" className="hover:text-purple-400">
          Login
        </Link>
      </div>

      {/* DERECHA */}
      <div className="flex items-center gap-4">

        {/* CARRITO */}
        <button
          onClick={() => setCartOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-xl"
        >
          🛒 {cart?.length || 0}
        </button>

        {/* USUARIO LOGUEADO */}
        {user ? (
          <div className="flex items-center gap-3 text-white">

            {/* INFO USUARIO */}
            <div className="text-right leading-tight">
              <p className="font-bold">
                {profile?.nombre || user.email}
              </p>

              <p className="text-xs text-gray-400">
                {profile?.cedula || "Usuario"}
              </p>
            </div>

            {/* LOGOUT */}
            <button
              onClick={onLogout}
              className="bg-red-500 px-3 py-1 rounded-lg"
            >
              Logout
            </button>

          </div>
        ) : (
          <Link
            to="/login"
            className="text-white hover:text-purple-400"
          >
            Entrar
          </Link>
        )}

      </div>

    </nav>
  )
}

export default Navbar