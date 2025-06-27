import { useEffect } from 'react';

export default function Merchants() {
  useEffect(() => {
    document.title = "Merchants - Wachter Oriental";
  }, []);

  return (
    <div className="pt-0 mt-0"> {/* No margin-top here to align tightly with navbar */}

      {/* Hero Section */}
      <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] relative bg-white overflow-hidden">
        {/* Background Image as absolute */}
        <img
          src="/images/merchantcoverimg.png"
          alt="Merchant Cover"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-orange-600 bg-opacity-70 w-full py-3 sm:py-4">
            <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg text-center">
              Merchants
            </h1>
          </div>
        </div>
      </div>

      {/* Section Headings */}
      <div className="flex flex-col mt-5 ml-4 sm:ml-5 space-y-2">
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">Import</h3>
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">Sales</h3>
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">Distribution</h3>
      </div>

      <br /> <br />

      {/* Paragraph Section */}
      <div className="px-4 sm:px-5 pb-10 text-sm sm:text-base text-justify">
        <p>
          As Trade & Investment Facilitators we put our money where our mouth is.
          For certain quality niche products, we are importers, stockists and distributors in India and Australia.
          Out of experience we have learned that sales opportunities for imported products grow considerably when
          we can sell products which are stocked locally, without clients having to worry about long delivery lead
          times, supply chain and import processes, foreign currency etc. Combined with a local business
          development arrangement, this service gives our overseas partners the opportunity to establish a local
          sales and distribution model in our home markets.
        </p>
      </div>

    </div>
  );
}
