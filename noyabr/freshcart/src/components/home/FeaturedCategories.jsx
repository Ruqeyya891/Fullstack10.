import { featuredCategories } from "../../data";
import SectionTitle from "../common/SectionTitle";

export default function FeaturedCategories() {
  return (
    <section className="container-x my-12">
      <SectionTitle>Featured Categories</SectionTitle>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {featuredCategories.map(({ id, name, image }) => (
          <a
            key={id}
            href="#"
            className="group block rounded-lg border border-gray-200 p-4 text-center transition hover:border-primary hover:shadow-md"
          >
            <img
              src={image}
              alt={name}
              className="mx-auto h-24 w-24 object-contain transition group-hover:scale-105"
            />
            <p className="mt-3 text-sm font-medium text-gray-800">{name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
