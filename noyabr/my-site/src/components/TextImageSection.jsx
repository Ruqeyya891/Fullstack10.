import Button from './Button'

export default function TextImageSection({ heading, items, image }) {
  return (
    <section className="split container">
      <div>
        <h2>{heading}</h2>
        {items.map((item, i) => (
          <div className="split-item" key={i}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
        <div className="btn-group">
          <Button size="sm">Button</Button>
          <Button size="sm" variant="secondary">Secondary button</Button>
        </div>
      </div>
      <img src={image} alt="" />
    </section>
  )
}