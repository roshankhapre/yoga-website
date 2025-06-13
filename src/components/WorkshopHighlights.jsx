import { FaClock, FaStar, FaCheckCircle, FaChevronRight } from "react-icons/fa";
import { GiLotus, GiSparkles } from "react-icons/gi";

const workshops = [
  {
    title: "5-Day Kids Yoga Teachers Workshop",
    duration: "5 Days | Live Online + Recordings",
    color: "from-purple-500 to-pink-500",
    bg: "bg-gradient-to-br from-purple-50 to-pink-50",
    border: "border-purple-200",
    features: [
      "Class Planning Frameworks",
      "Age-wise Teaching Techniques (2–16 yrs)",
      "Behaviour Management Tips",
      "Demo Classes & Assignments",
      "Certificate of Completion",
    ],
    button: "Join the 5-Day Workshop",
    popular: true,
    price: "₹1,999 (₹2,999)",
  },
  {
    title: "50 Kids Yoga Class Themes Workshop",
    duration: "1 Day | 2-Hour Masterclass + Recording",
    color: "from-amber-500 to-orange-500",
    bg: "bg-gradient-to-br from-amber-50 to-orange-50",
    border: "border-amber-200",
    features: [
      "PDF with 50 Unique Themes",
      "Theme-Based Class Planning Template",
      "Creative Engagement Techniques",
      "Fresh Ideas for Every Week!",
    ],
    button: "Explore 50 Themes Workshop",
    price: "₹3,999 (₹4,999)",
  },
];

export default function WorkshopHighlights() {
  return (
    <section className="w-full py-28 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Decorative sparkles and blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-pink-100 opacity-25 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple-100 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute top-12 right-12 text-4xl text-pink-200 animate-bounce-slow z-0">
        <GiSparkles />
      </div>
      <div className="absolute bottom-12 left-12 text-4xl text-yellow-200 animate-spin-slow z-0">
        <GiLotus />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-pink-100 to-yellow-100 text-pink-700 text-sm font-semibold shadow-sm">
            🌟 Signature Learning Path
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
            Empower Kids with the{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Magic of Yoga
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Two transformational online workshops designed especially for Kids
            Yoga Teachers to help you teach with confidence, creativity, and
            joy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 lg:grid-cols-2">
          {workshops.map((workshop, index) => {
            const colorBase = workshop.color.split("-")[1];
            return (
              <div
                key={index}
                className={`relative group rounded-3xl overflow-hidden p-[2px] bg-gradient-to-br ${workshop.color} transition-transform duration-300 hover:scale-[1.03] shadow-xl`}
              >
                {workshop.popular && (
                  <div className="absolute top-1 right-1 z-30 bg-yellow-400 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md flex items-center">
                    <FaStar className="mr-2" />
                    BEST SELLER
                  </div>
                )}

                <div className={`${workshop.bg} rounded-3xl p-8 h-full`}>
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {workshop.title}
                      </h3>
                      <p className="text-gray-500 text-sm flex items-center gap-2">
                        <FaClock className={`text-${colorBase}-500`} />{" "}
                        {workshop.duration}
                      </p>
                    </div>

                    <div className="text-2xl font-bold text-gray-900 mb-6">
                      <span className="text-gray-400 line-through mr-2 text-xl">
                        {workshop.price.match(/\((.*?)\)/)?.[1]}
                      </span>
                      <span className="text-3xl text-green-600 font-bold">
                        {workshop.price.split(" ")[0]}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-6 flex-grow">
                      {workshop.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-700 text-sm"
                        >
                          <FaCheckCircle
                            className={`text-${colorBase}-500 mt-1 mr-3 flex-shrink-0`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <button
                        className={`w-full group relative overflow-hidden bg-gradient-to-br ${workshop.color} hover:shadow-lg text-white px-6 py-3 rounded-xl text-md font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2`}
                      >
                        <span className="relative z-10">{workshop.button}</span>
                        <FaChevronRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Combo Offer */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">
            🎉 Combo Offer: Enroll in Both Workshops
          </h3>
          <p className="text-gray-600">
            Combined Value:<strike> ₹7,998</strike>|{" "}
            <strong>Offer Price: ₹5,499</strong>
          </p>
          <p className="text-green-600 font-medium mt-1">
            ✅ Save ₹2,499 when you enroll together!
          </p>
          <button className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white transition font-semibold shadow-lg">
            Enroll in Both
            <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
