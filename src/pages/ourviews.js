import { useEffect } from "react";

export default function Ourview() {
  useEffect(() => {
    document.title = "Our Views - Wachter Oriental";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] relative">
        {/* Background Image */}
        <img
          src="/images/ourviewscoverimg.jpg"
          alt="Our Views Cover"
          className="w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-start z-10 px-4 sm:px-8">
          <div className="bg-orange-600 bg-opacity-70 px-6 py-3 sm:px-8 sm:py-4 rounded w-full sm:w-auto">
            <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg text-center">
              OUR VIEWS
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom 3-Box Section */}
      <div className="flex flex-col md:flex-row justify-between px-4 sm:px-6 mt-5 gap-6">
        {/* Vision Card */}
        <div className="w-full md:w-1/3 h-auto bg-white shadow-md p-4 flex flex-col items-center">
          <img
            src="/images/viewdiv1.png"
            alt="Vision Illustration"
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-cover mt-5"
          />
          <h3 className="font-bold text-center mt-5 text-lg sm:text-xl">
            Vision: <br /> Navigating Client’s Interests
          </h3>
          <p className="mt-4 text-justify text-sm sm:text-base">
            Providing the best and most practical support to enable our overseas
            clients to grow sustainably and be successful during their ventures,
            by delivering a range of focused, diversified and tailored, client
            centric services, in the Indo-Pacific region.
          </p>
        </div>

        {/* Mission Card */}
        <div className="w-full md:w-1/3 h-auto bg-white shadow-md p-4 flex flex-col items-center">
          <img
            src="/images/viewdiv2.png"
            alt="Mission Illustration"
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-cover mt-5"
          />
          <h3 className="font-bold text-center mt-5 text-lg sm:text-xl">
            Mission: <br /> Support beyond Boundaries
          </h3>
          <p className="mt-4 text-justify text-sm sm:text-base">
            Delivering a variety of remote services to clients from mainly, but
            not exclusively, Europe, Australia and New Zealand by focusing on
            growth drivers such as business development and project, as well as
            talent management. We do this by leveraging the growth of India.
            Because we are home in our local markets and are conscious of
            cultural differences, we help bridge gaps and navigate client
            projects in various ways.
          </p>
        </div>

        {/* Values Card */}
        <div className="w-full md:w-1/3 h-auto bg-white shadow-md p-4 flex flex-col items-center">
          <img
            src="/images/viewdiv3.png"
            alt="Values Illustration"
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-cover mt-5"
          />
          <h3 className="font-bold text-center mt-5 text-lg sm:text-xl">
            Values: <br /> The Power of Diversity
          </h3>
          <p className="mt-4 text-justify text-sm sm:text-base">
            We strongly believe in the power of diversity and the possibility of
            creating growth and opportunities by matching “the best of both
            worlds”. Respect of our personal values always leads our actions. We
            take flexibility, pro-activity, correctness and devotion for
            granted. Respect for our environment and fellow citizens is part of
            our lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
}
