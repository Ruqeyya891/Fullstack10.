import Button from './Button'

export default function Hero({ title, text, buttonText, image }) {
  return (
    <section className="hero container">
      <h1>{title}</h1>
      <p>{text}</p>
      <Button size="lg">{buttonText}</Button>
      <img src={image} alt="" />
    </section>
  )
}