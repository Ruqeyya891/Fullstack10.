import { promoBanners } from "../../data";

export default function PromoBanners() {
  return (
    <section className="container-x my-12">
      <div className="grid gap-6 md:grid-cols-2">
        {promoBanners.map(({ id, title, text, image, color }) => (
          <div
            key={id}
            className={`rounded-xl bg-cover bg-center px-8 py-12 ${color}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600">{text}</p>

            <a
              href="#"
              className="mt-4 inline-block rounded-md bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-primary"
            >
              Shop Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
