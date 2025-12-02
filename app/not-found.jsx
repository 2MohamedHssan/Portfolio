"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="bg-[#323846] flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-teal-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-6">
        Oops! Page Not Found
      </h2>
      <p className="text-white mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link prefetch href="/">
        <p className="px-6 py-3 bg-teal-500 text-white text-sm font-medium rounded-md hover:bg-teal-600 transition-colors">
          Go Back Home
        </p>
      </Link>
      {/* <img
        src="https://via.placeholder.com/500x300?text=Not+Found"
        alt="Not Found Illustration"
        className="mt-8 w-full max-w-lg"
      /> */}
    </div>
  );
};

export default NotFoundPage;
