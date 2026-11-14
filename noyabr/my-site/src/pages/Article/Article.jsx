import ImageCard from '../../components/ImageCard'
import './Article.css'

const related = [
  { image: 'public/images/related1.jpg', title: 'Title', text: 'Author' },
  { image: 'public/images/related2.jpg', title: 'Title', text: 'Author' },
  { image: 'public/images/related3.jpg', title: 'Title', text: 'Author' },
]

export default function Article() {
  return (
    <>
      <section className="article-top container">
        <h1>Título de artículo o publicación</h1>
        <p>
          Subtitle that sets the context, shares more information about the
          author or, in general, motivates people to keep reading.
        </p>
        <img src="public/images/hero.png" alt="Hero image" />
      </section>

      <section className="article-text">
        <p>
          Cuerpo del texto de todo tu artículo o publicación.
          Insertaremos un poco de lorem ipsum para mostrar qué aspecto puede tener una página completa:
        </p>
        <p>

          Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
        </p>
        <p>
          Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim.  Sharp classic the best commodo nostrud delightful.  Conversation aute Rochester id.  Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
        </p>
      </section>

      <section className="article-gallery container">
        <img src="public/images/article1.png" alt="Article 1" />
        <img src="public/images/article2.png" alt="Article 2" />
      </section>

      <section className="article-text">
        <p>
          Excepteur efficient emerging, minim veniam anim aute carefully curated
          gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual
          adipisicing Borzoi, essential lovely tempor eiusmod irure.
        </p>
        <p>
          Exquisite sophisticated iconic cutting-edge laborum deserunt esse
          bureaux cupidatat id minim. Sharp classic the best commodo nostrud
          delightful. Conversation aute wifey id.
        </p>
      </section>

      <section className="section container related">
        <h2>Related articles or publications</h2>
        <div className="grid grid-3">
          {related.map((item, i) => (
            <ImageCard key={i} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}