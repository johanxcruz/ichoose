function ProductCard(props) {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden w-full md:w-80 border border-purple-900 hover:scale-105 transition">

      <img
        src={props.image}
        alt={props.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl text-white font-bold">
          {props.title}
        </h2>

        <p className="text-gray-400 mt-3">
          {props.description}
        </p>

        <p className="text-purple-400 text-2xl font-bold mt-5">
          {props.price}
        </p>

        <button
  onClick={props.onAdd}
  className="w-full mt-6 bg-purple-600 py-3 rounded-xl hover:bg-purple-700 transition text-white"
>
  Agregar al carrito
</button>


      </div>

    </div>
  )
}

export default ProductCard