import ContactForm from '../../components/ContactForm'
import './About.css'

export default function About() {
  return (
    <section className="container about">
      <div className="about-content">
        <h1>Acerca de</h1>
        <h2 className="about-subtitle">Subtítulo para la descripción o las instrucciones</h2>

        <p>
          Cuerpo del texto de todo tu artículo o publicación.Insertaremos
          un poco de lorem ipsum para mostrar qué aspecto puede tener una página completa:
        </p>
        <p>
          Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
        </p>

        <h2 className="about-form-title">Ponte en contacto conmigo</h2>
        <ContactForm />
      </div>

      <img src="public/images/about.jpg" alt="" />
    </section>
  )
}