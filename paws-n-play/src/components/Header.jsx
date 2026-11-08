import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute w-full top-0 z-50 bg-transparent text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/src/assets/images/Logo (1).png" alt="Logo" className="h-8 w-auto" />
        </div>

        <nav className="hidden md:flex gap-8 items-center font-medium">
          <a href="#" className="hover:text-gray-300">Shop</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300">Blog</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>

        <div className="hidden md:block">
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 absolute top-full left-0 w-full p-4 flex flex-col gap-4 text-center">
          <a href="#" className="text-xl">Shop</a>
          <a href="#" className="text-xl">Services</a>
          <a href="#" className="text-xl">About Us</a>
          <a href="#" className="text-xl">Blog</a>
          <a href="#" className="text-xl">Contact</a>
          <button className="bg-white text-black px-6 py-3 rounded-full font-bold">Get Started</button>
        </div>
      )}
    </header>
  );
};

export default Header;
