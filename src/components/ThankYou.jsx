import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 p-6 text-center">
      <FaCheckCircle className="text-green-600 text-6xl mb-4" />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Thank You for Registering!
      </h1>
      <p className="text-gray-600 mb-6 max-w-xl">
        We’ve received your message. You’ll soon get a WhatsApp confirmation
        with more details.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow"
      >
        Go Back to Home
      </Link>
    </section>
  );
}
