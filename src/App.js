import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home'; 
import Ourbackground  from './pages/ourbackground';
import Ourview from './pages/ourviews';
import Ournavigators from './pages/ournavigators';
import Tradeandinvestmentfacilators from './pages/trade&investmentfaci'
import Merchants from './pages/merhcants';
import Engineers from './pages/engineers';
import Getintouch from './pages/getintouch';
import Joinourteam from './pages/joinourteam';
import Blog from './pages/blog';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us/background" element={<Ourbackground/>} />
        <Route path="/about_us/overviews" element={<Ourview/>} />
        <Route path="/about_us/navigators" element={<Ournavigators/>} />
        <Route path="/services/trade_&_investment_facilitators" element={<Tradeandinvestmentfacilators/>} />
        <Route path="/services/merchants" element={<Merchants/>} />
        <Route path="/services/engineers" element={<Engineers/>} />
        <Route path="/stay_connected/get_in_touch" element={<Getintouch/>} />
        <Route path="/stay_connected/join_our_team" element={<Joinourteam/>} />
        <Route path="/stay_connected/blog" element={<Blog/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;