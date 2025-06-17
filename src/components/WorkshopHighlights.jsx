import {
  FaClock,
  FaStar,
  FaCheckCircle,
  FaChevronRight,
  FaRegHeart,
  FaLeaf,
} from "react-icons/fa";
import {
  GiLotus,
  GiSparkles,
  GiMeditation,
  GiYinYang,
  GiFlowerEmblem,
} from "react-icons/gi";
import { RiMentalHealthLine, RiLeafLine } from "react-icons/ri";
import { BsFlower1, BsStars } from "react-icons/bs";

const workshops = [
  {
    title: "5-Day Kids Yoga Teachers Workshop",
    duration: "5 Days | Live Online + Recordings",
    color: "from-purple-500 to-pink-500",
    bg: "bg-gradient-to-br from-purple-50 to-pink-50",
    border: "border-purple-200",
    features: [
      "🧘 Class Planning Frameworks",
      "👶👧👦 Age-wise Teaching Techniques (2–16 yrs)",
      "✨ Behaviour Management Tips",
      "🎓 Demo Classes & Assignments",
      "📜 Certificate of Completion",
    ],
    button: "Join the 5-Day Workshop",
    popular: true,
    price: "₹1,999 (₹2,999)",
    icon: <GiMeditation className="text-4xl text-purple-500" />,
    emoji: "🌈",
    badge: "Most Comprehensive",
  },
  {
    title: "50 Kids Yoga Class Themes Workshop",
    duration: "1 Day | 2-Hour Masterclass + Recording",
    color: "from-amber-500 to-orange-500",
    bg: "bg-gradient-to-br from-amber-50 to-orange-50",
    border: "border-amber-200",
    features: [
      "📚 PDF with 50 Unique Themes",
      "✏️ Theme-Based Class Planning Template",
      "🎭 Creative Engagement Techniques",
      "💡 Fresh Ideas for Every Week!",
    ],
    button: "Explore 50 Themes Workshop",
    price: "₹3,999 (₹4,999)",
    icon: <RiMentalHealthLine className="text-4xl text-amber-500" />,
    emoji: "🌟",
    badge: "Creative Boost",
  },
];

export default function WorkshopHighlights() {
  return (
    <section className="w-full py-28 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-pink-100 opacity-25 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple-100 opacity-20 blur-3xl animate-pulse"></div>

      {/* Floating yoga elements */}
      <div className="absolute top-12 right-12 text-4xl text-pink-200 animate-bounce-slow">
        <GiLotus />
      </div>
      <div className="absolute bottom-12 left-12 text-4xl text-yellow-200 animate-spin-slow">
        <GiYinYang />
      </div>
      <div className="absolute top-1/4 left-1/4 text-3xl text-green-200 animate-float">
        <RiLeafLine />
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-3xl text-blue-200 animate-float-reverse">
        <BsFlower1 />
      </div>
      <div className="absolute top-1/3 right-1/3 text-2xl text-purple-200 animate-pulse">
        <BsStars />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-pink-100 to-yellow-100 text-pink-700 text-sm font-semibold shadow-sm mb-6 flex items-center justify-center w-max mx-auto gap-2">
            <GiFlowerEmblem /> 🌟 Signature Learning Path
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
            Empower Kids with the{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Magic of Yoga
            </span>{" "}
            🧘✨
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Two transformational online workshops designed especially for Kids
            Yoga Teachers to help you teach with confidence, creativity, and
            joy. <span className="text-xl">🌿</span>
          </p>
        </div>

        {/* Workshop Cards */}
        <div className="grid gap-10 lg:grid-cols-2">
          {workshops.map((workshop, index) => {
            const colorBase = workshop.color.split("-")[1];
            const whatsappMessage = `Hi! I'm interested in the ${workshop.title}. Please send me more details.`;
            const whatsappLink = `https://wa.me/918281094117?text=${encodeURIComponent(
              whatsappMessage
            )}`;

            return (
              <div
                key={index}
                className={`relative group rounded-3xl overflow-hidden p-[2px] bg-gradient-to-br ${workshop.color} transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl`}
              >
                {workshop.popular && (
                  <div className="absolute top-1 right-1 z-30 bg-yellow-400 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md flex items-center">
                    <FaStar className="mr-2" />
                    BEST SELLER
                  </div>
                )}

                <div
                  className={`${workshop.bg} rounded-3xl p-8 h-full relative overflow-hidden`}
                >
                  {/* Card decorative elements */}
                  <div className="absolute -bottom-10 -right-10 text-8xl opacity-5 text-${colorBase}-500">
                    {workshop.icon}
                  </div>

                  <div className="flex flex-col h-full relative z-10">
                    <div className="mb-4 flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {workshop.title} {workshop.emoji}
                        </h3>
                        <p className="text-gray-500 text-sm flex items-center gap-2">
                          <FaClock className={`text-${colorBase}-500`} />{" "}
                          {workshop.duration}
                        </p>
                      </div>
                      <span
                        className={`bg-${colorBase}-100 text-${colorBase}-800 text-xs px-3 py-1 rounded-full font-medium`}
                      >
                        {workshop.badge}
                      </span>
                    </div>

                    <div className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="text-gray-400 line-through mr-2 text-xl">
                        {workshop.price.match(/\((.*?)\)/)?.[1]}
                      </span>
                      <span className="text-3xl text-green-600 font-bold">
                        {workshop.price.split(" ")[0]}
                      </span>
                      <span className="ml-3 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        💰 Limited Time Offer
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
                          <span className="hover:text-gray-900 transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full group relative overflow-hidden bg-gradient-to-br ${workshop.color} hover:shadow-lg text-white px-6 py-4 rounded-xl text-md font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 border-2 border-white`}
                      >
                        <span className="relative z-10">{workshop.button}</span>
                        <FaChevronRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                      </a>
                      <p className="text-xs text-gray-500 mt-2 text-center flex items-center justify-center gap-1">
                        <FaRegHeart className="text-pink-400" /> Loved by 500+
                        yoga teachers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Combo Offer */}
        <div className="mt-16 text-center relative bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-100 shadow-md">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
            <GiSparkles /> SPECIAL COMBO
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gray-800">
            🎉 Double the Learning, Double the Fun!
          </h3>
          <p className="text-gray-600 mb-1">
            Combined Value: <strike>₹7,998</strike> |{" "}
            <strong className="text-green-600">Offer Price: ₹5,499</strong>
          </p>
          <p className="text-green-600 font-medium mb-4">
            ✅ Save ₹2,499 when you enroll together!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a
              href="https://wa.me/918281094117?text=Hi! I'm interested in enrolling in both Kids Yoga Workshops. Please send me the details and payment link."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-md mx-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white transition font-semibold shadow-lg hover:shadow-xl"
            >
              Enroll in Both Workshops
              <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-2">
            <GiSparkles className="text-yellow-400" />
            30-Day Satisfaction Guarantee
          </div>
        </div>
      </div>
    </section>
  );
}
