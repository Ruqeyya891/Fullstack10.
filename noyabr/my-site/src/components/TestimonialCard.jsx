export default function TestimonialCard({ quote, avatar, name, role }) {
  return (
    <article className="review">
      <p>{quote}</p>
      <div className="review-user">
        <img src={avatar} alt="" />
        <div>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
    </article>
  )
}