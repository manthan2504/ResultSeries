import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLinkedin, FaBars, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Navbar() {
const [scrolled, setScrolled] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileConnectOpen, setMobileConnectOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`fixed top-0 left-0 w-full z-50 shadow-md px-6 py-4 flex justify-between items-center transition-all duration-300 ${
       scrolled ? 'bg-white bg-opacity-70 backdrop-blur-sm' : 'bg-white'
      }`}>

      {/* Logo */}
      <div className="text-2xl font-bold text-orange-600">LOGO</div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-orange-600">Home</Link>
        </li>

        {/* About Us Dropdown */}
        <li className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
          <span className="cursor-pointer hover:text-orange-600">About Us</span>
          {aboutOpen && (
            <div className="absolute left-0 top-full bg-white shadow-md rounded-md text-sm p-2 z-50">
              <Link to="/about_us/background" className="block px-4 py-2 hover:bg-orange-600 hover:text-white">OUR BACKGROUND</Link>
              <hr className="my-2 border-t border-gray-300" />
              <Link to="/about_us/overviews" className="block px-4 py-2 hover:bg-orange-600 hover:text-white">OUR VIEWS</Link>
              <hr className="my-2 border-t border-gray-300" />
              <Link to="/about_us/navigators" className="block px-4 py-2 hover:bg-orange-600 hover:text-white">OUR NAVIGATORS</Link>
            </div>
          )}
        </li>

        {/* Services Dropdown */}
        <li className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
          <span className="cursor-pointer hover:text-orange-600">Services</span>
          {servicesOpen && (
            <div className="absolute left-0 top-full bg-white shadow-md rounded-md text-sm p-2 z-50">
              <Link to="/services/trade_&_investment_facilitators" className="block px-4 py-2 hover:bg-orange-600 hover:text-white">TRADE & INVESTMENT FACILITATORS</Link>
              <hr className="my-2 border-t border-gray-300" />
              <Link to="/services/merchants" className="block px-4 py-2 hover:bg-orange-600 hover:text-white">MERCHANTS</Link>
              <hr className="my-2 border-t border-gray-300" />
              <Link to="/services/engineers" className="block px-4 py-2 hover:bg-orange-600 hover:text-white">ENGINEERS</Link>
            </div>
          )}
        </li>

        {/* Stay Connected Dropdown */}
        <li className="relative" onMouseEnter={() => setConnectOpen(true)} onMouseLeave={() => setConnectOpen(false)}>
          <span className="cursor-pointer hover:text-orange-600">Stay Connected</span>
          {connectOpen && (
            <div className="absolute left-0 top-full bg-white shadow-md rounded-md text-sm p-2 z-50">
              <Link to="/stay_connected/get_in_touch" className="block px-4 py-2 hover:bg-orange-600 hover:text-white">GET IN TOUCH</Link>
              <hr className="my-2 border-t border-gray-300" />
              <Link to="/stay_connected/join_our_team" className="block px-4 py-2 hover:bg-orange-600 hover:text-white">JOIN OUR TEAM</Link>
              <hr className="my-2 border-t border-gray-300" />
              <Link to="/stay_connected/blog" className="block px-4 py-2 hover:bg-orange-600 hover:text-white">BLOG</Link>
            </div>
          )}
        </li>

        {/* Icons + ESTD */}
        <li className="flex flex-col items-center gap-1 text-sm text-gray-600">
          <div className="flex gap-3">
            <a href="mailto:example@email.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
              <FaEnvelope size={20} aria-label="Mail Icon" />
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
              <FaLinkedin size={22} aria-label="LinkedIn Icon" />
            </a>
          </div>
          <div className="text-xs mt-1">- ESTD. 2009</div>
        </li>
      </ul>

      {/* Hamburger Icon (Mobile Only) */}
      <div className="md:hidden">
        <FaBars size={22} className="text-orange-600 cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)} />
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md z-50 md:hidden">
          <ul className="flex flex-col space-y-4 p-4 text-gray-700 font-medium">

            <li>
              <Link to="/" className="hover:text-orange-600" onClick={() => setMobileOpen(false)}>Home</Link>
            </li>

            {/* Mobile About Us Dropdown */}
            <li>
              <div className="flex justify-between items-center cursor-pointer hover:text-orange-600" onClick={() => setMobileAboutOpen(!mobileAboutOpen)}>
                <span>About Us</span>
                {mobileAboutOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {mobileAboutOpen && (
                <ul className="pl-4 space-y-2 text-gray-600">
                  <li><Link to="/about_us/background" onClick={() => setMobileOpen(false)}>OUR BACKGROUND</Link></li>
                  <li><Link to="/about_us/overviews" onClick={() => setMobileOpen(false)}>OUR VIEWS</Link></li>
                  <li><Link to="/about_us/navigators" onClick={() => setMobileOpen(false)}>OUR NAVIGATORS</Link></li>
                </ul>
              )}
            </li>

            {/* Mobile Services Dropdown */}
            <li>
              <div className="flex justify-between items-center cursor-pointer hover:text-orange-600" onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
                <span>Services</span>
                {mobileServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {mobileServicesOpen && (
                <ul className="pl-4 space-y-2 text-gray-600">
                  <li><Link to="/services/trade_&_investment_facilitators" onClick={() => setMobileOpen(false)}>TRADE & INVESTMENT FACILITATORS</Link></li>
                  <li><Link to="/services/merchants" onClick={() => setMobileOpen(false)}>MERCHANTS</Link></li>
                  <li><Link to="/services/engineers" onClick={() => setMobileOpen(false)}>ENGINEERS</Link></li>
                </ul>
              )}
            </li>

            {/* Mobile Stay Connected Dropdown */}
            <li>
              <div className="flex justify-between items-center cursor-pointer hover:text-orange-600" onClick={() => setMobileConnectOpen(!mobileConnectOpen)}>
                <span>Stay Connected</span>
                {mobileConnectOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {mobileConnectOpen && (
                <ul className="pl-4 space-y-2 text-gray-600">
                  <li><Link to="/stay_connected/get_in_touch" onClick={() => setMobileOpen(false)}>GET IN TOUCH</Link></li>
                  <li><Link to="/stay_connected/join_our_team" onClick={() => setMobileOpen(false)}>JOIN OUR TEAM</Link></li>
                  <li><Link to="/stay_connected/blog" onClick={() => setMobileOpen(false)}>BLOG</Link></li>
                </ul>
              )}
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}
