import trainerImg from "../assets/yoga-trainer.webp";
import { FaQuoteLeft, FaLeaf, FaOm, FaSpa, FaYinYang } from "react-icons/fa";

export default function AboutUS() {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-24 px-6 md:px-20 overflow-hidden relative">
      {/* Nature-inspired decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 opacity-10 text-purple-300">
          <FaYinYang className="text-8xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 text-pink-300">
          <FaOm className="text-8xl" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-10 text-rose-300">
          <FaLeaf className="text-6xl" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-20">
        {/* Section 1: Intro */}
        <div className="text-center relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-20">
            <FaOm className="text-6xl text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
            Meet <span className="font-serif italic">Steni</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Certified Kids Yoga Educator bringing calm, confidence, and
            creativity to children through mindful movement
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Section 2: Profile & Timeline */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Trainer Image - Enhanced with yoga elements */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="relative overflow-hidden rounded-full border-8 border-white shadow-2xl">
              <img
                src={trainerImg}
                alt="Trainer Steni"
                className="w-64 h-64 md:w-80 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-lg font-bold text-sm">
              Certified Yoga Trainer
            </div>
          </div>

          {/* Journey Timeline - Enhanced with yoga theme */}
          <div className="flex-1 space-y-6">
            {[
              {
                icon: <FaLeaf className="text-2xl text-pink-500" />,
                year: "2010",
                title: "Yoga Journey Begins",
                text: "Started her path to make movement magical for children through yoga",
                color: "border-l-pink-400 bg-pink-50",
              },
              {
                icon: <FaSpa className="text-2xl text-purple-500" />,
                year: "2014",
                title: "Advanced Training",
                text: "Trained in multiple yoga traditions and developed a playful approach for young learners",
                color: "border-l-purple-400 bg-purple-50",
              },
              {
                icon: <FaYinYang className="text-2xl text-rose-500" />,
                year: "2018",
                title: "Curriculum Development",
                text: "Designed creative yoga modules now used in schools and workshops across India",
                color: "border-l-rose-400 bg-rose-50",
              },
              {
                icon: <FaOm className="text-2xl text-indigo-500" />,
                year: "Present",
                title: "Teaching Educators",
                text: "Guides aspiring teachers through joyful and engaging Aatmya workshops",
                color: "border-l-indigo-400 bg-indigo-50",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start p-5 rounded-xl border-l-4 ${item.color} shadow-md hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="mr-4 flex flex-col items-center">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold mt-1 text-gray-500">
                    {item.year}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Testimonial - Enhanced design */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-8 -left-8 text-8xl text-pink-100 z-0">
            <FaQuoteLeft />
          </div>
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10 z-10">
            <p className="text-lg md:text-xl text-gray-700 italic relative z-10">
              "Steni's sessions are a perfect blend of magic and movement. My
              child not only enjoys yoga but has become more focused, confident,
              and emotionally balanced."
            </p>
            <div className="flex items-center justify-end mt-6">
              <div className="text-right">
                <p className="font-bold text-pink-600">- Priya M.</p>
                <p className="text-sm text-gray-500">
                  Parent & Yoga Enthusiast
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Certifications - Enhanced badge design */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-8">
            Certifications & Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {[
              { text: "RYT-200 Certified", icon: "🧘‍♀️" },
              { text: "Kids Yoga Specialist", icon: "👶" },
              { text: "Mindfulness Coach", icon: "🌿" },
              { text: "10+ Years Experience", icon: "🌟" },
              { text: "Yoga Alliance Member", icon: "📜" },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center bg-white px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <span className="mr-2">{badge.icon}</span>
                <span className="text-sm font-semibold text-gray-700">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Call to Action - Enhanced with yoga elements */}
        <div className="text-center mt-12">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl blur opacity-75"></div>
            <a
              href="https://wa.me/918281094117?text=Hi%20Steni%2C%20I%27m%20interested%20in%20the%20Kids%20Yoga%20Workshops.%20Could%20you%20please%20share%20more%20details%20about%20both%20the%205-Day%20Training%20and%20the%2050%20Creative%20Themes%20Masterclass%3F%20Looking%20forward%20to%20joining%21"
              className="relative inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaOm className="inline mr-2" />
              Begin Your Yoga Teaching Journey
            </a>
          </div>
          <p className="text-gray-500 mt-4 text-sm">
            Limited spots available for upcoming workshops
          </p>
        </div>
      </div>
    </section>
  );
}
