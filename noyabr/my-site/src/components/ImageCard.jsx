export default function ImageCard({ image, title, text, wide }) {
  return (
    <article className={wide ? 'card card-wide' : 'card'}>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}