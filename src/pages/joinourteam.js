import { useEffect } from "react";

export default function Joinourteam() {
  useEffect(() => {
    document.title = "Join Our Team - Wachter Oriental";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-[400px] sm:h-[500px] relative">
        <img
          src="/images/joinourteamcoverimg.png"
          alt="Join Our Team Cover"
          className="w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 flex items-center justify-start z-10 px-4 sm:px-8">
          <div className="bg-orange-600 bg-opacity-70 px-4 sm:px-8 py-3 sm:py-4 rounded">
            <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg text-center">
              JOIN OUR TEAM
            </h1>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="ml-4 sm:ml-5 mt-5 px-2 sm:px-0 text-sm sm:text-base">
        <p className="text-justify">
          Are you also passionate about globalisation, international collaboration and cultural diversity? 
          Let your career take flight and join our team. To support the growing amount of overseas client 
          projects, the young, dynamic and multicultural team of WACHTER ORIENTAL is often on the lookout 
          for new enthusiastic talented colleagues from different backgrounds! <br /> <br />
          If your spirit is “setting the gold standard”, we kindly invite you to apply for our current job 
          vacancies or send your recently updated CV to:
        </p>
      </div>

      {/* Email Block */}
      <div className="flex items-center gap-4 mt-6 ml-4 sm:ml-5 px-2 sm:px-0">
        <img
          src="/images/getintouchimg1.png"
          alt="Email Icon"
          className="w-[60px] h-[60px] object-contain"
        />
        <div className="flex items-center justify-center bg-orange-600 text-white border border-orange-600 px-4 py-1 rounded-full shadow text-sm sm:text-base h-[60px]">
          <span className="text-center leading-none">welcome@wachteroriental.com</span>
        </div>
      </div>
    </div>
  );
}
