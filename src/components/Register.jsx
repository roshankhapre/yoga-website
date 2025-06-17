import { useState } from "react";
import {
  FaChild,
  FaPalette,
  FaCheckCircle,
  FaLeaf,
  FaOm,
  FaSpa,
  FaYinYang,
} from "react-icons/fa";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    workshop: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>

      {/* Yoga decorative elements */}
      <div className="absolute top-10 left-10 opacity-10 text-purple-300">
        <FaYinYang className="text-6xl rotate-45" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 text-pink-300">
        <FaOm className="text-6xl" />
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Floating card effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-20 blur-xl -z-10"></div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20 backdrop-blur-sm">
          {/* Gradient header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <FaLeaf className="absolute top-4 left-1/4 text-4xl text-purple-300" />
              <FaSpa className="absolute bottom-4 right-1/4 text-4xl text-pink-300" />
              <FaOm className="absolute top-1/2 left-1/3 text-5xl text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">
              <FaChild className="inline mr-2" />
              Yoga Workshop Registration
            </h2>
            <p className="text-purple-100 mt-2 relative z-10">
              Begin your journey to inner peace and teaching mastery
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center bg-white/90">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
                <FaCheckCircle className="text-purple-500 text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Namaste! Registration Successful
              </h3>
              <p className="text-gray-600 mb-6">
                We've received your application and will contact you shortly
                with more details.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-colors shadow-md hover:shadow-lg"
              >
                Register Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-white/90">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <FaLeaf className="mr-2 text-purple-500" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <FaPalette className="mr-2 text-purple-500" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <FaSpa className="mr-2 text-purple-500" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <FaYinYang className="mr-2 text-purple-500" />
                    Select Workshop
                  </label>
                  <div className="relative">
                    <select
                      name="workshop"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent bg-white transition-all"
                      value={formData.workshop}
                      onChange={handleChange}
                    >
                      <option value="">Choose a workshop...</option>
                      <option value="5-Day Workshop">
                        5-Day Kids Yoga Teachers Workshop
                      </option>
                      <option value="50 Themes Masterclass">
                        50 Kids Yoga Class Themes Masterclass
                      </option>
                      <option value="Advanced Asanas">
                        Advanced Asanas Workshop
                      </option>
                      <option value="Meditation Techniques">
                        Meditation & Mindfulness Techniques
                      </option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <FaOm className="mr-2 text-purple-500" />
                    Your Yoga Journey
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your yoga experience, intentions, or special requests..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-4 rounded-lg font-semibold shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <FaLeaf />
                  Reserve My Spot
                </button>

                <div className="text-center text-sm text-gray-500">
                  or connect via WhatsApp for instant confirmation
                </div>

                <a
                  href={`https://wa.me/918281094117?text=${encodeURIComponent(
                    `Namaste Steni,\n\nI'm ${
                      formData.name
                    } and I would like to register for the "${
                      formData.workshop
                    }" workshop.\n\nHere are my details:\n📧 Email: ${
                      formData.email
                    }\n📞 Phone: ${formData.phone}\n📝 Message: ${
                      formData.message || "No additional message."
                    }\n\nLooking forward to joining this journey!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-medium shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Instant Registration
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 mt-6">
                <div className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Limited seats available</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Yoga Alliance certified</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Personal guidance</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
