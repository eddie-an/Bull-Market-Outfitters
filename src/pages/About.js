import React from 'react';
import Testimonial from '../components/Testimonial';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 right-4 z-10 cursor-pointer transform -translate-y-1/2`}
      onClick={onClick}
    >
      <span className="text-3xl text-black">&#9654;</span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 left-4 z-10 cursor-pointer transform -translate-y-1/2`}
      onClick={onClick}
    >
      <span className="text-3xl text-black">&#9664;</span>
    </div>
  );
}

function About() {
  const testimonials = [
    { id: 1, quote: "The best eCommerce website of 2024", author: "Jonny Appleseed" },
    { id: 2, quote: "This has every product I need", author: "Anonymous" },
    { id: 3, quote: "Same day delivery guaranteed", author: "Melissa K." },
    { id: 4, quote: "A seamless shopping experience from start to finish!", author: "Amanda L." },
    { id: 5, quote: "Incredible customer service, they go above and beyond.", author: "Tommy R." }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="relative">
        <img src="/path/to/hero-image.jpg" alt="Hero" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl text-white font-bold">Welcome to Everyday Hero Supply Co.</h1>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="text-center mt-10 mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">To empower everyone to embrace their inner hero through quality products and outstanding service.</p>
      </section>

      {/* Core Values */}
      <section className="mb-12">
        <h2 className="text-center text-2xl font-bold mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="font-semibold">Quality</h3>
            <p className="text-gray-600">We believe in providing only the best.</p>
          </div>
          <div>
            <h3 className="font-semibold">Integrity</h3>
            <p className="text-gray-600">Honesty is at the heart of our business.</p>
          </div>
          <div>
            <h3 className="font-semibold">Community</h3>
            <p className="text-gray-600">Supporting our customers and community.</p>
          </div>
          <div>
            <h3 className="font-semibold">Innovation</h3>
            <p className="text-gray-600">We strive to continuously improve.</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-12">
        <h2 className="text-center text-2xl font-bold mb-6">Our Journey</h2>
        <ul className="space-y-4">
          <li className="flex flex-col sm:flex-row justify-between">
            <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-md">
              <h3 className="font-semibold">2020</h3>
              <p>Founded Everyday Hero Supply Co. with a vision to empower everyday heroes.</p>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row justify-between">
            <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-md">
              <h3 className="font-semibold">2021</h3>
              <p>Launched our first product line focused on fitness gear.</p>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row justify-between">
            <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-md">
              <h3 className="font-semibold">2022</h3>
              <p>Expanded our offerings to include a wider range of everyday essentials.</p>
            </div>
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">What Customers Think</h2>
      <div className="carousel-container m-10">
        <Slider {...settings}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Call to Action */}
      <section className="text-center my-12">
        <h2 className="text-xl font-semibold mb-4">Join Us!</h2>
        <p className="mb-4">Become part of our community and embrace your inner hero.</p>
        <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Shop Now</button>
      </section>
    </div>
  );
}

export default About;
