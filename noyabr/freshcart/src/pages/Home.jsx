import Hero from "../components/home/Hero";
import FeaturedCategories from "../components/home/FeaturedCategories";
import PromoBanners from "../components/home/PromoBanners";
import PopularProducts from "../components/home/PopularProducts";
import DailyBestSells from "../components/home/DailyBestSells";
import Features from "../components/home/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <PromoBanners />
      <PopularProducts />
      <DailyBestSells />
      <Features />
    </>
  );
}
