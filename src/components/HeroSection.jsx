import heroImg from "../assets/kids-yoga.webp";
import client1 from "../assets/3.webp";
import client2 from "../assets/young-beautiful-woman-casual-outfit-isolated-studio.webp";
import client3 from "../assets/portrait-male-tourist-visiting-great-wall-china (1).webp";
import client4 from "../assets/eastern-woman.webp";

export default function HeroSection() {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-20 px-6 md:px-12 lg:px-24 xl:px-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      {/* Background glow circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>

      {/* Text Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-8 z-10">
        <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
          Empowering Young Minds
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Yoga That Sparks{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 animate-gradient">
            Joy & Creativity
          </span>
        </h1>
        <p className="text-lg text-gray-700 max-w-lg mx-auto md:mx-0">
          Explore our playful yoga workshops designed for kids and educators.
          Build focus, flexibility, and a joyful mind through 50+ themed
          modules!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start flex-wrap">
          <a
            href="https://wa.me/918281094117?text=Hi%20Steni%2C%20I%27m%20interested%20in%20the%20Kids%20Yoga%20Workshops.%20Could%20you%20please%20share%20more%20details%20about%20both%20the%205-Day%20Training%20and%20the%2050%20Creative%20Themes%20Masterclass%3F%20Looking%20forward%20to%20joining%21"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition duration-300 transform hover:scale-105"
          >
            Join 5-Day Workshop
          </a>
          <a
            href="https://wa.me/918281094117?text=Hi%20Steni%2C%20I%27m%20interested%20in%20the%20Kids%20Yoga%20Workshops.%20Could%20you%20please%20share%20more%20details%20about%20both%20the%205-Day%20Training%20and%20the%2050%20Creative%20Themes%20Masterclass%3F%20Looking%20forward%20to%20joining%21"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-purple-500 text-purple-600 hover:bg-purple-50 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            Explore Themes
          </a>
        </div>

        <div className="flex items-center gap-3 pt-4 justify-center md:justify-start">
          <div className="flex -space-x-2">
            <img
              src={client1}
              alt="Instructor 1"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            <img
              src={client2}
              alt="Instructor 2"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            <img
              src={client3}
              alt="Instructor 3"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            <img
              src={client4}
              alt="Instructor 4"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
          </div>

          <p className="text-sm text-gray-600">500+ Happy Instructors</p>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2 z-10">
        <div className="relative">
          <img
            src={heroImg}
            alt="Kids doing yoga"
            className="h-96 w-full rounded-3xl shadow-2xl border-8 border-white transform hover:rotate-0 hover:scale-105 transition-all duration-500"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg flex gap-3 items-center">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
              🌟
            </div>
            <div>
              <p className="font-bold text-gray-800">50+ Themes</p>
              <p className="text-xs text-gray-500">Interactive & Fun</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
