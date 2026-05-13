import { useState, useEffect } from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Cart from "./components/Cart"

import Catalogo from "./pages/Catalogo"

function App() {

  const [cart, setCart] = useState(() => {

  const savedCart = localStorage.getItem("cart")

  return savedCart
    ? JSON.parse(savedCart)
    : []

})

 

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    )

  }, [cart])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (indexToRemove) => {

    const updatedCart = cart.filter(
      (_, index) => index !== indexToRemove
    )

    setCart(updatedCart)
  }

  return (
    <BrowserRouter>

      <div className="bg-black min-h-screen p-10">

        <Navbar />

        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
        />

        <Routes>

          <Route
            path="/"
            element={
              <Catalogo addToCart={addToCart} />
            }
          />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App