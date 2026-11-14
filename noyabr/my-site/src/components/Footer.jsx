import { Link } from 'react-router'
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'

const pages = [
  { to: '/', label: 'Home' },
  { to: '/article', label: 'Article' },
  { to: '/shop', label: 'Shop' },
]

export default function Footer() {
  return (
    <footer className="footer container">
      <div>
        <p>Nombre del sitio</p>
        <div className="socials">
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-cols">
        {[1, 2, 3].map((n) => (
          <div key={n}>
            <h4>Topic</h4>
            <ul>
              {pages.map((p) => (
                <li key={p.to}>
                  <Link to={p.to}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}