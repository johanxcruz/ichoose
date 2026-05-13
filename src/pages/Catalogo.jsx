import ProductCard from "../components/ProductCard"
import aretes from "../assets/aretes.png"
import collar from "../assets/collar.png"
import medias from "../assets/medias.png"

function Catalogo({ addToCart }) {

  const products = [
    {
      id: 1,
      name: "Collar Naruto",
      description: "Diseños inspirados en anime y cultura japonesa.",
      price: 35000,
      image: collar
    },

    {
      id: 2,
      name: "Medias Hora de aventura",
      description: "Personaliza medias con personajes favoritos.",
      price: 28000,
      image: medias
    },

    {
      id: 3,
      name: "Aretes Tanjiro Kamado",
      description: "Accesorios únicos en estilo.",
      price: 22000,
      image: aretes
    }
  ]

  return (
    <div className="mt-20">

      <h1 className="text-5xl font-bold text-purple-500 text-center mb-16">
        Catálogo
      </h1>

      <div className="flex flex-wrap gap-10 justify-center">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            onAdd={() => addToCart(product)}
          />
        ))}

      </div>

    </div>
  )
}

export default Catalogo