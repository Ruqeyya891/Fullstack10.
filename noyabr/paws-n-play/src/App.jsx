import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Blog from './components/Blog';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100">
      <Header />
      <main className="bg-white">
        <Hero />
        <div className="space-y-20 px-0 py-12 md:space-y-32 md:py-24">

          <Shop />
          <Services />
          <About />
          <Team />
          <Blog />

        </div>
      </main>
    </div>
  );
}

export default App;
