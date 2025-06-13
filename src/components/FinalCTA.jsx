import { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const testimonials = [
  "This workshop gave me everything I needed to teach kids yoga confidently!",
  "Loved the creativity & practical tools. My classes are now joyful and structured.",
  "As a school teacher, this helped me integrate yoga in a fun, age-appropriate way.",
];

const FinalCTA = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef(null);

  const next = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % testimonials.length);
    resetTimeout();
  };

  const goToSlide = (index) => {
    setCurrent(index);
    resetTimeout();
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (isPlaying) {
      timeoutRef.current = setTimeout(next, 5000);
    }
  };

  useEffect(() => {
    resetTimeout();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current, isPlaying]);

  return (
    <section className="relative w-full py-24 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-purple-100 overflow-hidden">
      {/* Subtle Background Pattern */}
      <svg
        className="absolute top-0 left-0 w-[400px] opacity-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f472b6"
          d="M37.8,-58.1C49.7,-50.4,61.5,-41.6,63.5,-30.9C65.5,-20.2,57.8,-7.5,54.7,5.7C51.5,18.9,53,32.7,47.1,44.8C41.2,56.8,27.9,67.1,13.2,70.7C-1.5,74.3,-17.5,71.2,-29.2,63.3C-40.9,55.4,-48.4,42.6,-56.5,30C-64.6,17.3,-73.3,4.9,-72.7,-7.8C-72.1,-20.5,-62.2,-33.5,-50.6,-41.7C-39,-50,-26,-53.4,-13.4,-60.7C-0.7,-68,11.6,-79.2,23.7,-77.6C35.8,-76,47.8,-61.6,37.8,-58.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23f3e8ff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E')] opacity-30 -z-10"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 transform transition-all duration-500">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-poppins">
            Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Kids Yoga
            </span>{" "}
            Classes
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10 font-inter">
            Designed by an experienced kids' yoga teacher, our workshops empower
            you to create joyful, safe, and impactful classes, perfect for
            beginners or school educators.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="mb-12"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <div
            key={current}
            className="bg-white rounded-2xl p-1 shadow-lg bg-gradient-to-br from-purple-100 to-pink-100 transform transition-all duration-500"
          >
            <div className="bg-white rounded-[calc(1.5rem-2px)] px-6 py-4 text-gray-600 text-base md:text-lg italic font-inter">
              "{testimonials[current]}"
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  current === index ? "bg-purple-600 scale-125" : "bg-gray-200"
                } hover:bg-purple-400`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
          <a
            href="#enroll"
            className="inline-block px-8 py-4 text-white bg-gradient-to-r from-purple-500 to-pink-500 font-medium rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 font-poppins"
            aria-label="Join the 5-Day Workshop"
          >
            Join the 5-Day Workshop <FaArrowRight className="inline ml-2" />
          </a>
          <a
            href="#schedule"
            className="inline-block px-8 py-4 text-purple-700 bg-white border border-purple-300 font-medium rounded-lg shadow-md transition-all duration-300 hover:bg-purple-50 transform hover:scale-105 font-poppins"
            aria-label="Schedule a Free Session"
          >
            Schedule a Free Session <FaArrowRight className="inline ml-2" />
          </a>
        </div>
      </div>

      {/* CSS for Transitions */}
      <style jsx>{`
        .transform {
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;
