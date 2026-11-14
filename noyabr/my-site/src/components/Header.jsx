import { Link, NavLink } from 'react-router'

export default function Header() {
  return (
    <header className="header container">
      <Link to="/" className="logo">Nombre del sitio</Link>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/article">Article</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}