import { useEffect } from 'react';

export default function Ournavigators() {
  useEffect(() => {
    document.title = "Our Navigators - Wachter Oriental";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] relative">
        {/* Background Image */}
        <img
          src="/images/ournavigatorscoverimg.jpg"
          alt="Wachter Oriental Navigators Banner"
          className="w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-start z-10 px-4 sm:px-8">
          <div className="bg-orange-600 bg-opacity-70 px-6 py-3 sm:px-8 sm:py-4 rounded w-full sm:w-auto">
            <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg text-center">
              OUR NAVIGATORS
            </h1>
          </div>
        </div>
      </div>

      {/* Navigator Cards */}
      <div className="mt-6 flex flex-col space-y-10 px-4 sm:px-5">

        {/* Navigator 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/images/navigator1.jpg"
            alt="Sven DE WACHTER Profile Photo"
            className="w-[200px] h-[200px] object-cover rounded shadow"
          />
          <p className="text-justify text-sm sm:text-base">
            <span className="font-bold">Sven DE WACHTER</span>, MSE (Electrical) - Belgium <br />
            Seasoned global entrepreneur with more than 3 decades of industrial management
            and trade experience of which over a decade as a resident in Pune, India. <br />
            Advisor to the Economic Diplomacy of the Kingdom of Belgium in India during his
            resident years in the subcontinent.
          </p>
        </div>

        {/* Navigator 2 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/images/navigator2.jpg"
            alt="Moreshwar BHALSING Profile Photo"
            className="w-[200px] h-[200px] object-cover rounded shadow"
          />
          <p className="text-justify text-sm sm:text-base">
            <span className="font-bold">Moreshwar BHALSING</span>, BE (Electrical) - India <br />
            Tech wizard with over 25 years of international experience in digital transformation. <br />
            Managing Director of Inventive, the Wachter Oriental alliance engineering, design and
            digitalisation services company. <br />
            Chairman of the Board of Governance of his alma mater, Govt. College of Engineering,
            Karad, Maharashtra, India.
          </p>
        </div>

        {/* Navigator 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/images/navigator3.jpg"
            alt="Rebecca ZWART Profile Photo"
            className="w-[200px] h-[200px] object-cover rounded shadow"
          />
          <p className="text-justify text-sm sm:text-base">
            <span className="font-bold">Rebecca ZWART</span>, B.Sc.App. (Biotech) Hons I, PhD (Agricultural Science) - Australia <br />
            Passionate agricultural scientist with long term collaborative resident research experience
            in Australia, India and Belgium. <br />
            Senior lecturer and researcher at the University of Southern Queensland. <br />
            Australian “Endeavour Award” holder 2008, “Australia-India Strategic Fund” fellowship 2020.
          </p>
        </div>
      </div>
    </div>
  );
}
