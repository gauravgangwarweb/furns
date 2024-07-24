import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      id: 10,
      title: "This is the large title for t...",
      price: 19,
      oldPrice: 21,
      image: ["https://toolkits-1.myshopify.com/cdn/shop/products/3_018b9fe5-d1da-4498-a8d9-9400c7d6a707_large.jpg?v=1619509528", "https://toolkits-1.myshopify.com/cdn/shop/products/4_d2d85450-694d-4907-8abe-699534972db6_large.jpg?v=1619507863"],
      sale: true,
      discount: 10,
    },
    { id: 11, title: "Product with video", price: 39, image: ["https://toolkits-1.myshopify.com/cdn/shop/products/3_018b9fe5-d1da-4498-a8d9-9400c7d6a707_large.jpg?v=1619509528", "https://toolkits-1.myshopify.com/cdn/shop/products/4_d2d85450-694d-4907-8abe-699534972db6_large.jpg?v=1619507863"], },
    {
      id: 9,
      title: "Without shortcode produ...",
      price: 79,
      image: ["https://toolkits-1.myshopify.com/cdn/shop/products/3_018b9fe5-d1da-4498-a8d9-9400c7d6a707_large.jpg?v=1619509528", "https://toolkits-1.myshopify.com/cdn/shop/products/4_d2d85450-694d-4907-8abe-699534972db6_large.jpg?v=1619507863"],
    },
    {
      id: 8,
      title: "Countdown product",
      price: 39,
      oldPrice: 60,
      image: ["https://toolkits-1.myshopify.com/cdn/shop/products/3_018b9fe5-d1da-4498-a8d9-9400c7d6a707_large.jpg?v=1619509528", "https://toolkits-1.myshopify.com/cdn/shop/products/4_d2d85450-694d-4907-8abe-699534972db6_large.jpg?v=1619507863"],
      sale: true,
      discount: 35,
      countdown: [98, 11, 4, 59],
    },
    { id: 7, title: "Sample affiliate product", price: 29, image: ["https://toolkits-1.myshopify.com/cdn/shop/products/3_018b9fe5-d1da-4498-a8d9-9400c7d6a707_large.jpg?v=1619509528", "https://toolkits-1.myshopify.com/cdn/shop/products/4_d2d85450-694d-4907-8abe-699534972db6_large.jpg?v=1619507863"], },
    {
      id: 6,
      title: "Variable with soldout pro...",
      price: 55,
      oldPrice: 75,
      image: ["https://toolkits-1.myshopify.com/cdn/shop/products/3_018b9fe5-d1da-4498-a8d9-9400c7d6a707_large.jpg?v=1619509528", "https://toolkits-1.myshopify.com/cdn/shop/products/4_d2d85450-694d-4907-8abe-699534972db6_large.jpg?v=1619507863"],
      sale: true,
      discount: 27,
    },
    { id: 5, title: "Simple product", price: 50, image: ["https://toolkits-1.myshopify.com/cdn/shop/products/3_018b9fe5-d1da-4498-a8d9-9400c7d6a707_large.jpg?v=1619509528", "https://toolkits-1.myshopify.com/cdn/shop/products/4_d2d85450-694d-4907-8abe-699534972db6_large.jpg?v=1619507863"], },
    {
      id: 4,
      title: "Soldout product",
      price: 19,
      oldPrice: 29,
      image: ["https://toolkits-1.myshopify.com/cdn/shop/products/3_018b9fe5-d1da-4498-a8d9-9400c7d6a707_large.jpg?v=1619509528", "https://toolkits-1.myshopify.com/cdn/shop/products/4_d2d85450-694d-4907-8abe-699534972db6_large.jpg?v=1619507863"],
      soldout: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-32 mt-14">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
