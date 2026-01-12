import ProductCard from "../components/ProductCard";

function Marketplace() {
  const products = [
    {
      id: 1,
      name: "Handmade Candle",
      price: 299,
      seller: "Aarti",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Home Baked Cookies",
      price: 199,
      seller: "Riya",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Crochet Keychain",
      price: 149,
      seller: "Neha",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "Art Print",
      price: 499,
      seller: "Karan",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div style={styles.container}>
      <h1>Marketplace</h1>

      <div style={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
};

export default Marketplace;
