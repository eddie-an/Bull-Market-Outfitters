import React from 'react';
import Testimonial from '../components/Testimonial';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow for the slider
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

// Custom Previous Arrow for the slider
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
  // Testimonial data
  const testimonials = [
    { id: 1, quote: "The only gear you'll need to tackle Wall Street!", author: "Josh P." },
    { id: 2, quote: "Finally, a store that understands my love for vests and spreadsheets!", author: "Anonymous" },
    { id: 3, quote: "Shopping here feels like a bull market!", author: "Melissa K." },
    { id: 4, quote: "The best service since my last quarterly earnings report!", author: "Amanda L." },
    { id: 5, quote: "These products deliver better ROI than my last investment!", author: "Tommy R." }
  ];

  const timelineData = [
    { year: '2020', event: 'Launched Bull Market Outfitters to gear up finance enthusiasts!' },
    { year: '2021', event: 'Expanded our offerings to include stylish yet professional apparel.' },
    { year: '2022', event: 'Launched our first line of finance-themed accessories!' },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    
    <div className='bg-gray-100'>
      <section className="text-center pt-28 mb-52"> {/* Add margin-left to separate text from image */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-12">Our Mission</h2>
        <p className="text-base sm:text-lg text-gray-500 p-6">
          To help you conquer the markets and the fashion world—because your portfolio isn’t the only thing that should be well-rounded!
        </p>
      </section>

      <div className="flex flex-col sm:flex-row items-center justify-between md:h-[350px] lg:h-[550px] mb-64">
        <div className='w-screen sm:w-1/2 h-72 sm:h-full'>
          <img src="/assets/windowview.jpg" alt="Window View" className="object-cover h-full w-full rounded-r-sm shadow-lg" />
        </div>
        <div className="md:ml-10 lg:ml-16 flex flex-col justify-center p-8 w-full sm:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-4">Elevate Your Style</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 font-medium leading-relaxed">
            Dress Like You Mean Business.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between md:h-[300px] lg:h-[450px] mb-52">
        <div className="ml-4 flex flex-col justify-center p-8 w-full sm:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-base text-gray-600 mb-10">
            At Bull Market Outfitters, we believe that looking good and feeling confident shouldn't be reserved for the boardroom. 
            Our journey began in 2020, fueled by a passion for finance and fashion. As finance enthusiasts ourselves, we recognized 
            a gap in the market for stylish yet professional apparel that resonates with our fellow market movers.
          </p>
          <p className="text-base text-gray-600 mb-10">
            What started as a small project has transformed into a community of like-minded individuals who understand that 
            confidence is the best investment. Each piece in our collection is crafted with quality and purpose, allowing 
            you to express your personality while tackling market challenges head-on.
          </p>
          <p className="text-base text-gray-600 mb-10">
            Join us on this journey as we continue to innovate and inspire, one stylish vest at a time. Because at Bull Market 
            Outfitters, we don’t just sell clothes; we help you build a wardrobe that reflects your ambitions!
          </p>
        </div>
        <div className='w-screen sm:w-1/3 h-72 sm:h-full'>
          <img src="/assets/suitandtie.jpg" alt="Window View" className="object-cover h-full w-full rounded-l-sm shadow-lg" />
        </div>
      </div>



      {/* Core Values */}
      <section className="mb-12 p-12">
        <h2 className="text-center text-2xl font-bold mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div className="p-4 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2">Quality</h3>
              <p className="text-gray-800">We believe in providing gear that withstands the test of both time and market fluctuations.</p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2">Integrity</h3>
              <p className="text-gray-800">Honesty is at the heart of our business.</p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2">Community</h3>
              <p className="text-gray-800">Our customers come before our shareholders</p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2">Innovation</h3>
              <p className="text-gray-800">We strive to continuously improve regardless of shareholder values.</p>
            </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-36">
        <h2 className="text-center text-2xl font-bold mb-6">Our Journey</h2>
        <ul className="space-y-4">
          {timelineData.map(({ year, event }, index) => (
            <li key={index} className="flex flex-col sm:flex-row justify-between bg-gray-100 p-4 rounded-md shadow-lg">
              <div className="text-xl font-bold text-green-600">{year}</div>
              <div className="text-gray-700 mt-2 sm:mt-0">{event}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="mb-0 pb-36">
      <h2 className="text-2xl font-bold text-center mb-2">What Customers Think</h2>
      <div className="carousel-container mx-12">
        <Slider {...settings}>
          {testimonials.map(({ id, quote, author }) => (
            <div key={id} className="rounded-md mx-2">
              <Testimonial testimonial={{ quote, author }} />
            </div>
          ))}
        </Slider>
      </div>
      </section>
      
    </div>
  );
}

export default About;
