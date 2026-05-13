import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../firebase/firebase"
import { useNavigate } from "react-router-dom"

function Register() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    nombre: "",
    cedula: "",
    email: "",
    direccion: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      // 1. crear usuario en Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      )

      const user = userCredential.user

      // 2. guardar datos extra en Firestore
      await setDoc(doc(db, "users", user.uid), {
        nombre: form.nombre,
        cedula: form.cedula,
        email: form.email,
        direccion: form.direccion,
        createdAt: new Date()
      })

      alert("Usuario registrado con éxito")

      navigate("/login")

    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-6">

      <form
        onSubmit={handleRegister}
        className="bg-white w-full max-w-md p-8 rounded-2xl"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          Registro
        </h1>

        <input
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded-xl"
        />

        <input
          name="cedula"
          placeholder="Cédula"
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded-xl"
        />

        <input
          name="email"
          placeholder="Correo"
          type="email"
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded-xl"
        />

        <input
          name="direccion"
          placeholder="Dirección"
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded-xl"
        />

        <input
          name="password"
          placeholder="Contraseña"
          type="password"
          onChange={handleChange}
          className="w-full p-3 mb-5 border rounded-xl"
        />

        <button
          className="w-full bg-purple-600 text-white py-3 rounded-xl"
        >
          Registrarse
        </button>

      </form>

    </div>
  )
}

export default Register