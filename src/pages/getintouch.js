import { useEffect } from "react";

export default function Getintouch() {
  useEffect(() => {
    document.title = "Get In Touch - Wachter Oriental";
  }, []);

  return (
    <div className="pt-0 mt-0">
      {/* Hero Section */}
      <div className="relative w-full flex items-center justify-center overflow-hidden h-[400px] sm:h-[450px] md:h-[500px]">
        <img
          src="/images/getintouchcoverimg.png"
          alt="Get in Touch Cover"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-start z-10 px-4 sm:px-8">
          <div className="bg-orange-600 bg-opacity-70 px-4 sm:px-8 py-3 sm:py-4 rounded">
            <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg text-center">
              GET IN TOUCH
            </h1>
          </div>
        </div>
      </div>

      {/* Section Headings */}
      <div className="flex flex-col mt-5 ml-4 sm:ml-5 px-2 text-sm sm:text-base space-y-3">
        <ul className="list-disc pl-5">
          <li>Are you investigating new growth markets?</li>
          <li>Has finding and retaining talent become a challenge?</li>
          <li>Are you executing engineering and design activities?</li>
        </ul>
        <p className="text-justify">
          We would be happy to better understand your activities and growth plans. Please feel free to drop us
          a line. Let us connect to share ideas and to discuss opportunities to sustainably grow your business.
        </p>
      </div>

      {/* Contact Sections */}
      <div className="mt-6 flex flex-col space-y-10 px-4 sm:px-6">

        {/* Email */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <img
            src="/images/getintouchimg1.png"
            alt="Email Icon"
            className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] object-contain rounded shadow"
          />
          <span className="font-bold bg-orange-600 text-white border border-orange-600 px-4 py-2 rounded-full shadow text-sm sm:text-base">
            welcome@wachteroriental.com
          </span>
        </div>

        {/* Australia */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <img
            src="/images/getintouchimg2.png"
            alt="Australia Office Icon"
            className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] object-contain rounded shadow"
          />
          <p className="text-justify text-sm sm:text-base">
            <span className="font-bold">Australia:</span> <br />
            WACHTER ORIENTAL QUEENSLAND PTY. LTD. <br />
            PO Box 31, UniSQ Toowoomba Campus LPO <br />
            Darling Heights Qld 4350 (AUSTRALIA).
          </p>
        </div>

        {/* India */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <img
            src="/images/getintouchimg3.png"
            alt="India Office Icon"
            className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] object-contain rounded shadow"
          />
          <p className="text-justify text-sm sm:text-base">
            <span className="font-bold">India:</span> <br />
            WACHTER ORIENTAL EMERGING MARKETS MANAGEMENT SUPPORT PVT. LTD. <br />
            Shivana Building 3rd floor, Bhusari Colony plot 85, Kothrud <br />
            Pune 411038 (INDIA).
          </p>
        </div>
      </div>
    </div>
  );
}
