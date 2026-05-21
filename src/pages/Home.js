import React, { useContext, useState, useEffect, useRef } from "react";
import ProductCard from "../components/ProductCard";
import HeroSection from "../components/HeroSection";
import PromotionBanner from "../components/PromotionBanner";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { ProductContext } from "../contexts/ProductContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const { products } = useContext(ProductContext);
  const [isSticky, setIsSticky] = useState(false);
  const collectionRef = useRef(null);
  const heroSectionRef = useRef(null);

  const handleScroll = () => {
    if (heroSectionRef.current) {
      const heroSectionBottom = heroSectionRef.current.getBoundingClientRect().bottom;
      setIsSticky(heroSectionBottom <= 80);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCollection = () => {
    collectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <div ref={heroSectionRef}>
        <HeroSection onScrollToCollection={scrollToCollection} />
      </div>

      <div className={`z-20 ${isSticky ? "sticky top-16 w-full sm:top-20" : "relative"}`}>
        <PromotionBanner />
      </div>

      <section ref={collectionRef} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="section-title">Our collection</h2>
          <p className="section-subtitle">
            Hand-picked pieces for the modern bull market
          </p>
        </div>

        {products?.length > 0 ? (
          <div className="carousel-container px-2 pb-8">
            <Slider {...settings}>
              {products.map((product) => (
                <div key={product._id} className="px-2">
                  <ProductCard product={product} />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </section>
    </>
  );
}

export default Home;
