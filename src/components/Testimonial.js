import React from "react";

export default function Testimonial({ testimonial }) {
  return (
    <blockquote className="mx-2 my-4 rounded-2xl border border-stone-200/80 bg-white p-6 shadow-card transition duration-300 hover:shadow-card-hover sm:p-8">
      <p className="font-display text-lg leading-relaxed text-ink sm:text-xl">
        &ldquo;{testimonial?.quote}&rdquo;
      </p>
      <footer className="mt-4 text-sm font-medium text-brand-600">
        — {testimonial?.author}
      </footer>
    </blockquote>
  );
}
