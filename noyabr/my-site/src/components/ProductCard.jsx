export default function ProductCard({ image, title, text, price }) {
  return (
    <article className="product-card">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
      <span>{price}</span>
    </article>
  )
}