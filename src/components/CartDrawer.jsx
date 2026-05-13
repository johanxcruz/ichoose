export default function CartDrawer({
  open,
  onClose,
  cart,
  removeFromCart,
  increaseQty,
  decreaseQty,
}) {
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          open ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Tu carrito</h2>

          <button
            onClick={onClose}
            className="text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-120px)]">

          {cart.length === 0 ? (
            <p className="text-gray-500">
              Tu carrito está vacío
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                {/* Info producto */}
                <div>
                  <p className="font-semibold">
                    {item.name}
                  </p>

                  <p className="text-sm text-gray-600">
                    ${item.price} x {item.quantity}
                  </p>
                </div>

                {/* Botón eliminar */}
                <div className="flex items-center gap-2">

  {/* - */}
  <button
    onClick={() => decreaseQty(item.id)}
    className="px-2 bg-gray-200 rounded"
  >
    -
  </button>

  {/* cantidad */}
  <span className="font-bold">
    {item.quantity}
  </span>

  {/* + */}
  <button
    onClick={() => increaseQty(item.id)}
    className="px-2 bg-gray-200 rounded"
  >
    +
  </button>

</div>
              </div>
            ))
          )}

        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-4 border-t bg-white">

          {/* Total */}
          <div className="flex justify-between mb-3 font-bold">
            <span>Total:</span>
            <span>${total.toLocaleString()}</span>
          </div>

          {/* Botón */}
          <button className="w-full bg-black text-white py-3 rounded-xl">
            Comprar
          </button>

        </div>
      </div>
    </>
  )
}