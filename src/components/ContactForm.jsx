const ContactForm = () => {
  return (
    <section className="bg-gradient-to-br from-white to-pink-100 py-16 px-4 md:px-12">
      <div className="max-w-xl mx-auto bg-white p-8 rounded shadow-lg">
        <h3 className="text-2xl font-semibold text-center mb-6">
          Sign Up to Get Free Kids Yoga Downloads!
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email ID"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded shadow transition"
          >
            Get Free Downloads
          </button>
        </form>
        <div className="text-center mt-6 text-gray-600">
          📧{" "}
          <a href="mailto:yogasteni@gmail.com" className="text-blue-600">
            yogasteni@gmail.com
          </a>
          <br />
          📱{" "}
          <a href="https://wa.me/918281094117" className="text-blue-600">
            WhatsApp: 8281094117
          </a>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
