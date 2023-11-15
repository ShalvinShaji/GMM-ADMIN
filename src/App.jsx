import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import Login from "./assets/pages/Login";
import GoverningBoard from "./assets/pages/GoverningBoard";
import RecentNews from "./assets/pages/RecentNews";
import Footer from "./assets/components/Footer";
import NewDepartmentAdder from "./assets/components/NewDepartmentAdder";
import NewDoctorAdder from "./assets/components/NewDoctorAdder";
import NewNewsItemAdder from "./assets/components/NewNewsItemAdder";
import CarouselImageUploader from "./assets/components/CarouselImageUploader";
import NewFacilityAdder from "./assets/components/NewFacilityAdder";
import NewCareerAdder from "./assets/components/NewCareerAdder";
import NewGalleryAlbumAdder from "./assets/components/NewGalleryAlbumAdder";
import NewGoverningBoardAdder from "./assets/components/NewGoverningBoardAdder";
import "./assets/css/RecentNews.css";
import "./assets/css/Gallery.css";
import "./assets/css/Facilities.css";
import "./assets/css/Doctors.css";
import "./assets/css/Sidebar.css";
import "./assets/css/NewDepartment.css";
import "./assets/css/Sectionhead.css";
import "./assets/css/Footer.css";
import "./assets/css/Header.css";
import "./assets/css/Departments.css";
import "./assets/css/Header.css";
import "./assets/css/GoverningBoard.css";

function App() {
  const navigate = useNavigate();

  // Function to conditionally render Header based on route
  const renderHeader = () => {
    if (window.location.pathname === "/") {
      return null; // Don't render Header for the login page
    }
    return <Header />;
  };
  const renderFooter = () => {
    if (window.location.pathname === "/") {
      return null; // Don't render Footer for the login page
    }
    return <Footer />;
  };

  return (
    <>
      <Scrolltop />
      {renderHeader()}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Departments" element={<Departments />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Governing-Board" element={<GoverningBoard />} />
        <Route path="/Recent-news" element={<RecentNews />} />
        <Route path="/NewDepartment" element={<NewDepartmentAdder />} />
        <Route path="/NewDoctor" element={<NewDoctorAdder />} />
        <Route path="/NewNews" element={<NewNewsItemAdder />} />
        <Route path="/NewCarouselImage" element={<CarouselImageUploader />} />
        <Route path="/NewFacility" element={<NewFacilityAdder />} />
        <Route path="/NewCareer" element={<NewCareerAdder />} />
        <Route path="/NewGalleryAlbum" element={<NewGalleryAlbumAdder />} />
        <Route
          path="/Edit-Governing-Board"
          element={<NewGoverningBoardAdder />}
        />
      </Routes>
      {renderFooter()}
    </>
  );
}

export default App;
