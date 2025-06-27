import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog - Wachter Oriental";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-[400px] sm:h-[500px] relative">
        {/* Background Image */}
        <img
          src="/images/blogcoverplaceholder.png" // Replace with actual blog cover when available
          alt="Blog Cover Placeholder"
          className="w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center sm:justify-start z-10 px-4 sm:px-8">
          <div className="bg-orange-600 bg-opacity-70 px-4 sm:px-8 py-3 sm:py-4 rounded">
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg text-center">
              BLOG
            </h1>
          </div>
        </div>
      </div>

      {/* Placeholder Section */}
      <div className="px-4 sm:px-8 py-8 text-center text-gray-600 text-base sm:text-lg">
        <p>Blog content will be available soon. Stay tuned for insights and updates from Wachter Oriental.</p>
      </div>
    </div>
  );
}
