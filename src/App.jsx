import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import CartDrawer from "./components/CartDrawer"

import Catalogo from "./pages/Catalogo"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth, db } from "./firebase/firebase"
import { doc, getDoc } from "firebase/firestore"

function App() {

  // =====================
  // CART
  // =====================
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // =====================
  // USER AUTH
  // =====================
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return

      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setProfile(docSnap.data())
      }
    }

    fetchProfile()
  }, [user])

  const handleLogout = async () => {
    await signOut(auth)
  }

  // =====================
  // CART LOGIC
  // =====================
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id)

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  // =====================
  // ROUTE PROTECTION
  // =====================
  const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Login />
    }
    return children
  }

  return (
    <BrowserRouter>

      <div className="bg-black min-h-screen p-10">

        {/* NAVBAR ÚNICO */}
        <Navbar
          setCartOpen={setCartOpen}
          cart={cart}
          user={user}
          profile={profile}
          onLogout={handleLogout}
        />

        {/* CARRITO */}
        <CartDrawer
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          cart={cart}
          removeFromCart={removeFromCart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />

        {/* ROUTES */}
        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/catalogo"
            element={
              <ProtectedRoute user={user}>
                <Catalogo addToCart={addToCart} />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App