import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-8xl font-bold text-brand-200">404</p>
      <h1 className="mt-2 font-display text-2xl font-semibold text-ink">Page not found</h1>
      <p className="mt-2 max-w-sm text-stone-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
