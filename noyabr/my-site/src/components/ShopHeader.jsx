import { Link, NavLink } from 'react-router'

export default function ShopHeader() {
  return (
    <header className="shop-header">
      <div className="container shop-header-inner">
        <Link to="/" className="logo">Nombre del sitio</Link>
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/article">Article</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  )
}