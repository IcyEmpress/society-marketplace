function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img
        src={product.image}
        alt={product.name}
        style={styles.image}
      />

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p style={styles.seller}>Seller: {product.seller}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px",
    width: "200px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  seller: {
    fontSize: "12px",
    color: "#555",
  },
};

export default ProductCard;
