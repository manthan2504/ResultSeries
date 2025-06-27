import { useEffect } from 'react';

export default function Engineers() {
  useEffect(() => {
    document.title = "Engineers - Wachter Oriental";
  }, []);

  return (
    <div className="pt-0 mt-0">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '1276 / 303' }}>
        <img
          src="/images/enginnerscoverimg.png"
          alt="Engineers Cover Image"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-orange-600 bg-opacity-70 w-full py-3 sm:py-4">
            <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg text-center">
              ENGINEERS
            </h1>
          </div>
        </div>
      </div>

      {/* Section Headings */}
      <div className="flex flex-col mt-5 ml-4 sm:ml-5 space-y-2">
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">Remote Engineering & Design Office Management</h3>
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">CAD-design & BIM-modeling</h3>
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">Digitalisation Services</h3>
      </div>

      <br /><br />

      {/* Paragraph Section */}
      <div className="px-4 sm:px-5 pb-10 text-sm sm:text-base text-justify">
        <p>
          Finding and retaining talent can be a challenge at times. To support our customers to tackle the soaring
          global engineering talent-crunch, WACHTER ORIENTAL has started investing in inhouse engineering and
          design capacity as early as 2009 and in engineering, technology and digitalization capabilities as a
          co-founder of CAD-automation start-up Inventive, back in 2011. <br />
          We operate small to medium size, 100% tailored and dedicated, remote engineering & design office
          activities for our overseas clients and we offer a variety of CAD-design and BIM-modeling services, using
          multiple technology platforms such as AutoCAD, Revit, AutoCAD Electrical and Tekla. <br />
          Through our alliance with Inventive, a long-standing authorized Autodesk Development Partner, we can
          leverage cutting-edge tools and technologies to automate our engineering, design and drafting processes.
        </p>
      </div>
    </div>
  );
}
