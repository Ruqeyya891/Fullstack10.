import { FiGlobe, FiUser, FiLock, FiCalendar } from 'react-icons/fi'
import Button from '../../components/Button'
import ProductCard from '../../components/ProductCard'
import FeatureItem from '../../components/FeatureItem'
import './Shop.css'

const rows = [
  { image: 'public/images/shop1.jpg', reverse: false },
  { image: 'public/images/shop2.jpg', reverse: true },
]

const features = [
  { icon: <FiGlobe />, title: 'Subtítulo', text: 'Cuerpo del texto para lo que quieras decir. Añade puntos clave, citas, anécdotas o incluso una historia muy breve. ' },
  { icon: <FiUser />, title: 'Subtítulo', text: 'Cuerpo del texto para lo que quieras decir. Añade puntos clave, citas, anécdotas o incluso una historia muy breve. ' },
  { icon: <FiLock />, title: 'Subtítulo', text: 'Cuerpo del texto para lo que quieras decir. Añade puntos clave, citas, anécdotas o incluso una historia muy breve. ' },
  { icon: <FiCalendar />, title: 'Subtítulo', text: 'Cuerpo del texto para lo que quieras decir. Añade puntos clave, citas, anécdotas o incluso una historia muy breve. ' },
]

export default function Shop() {
  return (
    <>
      <section
        className="shop-hero"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url(public/images/shop-hero.jpg)',
        }}
      >
        <h1>Título de la tienda</h1>
        <p>Subtitle with the description of your shopping site</p>
        <Button size="lg">Button</Button>
      </section>

      <section className="container shop-rows">
        {rows.map((row, i) => (
          <div key={i} className={row.reverse ? 'shop-row reverse' : 'shop-row'}>
            <div className="shop-row-text">
              <h2>Encabezado</h2>
              <p>Un subtítulo para esta sección, tan largo o tan corto como quieras</p>
              <div className="btn-group">
                <Button>Button</Button>
                <Button variant="secondary">Secondary button</Button>
              </div>
            </div>
            <img src={row.image} alt="" />
          </div>
        ))}
      </section>

      <section className="section container">
        <h2>Encabezado</h2>
        <div className="featured">
          <ProductCard
            image="public/images/product1.jpg"
            title="Featured product"
            text="Description of the featured product"
            price="$10.99"
          />
          <div className="featured-side">
            <ProductCard
              image="public/images/product2.jpg"
              title="Product"
              text="Description of the main product"
              price="$10.99"
            />
            <ProductCard
              image="/images/product3.jpg"
              title="Product"
              text="Description of the lower category product"
              price="$10.99"
            />
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Encabezado de sección</h2>
        <div className="features">
          {features.map((f, i) => (
            <FeatureItem key={i} {...f} />
          ))}
        </div>
      </section>
    </>
  )
}