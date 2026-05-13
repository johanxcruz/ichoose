function Cart({ cart, removeFromCart }) {

  const total = cart.reduce((acc, product) => {

    const numericPrice = Number(
      product.price.replace(/[^0-9]/g, "")
    )

    return acc + numericPrice

  }, 0)

  return (
    <div className="bg-zinc-900 text-white p-6 rounded-2xl border border-purple-900 w-full md:w-96 mt-10">

      <h2 className="text-3xl font-bold text-purple-400 mb-6">
        🛒 Carrito ({cart.length})
      </h2>

      <div className="flex flex-col gap-4">

        {cart.map((product, index) => (
          <div
            key={index}
            className="bg-black p-4 rounded-xl border border-purple-900"
          >

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <h3 className="text-xl font-bold">
              {product.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {product.description}
            </p>

            <p className="text-purple-400 text-xl font-bold mt-4">
              {product.price}
            </p>

            <button
              onClick={() => removeFromCart(index)}
              className="mt-4 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Eliminar
            </button>

          </div>
        ))}

      </div>

      <div className="border-t border-purple-900 mt-8 pt-5">

        <h3 className="text-2xl font-bold">
          Total: ${total.toLocaleString()}
        </h3>

      </div>

    </div>
  )
}

export default Cart