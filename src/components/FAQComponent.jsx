const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const FAQComponent = () => {
  const faqs = [
    {
      id: 1,
      question: 'What is FOFO?',
      answer: 'FOFO stands for Franchise Owned, Franchise Operated. This means the franchisee owns the setup and business in the given location, and is responsible for its smooth operations. Essentially, the franchisee becomes a business partner with Toprankers in that specific location.',
    },
    {
      id: 2,
      question: 'Is it more beneficial to invest in a franchise rather than starting my own coaching classes?',
      answer: 'Building a brand takes time, and many independent players may struggle to sustain their businesses over the long term. A franchise offers the credibility of an established brand, providing you with an immediate revenue stream. This can lead to faster stability and profitability compared to starting from scratch.',
    },
    {
      id: 3,
      question: 'I already run a successful coaching class in my area. Why should I opt for a franchise?',
      answer: 'While you may be excelling in your local unit, managing study materials, tests, and mock exams can consume significant time, money, and energy. With a franchise, you can shift your focus to more productive interactions with students while offering a wider range of resources that ensure higher success rates. Additionally, tech-enabled systems will increase your productivity and help scale your admissions exponentially.',
    },
    {
      id: 4,
      question: 'I am a teacher specializing in CLAT/CUET/IPM/CAT/Judiciary coaching in my city. Can I apply for a franchise?',
      answer: 'Yes, we prefer franchisees with a strong academic background, as we prioritize the quality of education. While there is an initial investment required, the returns are substantial, offering one of the best ROIs in this domain. Furthermore, this opportunity allows you to continue your passion for helping students while expanding your reach and impact.',
    },
  ];

  return (
    <div className="py-12 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
        Frequently Asked Questions <span className="text-blue-500">(FAQs)</span>
      </h2>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {faqs.map((faq) => (
          <div key={faq.id} className="p-6 border rounded-lg">
            <h3 className="text-green-500 text-xl font-bold mb-2">0{faq.id}</h3>
            <h4 className="text-lg font-semibold mb-4">{faq.question}</h4>
            <p className="text-gray-600 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Back to Top Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={scrollToTop}
          className="px-6 py-2 bg-blue-400 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
        >
          BACK TO TOP
        </button>
      </div>
    </div>
  );
};

export default FAQComponent;
