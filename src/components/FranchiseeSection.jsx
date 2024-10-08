import book from '../assets/images/book.png';
import clock from '../assets/images/clock.png';
import graduation from '../assets/images/graduation.png';
import target from '../assets/images/target.png';
import brands from '../assets/images/brands.jpg';
const FranchiseeSection = () => {
  const franchiseInfo = [
    {
      title: "Why choose Toprankers?",
      description: "Comprehensive Support, Massive Returns, Scale up by 3X",
      icon: `${clock}`, 
    },
    {
      title: "Who should/can join us?",
      description:
        "Academicians, Coaching Owners, Entrepreneurs passionate about education and business growth (preference to have a classroom teaching experience)",
      icon: `${graduation}`, 
    },
    {
      title: "How to join us?",
      description:
        "Invest ₹35L, partner with us, and grow your coaching center exponentially",
      icon: `${target}`, 
    },
    {
      title: "How massive is our presence?",
      description:
        "19 cities with 34 centers and a magnanimous reach of 2L+ students since inception",
      icon: `${book}`, 
    },
  ];

  return (
    <div className="mt-4 w-full p-4 font-sans">
      {/* Upper Horizontal Line */}
      <hr className="border-t-1 border-gray-300" />

      {/* Our Brands Section */}
      <section className="text-center my-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Brands</h2>
        <div className="flex justify-center">
          {/* Brand Logos Image */}
          <img
            src={brands}  // Replace this with the actual image URL for your brand logos
            alt="Brand Logos"
            className="w-full  h-auto"
          />
        </div>
      </section>

  

      {/* Toprankers Franchise Section */}
      <section className="my-8">
        <h2 className="text-3xl md:text-4xl  text-center font-semibold mb-6">
          All about the Toprankers Franchisee
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {franchiseInfo.map((info, index) => (
            <div
              key={index}
              className="bg-orange-50 p-6 rounded-lg text-center"
            >
              <img
                src={info.icon}
                alt={`${info.title} Icon`}
                className="mx-auto mb-4 w-12 h-12"
              />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-700">{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Button */}
     
      <div className="mt-8 flex justify-center">
        <button
          className="px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition duration-300"
        >
          GET IN TOUCH
        </button>
      </div>

    </div>
  );
};

export default FranchiseeSection;
