import { useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      alert("Usuario registrado")
    } catch (error) {
      alert(error.message)
    }
  }

  const login = async (e) => {
    e.preventDefault()

    try {
      await signInWithEmailAndPassword(auth, email, password)
      alert("Login exitoso")
    } catch (error) {
      alert("Error al iniciar sesión")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-6">

      <form
        onSubmit={login}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl"
      >

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-xl"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border rounded-xl"
        />

        {/* LOGIN */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
        >
          Iniciar sesión
        </button>

        {/* REGISTER */}
        <button
          type="button"
          onClick={register}
          className="w-full mt-3 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Registrarse
        </button>
        <p className="text-center mt-4">
  ¿No tienes cuenta?
  <a href="/register" className="text-purple-600 ml-1">
    Regístrate
  </a>
</p>

      </form>

    </div>
  )
}

export default Login