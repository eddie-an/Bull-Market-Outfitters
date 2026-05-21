import React from "react";
import Testimonial from "../components/Testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const testimonials = [
    { id: 1, quote: "The only gear you'll need to tackle Wall Street!", author: "Josh P." },
    { id: 2, quote: "Finally, a store that understands my love for vests and spreadsheets!", author: "Anonymous" },
    { id: 3, quote: "Shopping here feels like a bull market!", author: "Melissa K." },
    { id: 4, quote: "The best service since my last quarterly earnings report!", author: "Amanda L." },
    { id: 5, quote: "These products deliver better ROI than my last investment!", author: "Tommy R." },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "24px",
    slidesToShow: 2,
    speed: 500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-cream">
      <section className="border-b border-stone-200 bg-gradient-to-br from-brand-900 to-brand-950 px-4 py-20 text-center text-cream">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">Our story</p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">About us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-brand-100">
          To help you conquer the markets and the fashion world — because your portfolio
          is not the only thing that should be well-rounded.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="overflow-hidden rounded-2xl shadow-card">
          <img
            src="/assets/windowview.jpg"
            alt="Office view"
            className="h-72 w-full object-cover lg:h-[420px]"
          />
        </div>
        <div>
          <h2 className="section-title">Elevate your style</h2>
          <p className="section-subtitle mt-4 text-left">
            Dress like you mean business — on the trading floor and beyond.
          </p>
        </div>
      </section>

      <section className="bg-parchment/50 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-2 lg:px-8">
          <div className="order-2 lg:order-1">
            <h2 className="section-title">Our story</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-stone-700 sm:text-base">
              <p>
                At Bull Market Outfitters, we believe that looking good and feeling confident
                should not be reserved for the boardroom. Our journey began in 2020, fueled by a
                passion for finance and fashion.
              </p>
              <p>
                What started as a small project has transformed into a community of like-minded
                individuals who understand that confidence is the best investment.
              </p>
              <p>
                Join us as we continue to innovate and inspire — one stylish vest at a time.
              </p>
            </div>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl shadow-card lg:order-2">
            <img
              src="/assets/suitandtie.jpg"
              alt="Professional attire"
              className="h-72 w-full object-cover lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="section-title">What customers think</h2>
        </div>
        <Slider {...settings}>
          {testimonials.map(({ id, quote, author }) => (
            <div key={id}>
              <Testimonial testimonial={{ quote, author }} />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default About;
