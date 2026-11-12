import { FiArrowRight } from "react-icons/fi";
import { dailyBestSells } from "../../data";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "../common/ProductCard";

export default function DailyBestSells() {
  const { title, text, banner, products } = dailyBestSells;

  return (
    <section className="container-x my-12">
      <SectionTitle>Daily Best Sells</SectionTitle>

      <div className="grid gap-4 lg:grid-cols-4">
        <div
          className="flex min-h-[370px] flex-col justify-start rounded-xl bg-cover bg-center p-6"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <h4 className="text-xl font-bold text-white">{title}</h4>
          <p className="mt-1 text-sm text-white">{text}</p>

          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 self-start rounded-md bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-green-800"
          >
            Shop Now
            <FiArrowRight />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} buttonText="Add to Cart" />
          ))}
        </div>
      </div>
    </section>
  );
}
