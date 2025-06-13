const PricingSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 text-center">
      <h3 className="text-3xl font-bold text-purple-600 mb-6">Workshop Fees</h3>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-left">
        <div className="p-6 border rounded-lg shadow">
          <h4 className="text-xl font-bold mb-2 text-pink-600">
            5-Day Workshop
          </h4>
          <p className="mb-2">Regular: ₹2,999</p>
          <p className="font-bold text-green-600">Offer: ₹1,999</p>
        </div>
        <div className="p-6 border rounded-lg shadow">
          <h4 className="text-xl font-bold mb-2 text-purple-600">
            50 Themes Workshop
          </h4>
          <p className="mb-2">Regular: ₹4,999</p>
          <p className="font-bold text-green-600">Offer: ₹3,999</p>
        </div>
        <div className="p-6 border rounded-lg shadow bg-yellow-50">
          <h4 className="text-xl font-bold mb-2 text-yellow-700">
            Combo Offer
          </h4>
          <p className="mb-2">Value: ₹7,998</p>
          <p className="font-bold text-green-700">Only ₹5,499</p>
          <p className="text-sm text-gray-600 mt-2">✅ Save ₹2,499</p>
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
