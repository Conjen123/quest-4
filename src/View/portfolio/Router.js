import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  AboutBanner,
  ContactBanner,
  HomeBanner,
  PortfolioBanner,
} from "../../component/portfolio/Components";

export default function MyPortfolio() {
  return (
    <Router>
      <nav className="topnav">
        <div className="nav-content">
          <div className="logo">
            <img src="/assets/icons/logo.svg" alt="Logo" />
            Conjen
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="hamburger">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomeBanner />} />
        <Route path="/about" element={<AboutBanner />} />
        <Route path="/projects" element={<PortfolioBanner />} />
        <Route path="/contact" element={<ContactBanner />} />
      </Routes>
    </Router>
  );
}
