import { useEffect } from "react";

export default function Ourbackground() {
  useEffect(() => {
    document.title = "Our Background - Wachter Oriental";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] relative">
        {/* Background Image */}
        <img
          src="/images/ourbgcoverimg.jpg"
          alt="Wachter Oriental Background Banner"
          className="w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-start z-10 px-4 sm:px-8">
          <div className="bg-orange-600 bg-opacity-70 px-6 py-3 sm:px-8 sm:py-4 rounded w-full sm:w-auto">
            <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg text-center">
              OUR BACKGROUND
            </h1>
          </div>
        </div>
      </div>

      {/* Two-Column Section */}
      <div className="flex flex-col md:flex-row mt-6 md:mt-10 gap-6 px-4 md:px-6">
        {/* Left Text Block */}
        <div className="w-full md:w-1/2 bg-white p-4 shadow-md">
          <h3 className="font-bold text-lg sm:text-xl mb-4">LINKING BEST OF BOTH WORLDS</h3>
          <p className="text-justify text-gray-800 leading-relaxed text-sm sm:text-base">
            For those of us who were not aware yet in the nineties, by the start of the new millennium,
            we all knew we had entered the Asian age. People in the developed world were curious, sometimes 
            felt excited, other times rather uncomfortable, but often just ignorant about what the impact of 
            this new wave of globalisation would bring them. Those deeply involved quickly understood what 
            Rudyard Kipling had meant a century earlier: “Asia is not going to be civilized after the methods 
            of the West. There is too much Asia and she is too old.” And right he was!
          </p>
        </div>

        {/* Right Image Block */}
        <div className="w-full md:w-1/2 bg-white p-4 shadow-md flex items-center justify-center">
          <img
            src="/images/ourbgpara.png"
            alt="Illustration about our background"
            className="max-h-[300px] w-full object-contain"
          />
        </div>
      </div>

      <div className="px-4 sm:px-5 pb-10 mt-6 md:mt-10">
        <p className="text-justify text-sm sm:text-base leading-relaxed text-gray-800">
          While many global entrepreneurs, big and small, were dancing with the dragon during those days,
          our founders had intensively started exploring the land of the (still sleeping) elephant. While sourcing
          materials for the automotive industry, establishing collaborative agricultural research projects and
          transferring western production technology to Indo-European joint-venture projects, they travelled to all
          corners of the subcontinent, met with all levels of society and enjoyed the whole gamut of exotic Indian
          cultures, from the foothills of Darjeeling to the coast of Malabar.
          <br /><br />
          A spark had ignited their ideas, enlightening their minds as fireworks lightening up the Diwaly night.
          “Half of the Indian population is younger than 28, future talent galore.” “The middle class is still nascent
          here, and so is consumption”. “The potential is huge but how can we participate?” “How can we encourage
          others to join us and become part of the growth of India?” “How can we support young Indians to explore, to
          grow, to flourish?” “How can we build bridges to connect the best of both worlds? Our worlds!” Soon after
          the elephant woke up.
          <br /><br />
          In 2008 our founders emigrated to India from Belgium and early 2009, WACHTER ORIENTAL was established in
          Pune, a major academic, cultural and industrial hub, 150kms SE of Mumbai, India’s financial capital. The same
          year, German made cutting tools had started improving the production efficiency of Indian automotive
          suppliers. Five years later WACHTER ORIENTAL was established in Toowoomba, an academic, agricultural and
          resources hub, 120kms W of Brisbane, the capital of Queensland. Soon after, the first container of organic
          Assam tea left Kolkata for Brisbane.
        </p>
      </div>
    </div>
  );
}
