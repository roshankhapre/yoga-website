import { useState } from "react";
import { FaChevronDown, FaQuestionCircle, FaArrowRight } from "react-icons/fa";

const faqs = [
  {
    question: "Do I need prior yoga teaching experience?",
    answer:
      "Not at all! Both workshops are beginner-friendly and also offer fresh insights for experienced teachers.",
    category: "Workshop Requirements",
  },
  {
    question: "Will I get recordings if I miss the live session?",
    answer:
      "Yes! All sessions are recorded and you'll have access to them for a limited period after the workshop.",
    category: "Access & Materials",
  },
  {
    question: "Are these workshops suitable for school teachers?",
    answer:
      "Absolutely. They're perfect for educators looking to bring yoga into their classrooms or activities.",
    category: "Audience",
  },
  {
    question: "Do I get a certificate after completion?",
    answer:
      "Yes, you will receive a participation certificate for each completed workshop.",
    category: "Certification",
  },
  {
    question: "What's the refund policy?",
    answer:
      "We offer a 7-day money-back guarantee if you're not satisfied with the workshop content.",
    category: "Payments",
  },
  {
    question: "Can I take both workshops together?",
    answer:
      "Yes! Many participants enroll in both for a comprehensive learning experience at a discounted bundle price.",
    category: "Workshop Options",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(faqs.map((faq) => faq.category))];
  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="relative w-full py-24 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      {/* Decorative Yoga Emojis */}
      <div className="animate-bounce absolute top-6 left-6 text-5xl opacity-10 select-none pointer-events-none">
        🧘‍♀️
      </div>
      <div className="animate-bounce absolute top-6 right-6 text-5xl opacity-10 select-none pointer-events-none">
        🌿
      </div>
      <div className="animate-bounce absolute bottom-6 left-6 text-5xl opacity-10 select-none pointer-events-none">
        ☀️
      </div>
      <div className="animate-bounce absolute bottom-6 right-6 text-5xl opacity-10 select-none pointer-events-none">
        🧒
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23f3e8ff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E')] opacity-30 -z-10"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 text-purple-700 text-sm font-medium mb-4 shadow-md font-poppins">
            <FaQuestionCircle className="mr-2" />
            Have Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Yoga Questions
            </span>{" "}
            Answered
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Explore answers to common questions about our kids' yoga workshops
            and programs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium font-poppins ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-purple-200 hover:bg-purple-50 hover:border-purple-300"
              }`}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md border border-purple-100 overflow-hidden ${
                openIndex === index ? "ring-2 ring-purple-500" : ""
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left p-6 hover:bg-purple-50"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-900 font-poppins">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`text-gray-400 transition-transform ${
                    openIndex === index ? "rotate-180 text-purple-600" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`${openIndex === index ? "block" : "hidden"}`}
              >
                <div className="px-6 pb-6 pr-4">
                  <p className="text-gray-600 font-inter">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-xl shadow-lg border border-purple-100 p-8 bg-gradient-to-br from-purple-50 to-pink-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-4 font-inter">
              Our friendly support team is here to assist you!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-purple-600 to-pink-500 font-medium rounded-lg shadow-md font-poppins"
              aria-label="Contact Support"
            >
              Contact Support <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
