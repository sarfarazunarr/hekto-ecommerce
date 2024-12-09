import Categories from "@/components/Categories";
import Companies from "@/components/Companies";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import LatestBlogs from "@/components/LatestBlogs";
import LatestProducts from "@/components/LatestProducts";
import ProductBanner from "@/components/ProductBanner";
import PromotedProduct from "@/components/PromotedProduct";
import Subscription from "@/components/Subscription";
import SupportCard from "@/components/SupportCard";
import TrendingProducts from "@/components/TrendingProducts";

export default function Home() {
  return (
   <>
    <Hero />
    <FeaturedProducts />
    <LatestProducts />
    <SupportCard />
    <PromotedProduct />
    <TrendingProducts />
    <ProductBanner />
    <Categories />
    <Subscription />
    <Companies />
    <LatestBlogs />
   </>
  );
}
