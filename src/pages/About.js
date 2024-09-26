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
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 2.5,
    speed: 500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2.5 } },
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

      <div className="flex flex-col md:flex-row items-center justify-between md:h-[400px] lg:h-[550px] mb-52">
        <div className="ml-4 order-2 md:order-1 flex flex-col justify-start lg:justify-center p-8 w-full sm:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-base md:text-sm lg:text-base text-gray-600 mb-10">
            At Bull Market Outfitters, we believe that looking good and feeling confident shouldn't be reserved for the boardroom. 
            Our journey began in 2020, fueled by a passion for finance and fashion. As finance enthusiasts ourselves, we recognized 
            a gap in the market for stylish yet professional apparel that resonates with our fellow market movers.
          </p>
          <p className="text-base md:text-sm lg:text-base text-gray-600 mb-10">
            What started as a small project has transformed into a community of like-minded individuals who understand that 
            confidence is the best investment. Each piece in our collection is crafted with quality and purpose, allowing 
            you to express your personality while tackling market challenges head-on.
          </p>
          <p className="text-base md:text-sm lg:text-base text-gray-600 mb-10">
            Join us on this journey as we continue to innovate and inspire, one stylish vest at a time. Because at Bull Market 
            Outfitters, we don’t just sell clothes; we help you build a wardrobe that reflects your ambitions!
          </p>
        </div>
        <div className='w-screen md:w-1/3 h-72 md:h-full order-1 md:order-2'>
          <img src="/assets/suitandtie.jpg" alt="Window View" className="object-cover h-full w-full rounded-l-sm shadow-lg" />
        </div>
      </div>


      {/* Testimonials Section */}
      <section className="mb-0 pb-36">
      <h2 className="text-2xl font-bold text-center mb-2">What Customers Think</h2>
      <div className="carousel-container mx-12 my-8">
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
