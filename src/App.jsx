import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import Carousel from "./Carousel.jsx";
import AboutUs from "./About.jsx";
import Gallery from "./Gallery.jsx";
import Bites from "./Bites.jsx";
import Places from "./Places.jsx";
import ContactForm from "./Contact.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
      <AboutUs />
      <Gallery />
      <Bites />
      <Places />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;