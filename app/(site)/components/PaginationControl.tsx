'use client'

import Link from "next/link";

const PaginationControl = ({ currentPage, hasNextPage }: any) => {
  // Custom smooth scroll function to make it slower
  function scrollToTop() {
    const targetPosition = 600; // Position to scroll to
    const startPosition = window.scrollY; // Current scroll position
    const distance = targetPosition - startPosition; // Distance to scroll
    let startTime: number | null = null;
    const duration = 1000; // Duration in milliseconds, adjust for slower or faster

    // Function to animate the scroll
    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function to control the rate of change (ease-in-out effect)
    function ease(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    // Start the animation
    requestAnimationFrame(animation);
  }

  return (
    <div className="flex justify-center mt-8">
      {currentPage > 1 && (
        <Link
          href={`/?page=${currentPage - 1}`}
          className="px-4 py-2 bg-gray-200 rounded mr-2"
          onClick={scrollToTop}
        >
          Previous
        </Link>
      )}
      {hasNextPage && (
        <Link
          href={`/?page=${currentPage + 1}`}
          className="px-4 py-2 bg-gray-200 rounded ml-2"
          onClick={scrollToTop}
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default PaginationControl;
