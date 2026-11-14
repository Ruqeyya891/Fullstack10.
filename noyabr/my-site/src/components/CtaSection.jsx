import Button from './Button'

export default function CtaSection({ heading }) {
  return (
    <section className="cta">
      <div className="cta-inner container">
        <h2>{heading}</h2>
        <div className="btn-group">
          <Button>Button</Button>
          <Button variant="secondary">Secondary button</Button>
        </div>
      </div>
    </section>
  )
}