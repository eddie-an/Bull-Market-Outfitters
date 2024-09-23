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
    dots: true, // Enables dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Animation speed in ms
    slidesToShow: 4, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll on navigation
    responsive: [ // Responsive breakpoints
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
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

      {/* Carousel with react-slick */}
      <div className="carousel-container m-10 mb-52">
        <Slider {...settings}>
          {products.map(product => (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Home;
