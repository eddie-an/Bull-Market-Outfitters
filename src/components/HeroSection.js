import React, { useRef } from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ onScrollToCollection }) => {
  const shopNowRef = useRef(null);

  const scrollToShopNow = () => {
    if (onScrollToCollection) {
      onScrollToCollection();
    } else if (shopNowRef.current) {
      shopNowRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[85vh] min-h-[480px] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/nyse.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-900/50 to-brand-950/80" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-cream">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brass sm:text-sm">
          Premium finance lifestyle
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Look Good, Feel Bullish
        </h1>
        <p className="mt-4 max-w-xl text-base text-stone-200 sm:text-lg md:text-xl">
          Curated apparel and accessories for those who mean business — on and off the trading floor.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button type="button" onClick={scrollToShopNow} className="btn-primary">
            Shop the collection
          </button>
          <Link to="/shop" className="btn-secondary border-cream/30 bg-white/10 text-cream hover:bg-white/20 hover:text-white">
            Browse all
          </Link>
        </div>
      </div>
      <div ref={shopNowRef} className="absolute bottom-0" aria-hidden />
    </section>
  );
};

export default HeroSection;
