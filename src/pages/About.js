import React, { useContext } from 'react';
import { ProductContext } from "../contexts/ProductContext";
import Testimonial from '../components/Testimonial';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../index.css'; // Import the custom CSS


function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} absolute top-1/2 right-4 z-10 cursor-pointer transform -translate-y-1/2`} // Tailwind classes for positioning
        onClick={onClick}
      >
        <span className="text-3xl text-black">&#9654;</span> {/* Right arrow symbol */}
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute top-1/2 left-4 z-10 cursor-pointer transform -translate-y-1/2`} // Tailwind classes for positioning
        onClick={onClick}
      >
        <span className="text-3xl text-black">&#9664;</span> {/* Left arrow symbol */}
      </div>
    );
  }
  


function About() {
  const { products } = useContext(ProductContext);

  const testimonials = [
    { id: 1, quote: "The best eCommerce website of 2024", author: "Jonny Appleseed" },
    { id: 2, quote: "This has every product I need", author: "anonymous" },
    { id: 3, quote: "Same day delivery guaranteed", author: "Melissa K." },
    { id: 4, quote: "A seamless shopping experience from start to finish!", author: "Amanda L." },
    { id: 5, quote: "Incredible customer service, they go above and beyond.", author: "Tommy R." },
    { id: 6, quote: "Amazing discounts and fast delivery!", author: "Jennifer S." },
    { id: 7, quote: "Highly recommend to anyone who values quality.", author: "Greg W." },
    { id: 8, quote: "The product variety is unmatched. Found exactly what I was looking for.", author: "Sarah P." },
    { id: 9, quote: "I had an issue with my order, but their support team handled it like pros.", author: "David M." },
    { id: 10, quote: "I always come back because they offer such great deals.", author: "Elizabeth D." }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Centers the middle slide
    centerPadding: '0', // Removes padding around the center slide
    focusOnSelect: true, // Makes the center slide selectable
    nextArrow: <SampleNextArrow />, // Use the custom next arrow
    prevArrow: <SamplePrevArrow />, // Use the custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10">
        What customers think of ShopEase
      </h1>

      <div className="carousel-container m-10">
        <Slider {...settings}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default About;
