import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cancel() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 py-12 text-center">
      <div className="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-8 shadow-card sm:p-10">
        <img
          src="/assets/sad-face.png"
          alt="Payment cancelled"
          className="mx-auto mb-6 h-32 w-32 opacity-90"
        />
        <h1 className="font-display text-3xl font-bold text-ink">Payment cancelled</h1>
        <p className="mt-3 text-stone-600">
          No worries — your cart is still waiting. Try checkout again when you are ready.
        </p>
        <button type="button" onClick={() => navigate("/shop")} className="btn-primary mt-8">
          Return to shop
        </button>
      </div>
    </div>
  );
}
