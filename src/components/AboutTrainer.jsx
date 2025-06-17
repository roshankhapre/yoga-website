import trainerImg from "../assets/yoga-trainer.webp";
import { FaQuoteLeft } from "react-icons/fa";

export default function AboutTrainer() {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-rose-100 to-purple-50 py-24 px-6 md:px-20 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-200 opacity-30 blur-3xl rounded-full z-0"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-300 opacity-20 blur-3xl rounded-full z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-pink-600">
            Meet <span className="text-purple-600">Steni</span> – Your Kids Yoga
            Mentor
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4">
            A certified Kids Yoga Educator transforming young lives through
            movement, mindfulness, and magic.
          </p>
        </div>

        {/* Trainer Info Row */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          {/* Image + Badge */}
          <div className="relative group shrink-0">
            <img
              src={trainerImg}
              alt="Trainer Steni"
              className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full border-8 border-white shadow-2xl transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-yellow-400 text-white text-sm px-4 py-1 rounded-full shadow-lg font-semibold">
              Certified Trainer
            </div>
          </div>

          {/* Timeline */}
          <div className="flex-1 space-y-6">
            {[
              {
                icon: "🌱",
                text: "Started her yoga journey to make movement magical for children.",
                color: "border-l-yellow-400",
              },
              {
                icon: "🧘‍♀️",
                text: "Trained in multiple yoga traditions and created a kid-friendly approach.",
                color: "border-l-pink-400",
              },
              {
                icon: "📚",
                text: "Crafted creative modules used in schools across India.",
                color: "border-l-purple-400",
              },
              {
                icon: "🌟",
                text: "Empowering educators through joyful Aatmya workshops.",
                color: "border-l-green-400",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start bg-white shadow-lg rounded-xl px-6 py-4 border-l-4 ${item.color} hover:scale-[1.015] transition-transform`}
              >
                <div className="text-2xl mr-4">{item.icon}</div>
                <p className="text-gray-700 text-base font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote & Certification */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Testimonial */}
          <div className="bg-white rounded-xl shadow-xl p-8 relative">
            <FaQuoteLeft className="text-pink-400 text-4xl absolute -top-6 left-4 opacity-50" />
            <p className="text-lg text-gray-700 italic">
              “Steni’s sessions are a blend of magic and movement. My child not
              only enjoys yoga but is also more focused and happy!”
            </p>
            <p className="text-sm text-right mt-4 font-semibold text-pink-600">
              – A Happy Parent
            </p>
          </div>

          {/* Certification Badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "200HR YTTC",
              "Kids Yoga Certified",
              "Mindfulness Coach",
              "10+ Years Exp",
            ].map((badge, i) => (
              <div
                key={i}
                className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full shadow-md text-sm font-semibold hover:scale-105 transition"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/918281094117?text=Hi%20Steni%2C%20I%27m%20interested%20in%20the%20Kids%20Yoga%20Workshops.%20Could%20you%20please%20share%20more%20details%20about%20both%20the%205-Day%20Training%20and%20the%2050%20Creative%20Themes%20Masterclass%3F%20Looking%20forward%20to%20joining%21"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:from-purple-700 hover:to-pink-600 transition"
          >
            Learn with Steni – Join Workshop
          </a>
        </div>
      </div>
    </section>
  );
}
