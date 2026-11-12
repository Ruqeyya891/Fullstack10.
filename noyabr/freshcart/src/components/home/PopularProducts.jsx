import { popularProducts } from "../../data";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "../common/ProductCard";

export default function PopularProducts() {
  return (
    <section className="container-x my-12">
      <SectionTitle>Popular Products</SectionTitle>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {popularProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
