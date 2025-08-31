import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Hero/Hero';
import About from './pages/About/About';
import Rooms from './pages/Rooms/Rooms';
import Amenities from './pages/Amenities/Amenities';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery';
import Booking from './pages/Booking/Booking';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import MapAndPayment from './pages/Mapandpayment/MapAndPayment';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Rooms />
      <Amenities />
      <Testimonials />
      <Gallery />
      {/* <Booking /> */}
      <Contact />
       <MapAndPayment />
      <Footer />
     
    </>
  );
}

export default App;
