const Choose = () => {
  const data = [
    { value: "3L+", description: "Students Trained" },
    { value: "12+", description: "Years of Experienced Faculties" },
    { value: "1000+", description: "Selections Every Year" },
    { value: "29", description: "Toprankers Centers across India" },
    { value: "24*7", description: "Doubt Clearing Sessions" },
    { value: "1-on-1", description: "Personalized Guidance" },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-4 px-4 font-sans">
      {/* Top Horizontal Line */}
      <hr className="w-full border-t border-gray-300 mb-6" />

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-8">
        Why Students/Parents choose{" "}
        <span className="text-blue-500">Toprankers</span>
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center justify-center"
          >
            <span className="text-3xl md:text-4xl font-medium text-green-500">
              {item.value}
            </span>
            <span className="text-md md:text-lg text-gray-600">
              {item.description}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Horizontal Line */}
      <hr className="w-full border-t border-gray-300 mb-6" />

      {/* Button */}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-2  bg-blue-400 text-white font-semibold rounded hover:bg-blue-600 transition duration-300">
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default Choose;
