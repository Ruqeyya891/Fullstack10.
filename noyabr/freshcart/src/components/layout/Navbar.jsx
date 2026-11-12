import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiSearch,
  FiMapPin,
  FiHeart,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import { logo, departments, navLinks } from "../../data";

const navLinkClass = ({ isActive }) =>
  `flex items-center gap-1 py-1 text-sm font-medium hover:text-primary ${isActive ? "text-primary" : ""}`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container-x flex items-center gap-4 py-4">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="FreshCart" className="h-8" />
        </Link>

        <form className="relative hidden flex-1 lg:block lg:max-w-md">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search for products"
            className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none"
          />
        </form>

        <button className="hidden items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm lg:flex">
          <FiMapPin />
          Location
        </button>

        <div className="ml-auto flex items-center gap-5 text-xl">
          <button aria-label="Wishlist" className="hover:text-primary">
            <FiHeart />
          </button>
          <button aria-label="Account" className="hover:text-primary">
            <FiUser />
          </button>
          <button aria-label="Cart" className="relative hover:text-primary">
            <FiShoppingCart />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
              5
            </span>
          </button>
          <button
            aria-label="Menu"
            className="lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      <div className={`border-t border-gray-100 ${menuOpen ? "block" : "hidden"} lg:block`}>
        <div className="container-x flex flex-col gap-2 py-3 lg:flex-row lg:items-center lg:gap-6">
          <div className="relative">
            <button
              onClick={() => setDepartmentsOpen((prev) => !prev)}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white lg:w-auto"
            >
              <FiMenu />
              All Departments
              <FiChevronDown />
            </button>

            {departmentsOpen && (
              <ul className="absolute left-0 top-full z-20 mt-2 w-64 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                {departments.map((department) => (
                  <li key={department}>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary">
                      {department}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav>
            <ul className="flex flex-col gap-1 lg:flex-row lg:gap-6">
              {navLinks.map(({ label, to, children }) => (
                <li key={label} className="group relative">
                  <NavLink to={to} className={navLinkClass}>
                    {label}
                    {children && <FiChevronDown size={14} />}
                  </NavLink>

                  {children && (
                    <ul className="absolute left-0 top-full z-20 hidden w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg group-hover:block">
                      {children.map((child, index) => (
                        <li key={index}>
                          <Link to={child.to} className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
