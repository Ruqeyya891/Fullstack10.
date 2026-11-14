import ProductCard from '../../components/ProductCard'
import './Product.css'

const related = [
  { image: 'public/images/rel1.jpg', title: 'Product', text: 'Description of the first product', price: '$10.99' },
  { image: 'public/images/rel2.jpg', title: 'Product', text: 'Description of the second product', price: '$10.99' },
  { image: 'public/images/rel3.jpg', title: 'Product', text: 'Description of the third product', price: '$10.99' },
  { image: 'public/images/rel4.jpg', title: 'Product', text: 'Description of the fourth product', price: '$10.99' },
  { image: 'public/images/rel5.jpg', title: 'Product', text: 'Description of the fifth product', price: '$10.99' },
  { image: 'public/images/rel6.jpg', title: 'Product', text: 'Description of the sixth product', price: '$10.99' },
]

export default function Product() {
  return (
    <>
      <section className="container product-top">
        <img src="public/images/product-main.jpg" alt="productmain" />

        <div className="product-info">
          <h1>Nombre del producto</h1>
          <h2 className="product-subtitle">Subtítulo</h2>
          <p className="product-price">10,99$</p>
          <p className="product-text">
            Cuerpo del texto para describir qué es este producto y por qué es una compra imprescindible.
          </p>
          <button className="btn">Añadir al carrito</button>
          <small>Cuadro de texto para detalles adicionales o letra pequeña</small>
        </div>
      </section>

      <section className="section container">
        <h2>Productos relacionados</h2>
        <div className="grid grid-3 related-products">
          {related.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}