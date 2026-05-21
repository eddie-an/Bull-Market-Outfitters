import React from "react";

const PromotionBanner = () => {
  return (
    <div className="w-full border-y border-brand-200/60 bg-gradient-to-r from-brand-800 via-brand-700 to-brand-800 px-4 py-3 text-center shadow-sm">
      <p className="text-xs font-semibold tracking-wide text-cream sm:text-sm">
        <span className="text-brass">New arrivals</span>
        <span className="mx-2 text-brand-200">·</span>
        Up to 50% off select items — limited time
      </p>
    </div>
  );
};

export default PromotionBanner;
