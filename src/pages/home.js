import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Home() {
  const images = [
    {
      url: '/images/picture1.jpg',
      heading: (
        <>
          <div className="text-left text-red-700 text-outline-purple">YOUR GLOBAL</div>
          <div className="text-left pl-6 sm:pl-12 text-red-700 text-outline-purple">LOCAL PARTNER</div>
        </>
      ),
      headingStyle: 'text-right pr-4 sm:pr-8',
      buttonText: 'Read More',
      link: '/about_us/background', 
    },
    {
      url: '/images/picture2.jpg',
      heading: (
        <>
          TRADE & INVESTMENT<br />
          FACILITATORS
        </>
      ),
      headingStyle: 'pl-4 sm:pl-8',
      buttonText: 'Read More',
      link: '/services/trade_&_investment_facilitators', 
      content: (
        <ul className="list-none pl-0 ml-0 text-white text-sm sm:text-base md:text-lg font-bold space-y-2">
          <li className="flex items-start gap-2"><span>Local Business Development</span></li>
          <li className="flex items-start gap-2"><span>Boutique Remote Office Management</span></li>
          <li className="flex items-start gap-2"><span>Sourcing & Outsourcing Support</span></li>
          <li className="flex items-start gap-2"><span>Management Consultancy</span></li>
        </ul>
      ),
    },
    {
      url: '/images/picture3.jpg',
      heading: 'MERCHANTS',
      headingStyle: 'pl-4 sm:pl-8',
      buttonText: 'Read More',
      link: '/services/merchants', 
      content: (
        <ul className="list-none pl-0 ml-0 text-white text-sm sm:text-base md:text-lg font-bold space-y-2">
          <li className="flex items-start gap-2"><span>Import</span></li>
          <li className="flex items-start gap-2"><span>Sales</span></li>
          <li className="flex items-start gap-2"><span>Distribution</span></li>
        </ul>
      ),
    },
    {
      url: '/images/picture4.jpg',
      heading: 'ENGINEERS',
      headingStyle: 'pl-4 sm:pl-8',
      buttonText: 'Read More',
      link: '/services/engineers', 
      content: (
        <ul className="list-none pl-0 ml-0 text-white text-sm sm:text-base md:text-lg font-bold space-y-2">
          <li className="flex items-start gap-2"><span>Remote Engineering & Design Office Management</span></li>
          <li className="flex items-start gap-2"><span>CAD-design & BIM-modeling</span></li>
          <li className="flex items-start gap-2"><span>Digitalisation Services</span></li>
        </ul>
      ),
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      {/* Image Slider */}
      <div className="mt-0 w-full h-[400px] sm:h-[500px] md:h-[631px] overflow-hidden relative">
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white z-20 hover:bg-opacity-70"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white z-20 hover:bg-opacity-70"
        >
          <FaChevronRight size={20} />
        </button>

        <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((img, i) => (
            <div key={i} className="relative w-full h-[400px] sm:h-[500px] md:h-[631px] flex-shrink-0">
              <img
                src={img.url}
                alt={`Slide ${i}`}
                className={`w-full h-full ${i === 0 ? 'object-contain scale-90' : 'object-cover'}`}
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center px-4 sm:px-8 text-white">
                {i === 0 ? (
                  <div className="flex flex-col items-end gap-4 mb-4">
                    <h2 className={`${img.headingStyle || ''} text-3xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg`}>
                      {img.heading}
                    </h2>
                    <Link to={img.link}>
                      <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-[20px] shadow text-white">
                        {img.buttonText}
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <h2 className={`${img.headingStyle || ''} text-3xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg`}>
                      {img.heading}
                    </h2>
                    <Link to={img.link}>
                      <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-[20px] shadow text-white">
                        {img.buttonText}
                      </button>
                    </Link>
                  </div>
                )}
                <div className={`pl-4 sm:pl-8 ${i === 0 ? 'text-right' : ''}`}>{img.content}</div>
                {i === 0 && (
                  <div className="absolute bottom-4 right-4 text-base sm:text-lg font-bold text-black">
                    AUSTRALIA <span className='text-orange-600'>|</span> INDIA
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome Paragraph Section */}
      <div className="text-gray-800 text-sm sm:text-base leading-relaxed px-4 sm:px-6 py-4">
        <p>
          Welcome to <span className="font-bold">WACHTER ORIENTAL</span>, YOUR GLOBAL LOCAL PARTNER and boutique services provider in the Indo-Pacific region. Thank you for visiting our digital window on the world. We are looking forward to get in touch and explore opportunities together.
        </p>
        <br />
        <p>
          We strongly believe in growth creation through globalisation, dedication and collaboration. We understand that establishing overseas business, developing trade, finding and retaining talent, and organising local operations can be challenging at times, especially for small and medium-sized organisations. As a boutique services provider, WACHTER ORIENTAL is specialized in actively supporting small and medium size overseas clients to organise and operate their ventures in India and the Indo-Pacific region. This is where we are home. This is where our businesses have rooted. This is where the future is bright, and this is where we have boots on the ground since 2009.
        </p>
      </div>

      {/* Bottom 3-Box Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-6 px-4 py-6">
        <div className="w-full sm:w-1/3 bg-white shadow-md p-4">
          <img src="/images/homediv1.png" alt="Trade & Investment" className="w-[150px] h-[150px] object-cover mx-auto mt-5" />
          <h3 className="font-bold mx-auto w-fit mt-5">Trade & Investment Facilitators</h3>
          <p className="mt-5 text-justify text-sm sm:text-base">
            As trade & investment facilitators we are guiding clients from various sectors, navigating their longterm projects in the Indo-Pacific region in general and in India and Australia in particular. We practically assist our clients with local business development, region specific strategic management advice, and in our office in Pune (India), we provide 100% tailored and dedicated remote office services and organize material sourcing and out-sourcing activities. Our staff consists of project driven, multi-sector and multi-lingual professionals.
          </p>
        </div>

        <div className="w-full sm:w-1/3 bg-white shadow-md p-4">
          <img src="/images/homediv2.png" alt="Merchants" className="w-[150px] h-[150px] object-cover mx-auto mt-5" />
          <h3 className="font-bold mx-auto w-fit mt-5">Merchants</h3>
          <p className="mt-5 text-justify text-sm sm:text-base">
            We are importers, stockists and distributors of niche quality products in India and Australia. Combined with a local business development arrangement, this service gives our overseas partners the opportunity to establish a local sales and distribution model in our home markets.
          </p>
        </div>

        <div className="w-full sm:w-1/3 bg-white shadow-md p-4">
          <img src="/images/homediv3.png" alt="Engineers" className="w-[150px] h-[150px] object-cover mx-auto mt-5" />
          <h3 className="font-bold mx-auto w-fit mt-5">Engineers</h3>
          <p className="mt-5 text-justify text-sm sm:text-base">
            Finding and retaining engineering talent can be a challenge. To better support the needs of our global engineering and design clients we have been investing in engineering, design and digitalization capabilities in India since 2011. We operate small to medium size, tailored and dedicated, remote engineering and design office activities for our clients and we offer a variety of CAD-design and BIM-modeling services on multiple platforms such as AutoCAD, Revit, AutoCAD Electrical and Tekla.
          </p>
        </div>
      </div>
    </>
  );
}
