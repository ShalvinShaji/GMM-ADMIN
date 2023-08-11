import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Scrolltop from "./assets/components/Scrolltop";
import Header from "./assets/components/Header";
import Home from "./assets/pages/Home";
import Departments from "./assets/pages/Departments";
import Facilities from "./assets/pages/Facilities";
import Careers from "./assets/pages/Careers";
import Contact from "./assets/pages/Contact";
import Doctors from "./assets/pages/Doctors";
import Gallery from "./assets/pages/Gallery";
import GoverningBoard from "./assets/pages/GoverningBoard";
import RecentNews from "./assets/pages/RecentNews";

function App() {
  return (
    <>
      <Scrolltop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Departments" element={<Departments />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Governing-Board" element={<GoverningBoard />} />
        <Route path="/Recent-news" element={<RecentNews />} />
      </Routes>
    </>
  );
}

export default App;
