import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

const Header = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  return (
    // <!-- ========== Header section start ========== -->
    <header className={fix ? "header navbar_fixed" : "header"}>
      <div className="container">
        <div className="row">
          <Navbar bg="none" expand="lg">
            <a className="navbar-brand" href="/">
              <h1 className="m-0">TAMIM.</h1>
              {/* <img src={siteLogo.logo} alt={siteLogo.alt} /> */}
            </a>
            <Navbar.Toggle aria-controls="navbarSupportedContent">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarSupportedContent">
              <ul className="navbar-nav menu ms-lg-auto">
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="nav-link scroll dropdown-toggle"
                    to="hero"
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    Hero
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="nav-link scroll dropdown-toggle"
                    to="about-us"
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="nav-link scroll dropdown-toggle"
                    to="experience"
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="nav-link scroll dropdown-toggle"
                    to="service"
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="nav-link scroll dropdown-toggle"
                    to="projects"
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    Projects
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="nav-link scroll dropdown-toggle"
                    to="blog"
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    Blog
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="nav-link scroll dropdown-toggle"
                    to="contact"
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
    // <!-- ========== Header section end ========== -->
  );
};

export default Header;
