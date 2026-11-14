import Button from './Button'

export default function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-row">
        <label>
          Nombre
          <input type="text" placeholder="Jane" />
        </label>
        <label>
          Apellido
          <input type="text" placeholder="Smitherton" />
        </label>
      </div>

      <label>
        Dirección de correo electrónico
        <input type="email" placeholder="email@janesfakedomain.net" />
      </label>

      <label>
        Tu mensaje
        <textarea placeholder="Introduce tu pregunta o mensaje" rows="5" />
      </label>

      <Button>Enviar</Button>
    </form>
  )
}