import Menu from "../Components/menu";

const products = [
  {
    id: 1,
    name: "Loom Standard Vynil",
    href: "#",
    imageSrc:
      "https://udiscover.mx/cdn/shop/files/STANDARD_MOCK_UP.png?v=1727909812&width=800",
    imageAlt: "Loom Vynil disc with songs like Wake Up or Nice to Meet You.",
    price: "$675",
    color: "N/A",
  },
  {
    id: 2,
    name: "Reflections (from the Vault of Smoke + Mirrors) LP",
    href: "#",
    imageSrc:
      "https://udiscover.mx/cdn/shop/files/REFLECTIONS_STAND_ALONE__PACKSHOT_BLURRED_edited_11b380ac-4803-4504-89b9-1ed873fd0f6d.jpg?v=1738002425&width=2000",
    imageAlt: "Demo of Smoke + Mirrors",
    price: "$600",
    color: "N/A",
  },
  {
    id: 3,
    name: "Bones (Hoodie)",
    href: "#",
    imageSrc:
      "https://udiscover.mx/cdn/shop/files/Image20230706155802.png?v=1724965817&width=600",
    imageAlt: "Bones Black hoodie",
    price: "$1000",
    color: "Black",
  },
  {
    id: 4,
    name: "Mercury (Shirt)",
    href: "#",
    imageSrc:
      "  https://udiscover.mx/cdn/shop/files/Image20230706155758.png?v=1739318885&width=600",
    imageAlt: "Mercury Black Shirt",
    price: "$350",
    color: "Black",
  },
  {
    id: 5,
    name: "Night Visions Vynil",
    href: "#",
    imageSrc:
      "  https://udiscover.mx/cdn/shop/products/602537158904_Imagine_Dragons.jpg?v=1739318775&width=1200",
    imageAlt: "Night Visions Vynil First Edition",
    price: "$375",
    color: "N/A",
  },

  // More products...
];

export default function Store() {
  return (
    <div className="bg-[url('https://wallpapercave.com/wp/wp14699777.jpg')] bg-cover bg-center min-h-screen">
      <Menu />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Become a firebreather
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-black">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-white">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
