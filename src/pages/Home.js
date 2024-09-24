import React, { useContext, useState, useEffect, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/HeroSection';
import PromotionBanner from '../components/PromotionBanner';
import { ProductContext } from "../contexts/ProductContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const { products } = useContext(ProductContext);
  const [isSticky, setIsSticky] = useState(false);
  const heroSectionRef = useRef(null);

  // Scroll event handler
  const handleScroll = () => {
    if (heroSectionRef.current) {
      const heroSectionBottom = heroSectionRef.current.getBoundingClientRect().bottom;
      setIsSticky(heroSectionBottom <= 80);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // react-slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <>
      <div ref={heroSectionRef}>
        <HeroSection />
      </div>

      <div className={`mb-24 z-20 ${isSticky ? 'sticky sm:top-20 top-14 w-full' : 'relative'}`}>
        <PromotionBanner />
      </div>

      <h4 className="mt-8 text-center text-xl md:text-2xl font-semibold mb-4 text-gray-800">New Items</h4>
      <div className="carousel-container m-10 mb-52">
        <Slider {...settings}>
          {products.map(product => (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Featured Collections Section */}
      <section className="featured-collections text-center my-16">
        <h4 className="text-2xl font-semibold mb-4">Featured Collections</h4>
        <div className="flex justify-center">
          <button className="mx-2 p-2 bg-blue-500 text-white rounded">Best Sellers</button>
          <button className="mx-2 p-2 bg-blue-500 text-white rounded">New Arrivals</button>
          <button className="mx-2 p-2 bg-blue-500 text-white rounded">Top Rated Gear</button>
        </div>
      </section>

      {/* Newsletter Sign-Up */}
      <section className="newsletter my-16 text-center">
        <h4 className="text-2xl font-semibold mb-4">Stay Updated!</h4>
        <p className="mb-4">Join our newsletter for exclusive deals and updates.</p>
        <input type="email" placeholder="Enter your email" className="p-2 border rounded" />
        <button className="ml-2 p-2 bg-blue-500 text-white rounded">Subscribe</button>
      </section>
    </>
  );
}

export default Home;
