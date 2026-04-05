import React from "react";
import { Link } from "react-scroll";
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    // <!-- ========== Hero section start ========== -->
    <section
      id="hero"
      className="hero hero__padding overflow-hidden position-relative"
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="hero__content position-relative">
              <h1 className="display-4 mb-2 text-capitalize">
                Abdul Aziz.
              </h1>
              <div className="badge-text fs-5 mb-4">
                I'am a{" "}
                <ReactTyped
                  strings={[
                    " Problem Solver",
                    " Web Designer",
                    " Front end developer",
                  ]}
                  typeSpeed={100}
                  backSpeed={60}
                  startDelay={0}
                  backDelay={2000}
                  cursorChar="|"
                  contentType="html"
                  loop
                ></ReactTyped>
              </div>
              <p className="mb-5 fs-5">
                An aspiring Web Designer and problem solver. with huge knowledge and proficiency in C, C++, DSA, and Algorithm JavaScript and WordPress, as well as strong skills in writing clean and efficient codes.
              </p>
              <Link to="about-us" className="button button__primary me-3">
                <span>About us</span>
              </Link>
              <a
                href="https://drive.google.com/uc?export=download&id=15prwQNUrJ_AbSzl4OsoGDNq4BRc4gg6B"
                className="btn__primary me-3"
              >
                <span>Resume</span>
              </a>
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <div className="text-center">
              <div className="hero__author">
                <div className="hero__author--wrapper">
                  <img
                    width="500"
                    className="img-fluid"
                    src="assets/images/hero_image.jpg"
                    alt="tamim"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Hero section end ========== -->
  );
};

export default Hero;
