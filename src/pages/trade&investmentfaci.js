import { useEffect } from 'react';

export default function Tradeandinvestmentfacilators() {
  useEffect(() => {
    document.title = "Trade & Investment Facilitators - Wachter Oriental";
  }, []);

  return (
    <div>
      <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] relative">
        {/* Background Image */}
        <img
          src="/images/T&Icoverimg.jpg"
          alt="Trade and Investment Facilitators Cover"
          className="w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-orange-600 bg-opacity-70 w-full py-3 sm:py-4">
            <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg text-center">
              TRADE & INVESTMENT FACILITATORS
            </h1>
          </div>
        </div>
      </div>

      {/* Section Headings */}
      <div className="flex flex-col mt-5 ml-4 sm:ml-5 space-y-2">
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">Local Business Development</h3>
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">Boutique Remote Office Management</h3>
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">Sourcing & Outsourcing Support</h3>
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">Management Consultancy</h3>
      </div>

      <br /> <br />

      {/* Paragraph Section */}
      <div className="px-4 sm:px-5 pb-10 text-sm sm:text-base text-justify">
        <p>
          As Trade & Investment Facilitators we practically assist, mainly small and medium sized clients from
          various sectors in industrialised countries, with local business development, establishing and operating
          small, dedicated and client specific backoffices, sourcing and outsourcing activities as well as
          management consultancy and local strategy advice. <br />
          Out of experience we know how rough the seas can become when the trade winds start to blow.
          We offer our overseas clients a safe harbour in India and the Indo-Pacific region. <br /> <br />
          We have been there, done it, love it … since 2009
        </p>
      </div>
    </div>
  );
}
