import { FaChalkboardTeacher, FaMagic, FaChild } from "react-icons/fa";

const WorkshopSection = () => {
  return (
    <section id="workshops" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-700 mb-14">
          Our Signature Workshops
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-2xl shadow-xl bg-pink-50">
            <FaChalkboardTeacher className="text-4xl text-pink-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              5-Day Kids Yoga Workshop
            </h3>
            <p className="text-gray-700 mb-3">
              For educators who want to teach with clarity, structure, and play.
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-1 text-sm">
              <li>Live Sessions + Recordings</li>
              <li>Age-Based Class Planning (2–16 yrs)</li>
              <li>Behavioral Tips & Demos</li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl shadow-xl bg-purple-50">
            <FaMagic className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              50 Yoga Themes Workshop
            </h3>
            <p className="text-gray-700 mb-3">
              Creative toolbox with 50 themes to spice up every session.
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-1 text-sm">
              <li>PDF with Ready-to-Use Themes</li>
              <li>Bonus Class Planner</li>
              <li>1-Day Masterclass + Replay</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkshopSection;
