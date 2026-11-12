import { useEffect, useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { heroSlides } from "../../data";

const AUTOPLAY_DELAY = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % heroSlides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, []);

  const { badge, title, text, image } = heroSlides[current];

  return (
    <section className="container-x mt-6">
      <div
        className="relative overflow-hidden rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="px-8 py-16 md:px-16 md:py-24">
          <span className="inline-block rounded bg-yellow-300 px-3 py-1 text-sm font-medium text-gray-800">
            {badge}
          </span>

          <h2 className="mt-4 max-w-md text-3xl font-bold text-gray-900 md:text-5xl">{title}</h2>
          <p className="mt-3 max-w-sm text-gray-600">{text}</p>

          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-primary"
          >
            Shop Now
            <FiArrowRight />
          </a>
        </div>

        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:text-primary"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:text-primary"
        >
          <FiChevronRight />
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {heroSlides.map(({ id }, index) => (
            <button
              key={id}
              onClick={() => setCurrent(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-2 w-2 rounded-full ${index === current ? "bg-primary" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
