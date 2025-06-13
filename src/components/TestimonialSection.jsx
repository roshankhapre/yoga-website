import { useState, useEffect, useRef } from "react";
import { FaStar, FaQuoteLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya M.",
    role: "Preschool Director, Bangalore",
    quote:
      "After implementing these techniques, our yoga sessions have 90% better participation. The kids actually ask for yoga time now!",
    stars: 5,
    bg: "from-fuchsia-100 to-pink-100",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Rahul K.",
    role: "Kids Yoga Studio Owner, Delhi",
    quote:
      "The class themes doubled our retention rate. Parents keep telling me their children won't stop talking about 'yoga adventures'!",
    stars: 5,
    bg: "from-amber-100 to-orange-100",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Neha S.",
    role: "Montessori Teacher, Mumbai",
    quote:
      "I went from struggling to hold their attention for 5 minutes to leading full 30-minute engaging sessions. This training was revolutionary.",
    stars: 5,
    bg: "from-blue-100 to-cyan-100",
    image: "/images/testimonial3.jpg",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef(null);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    resetTimeout();
  };

  const prev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    resetTimeout();
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
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
  }, [index, isPlaying]);

  const t = testimonials[index];

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Floating gradient blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 opacity-20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 opacity-20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-amber-200 opacity-15 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 px-4 py-1.5 rounded-full mb-4 shadow-sm">
            Trusted by 500+ Educators
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Transforming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Kids Yoga
            </span>{" "}
            Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from educators who've revolutionized their teaching approach
            with our methods
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-full">
            <div
              className="relative h-full"
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              <div
                key={index}
                className={`bg-gradient-to-br ${t.bg} rounded-3xl p-1 shadow-xl h-full transition-opacity duration-500`}
              >
                <div className="bg-white rounded-[calc(1.5rem-2px)] p-8 h-full flex flex-col">
                  <div className="flex items-start mb-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg mr-4 border-2 border-white">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900">
                        {t.name}
                      </p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                      <div className="flex mt-1">
                        {[...Array(t.stars)].map((_, i) => (
                          <FaStar
                            key={i}
                            className="text-amber-400 mr-1 text-sm"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative text-gray-700 mb-6 flex-grow">
                    <FaQuoteLeft className="absolute top-0 left-0 text-pink-200 text-3xl" />
                    <p className="pl-8 text-lg italic">"{t.quote}"</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex gap-2">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => goToSlide(i)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            i === index ? "w-6 bg-pink-600" : "w-2 bg-gray-300"
                          }`}
                          aria-label={`Go to testimonial ${i + 1}`}
                        />
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={prev}
                        className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-pink-600 transition-colors shadow-sm"
                        aria-label="Previous testimonial"
                      >
                        <FaArrowLeft />
                      </button>
                      <button
                        onClick={next}
                        className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-pink-600 transition-colors shadow-sm"
                        aria-label="Next testimonial"
                      >
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features & Stats */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl border border-pink-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What You'll Achieve
              </h3>
              <ul className="space-y-3">
                {[
                  "Engage even the most energetic children",
                  "Create memorable yoga experiences",
                  "Reduce preparation time significantly",
                  "Build a loyal student community",
                  "Teach with confidence and joy",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-pink-500 mt-0.5 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "500+",
                  label: "Teachers Trained",
                  color: "text-pink-600",
                },
                {
                  value: "97%",
                  label: "Would Recommend",
                  color: "text-purple-600",
                },
                {
                  value: "50+",
                  label: "Class Themes",
                  color: "text-amber-600",
                },
                {
                  value: "4.98★",
                  label: "Avg Rating",
                  color: "text-green-600",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs text-center"
                >
                  <p className={`text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Ready to Transform Your Kids Yoga Classes?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join our next workshop and start creating magical yoga experiences
            for children
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#enroll"
              className="inline-block px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-purple-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              Enroll Now
            </a>
            <a
              href="#learn-more"
              className="inline-block px-6 py-3 text-gray-700 bg-white border border-gray-300 font-medium rounded-lg shadow-sm hover:bg-gray-50 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
