import React from "react";
import { FaBrain, FaDesktop, FaLaptopCode } from "react-icons/fa";

const Services = () => {
  return (
    // <!-- ========== Service section start ========== -->
    <div className="service section-padding" id="service">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="section-title-center text-center">
              <span>Service</span>
              <h2 className="display-6">Awesome Services</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="service__item h-100">
              <div className="icon">
                <FaLaptopCode />
              </div>
              <h3>Front End Developer</h3>
              <p>
                As a front-end developer, I am responsible for creating the visual elements and user interface of a website or application. I work with HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS to develop the look and feel of the website, including layout, colors, typography, and overall user experience.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="service__item h-100">
              <div className="icon">
                <FaDesktop />
              </div>
              <h3>Web Designer</h3>
              <p>
                As a web designer, I focus on creating clean and user-friendly website designs, including layout, typography, and color selection. I use tools like Figma and Adobe Photoshop to design modern and visually appealing interfaces.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="service__item h-100">
              <div className="icon">
                <FaBrain />
              </div>
              <h3>Problem Solving</h3>
              <p>
                I actively solve algorithmic and data structure problems to strengthen my logical thinking and coding skills. I regularly participate in online judges like Codeforces and CodeChef, solving a wide range of problems and improving my efficiency, accuracy, and ability to tackle complex challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- ========== Service section start ========== -->
  );
};

export default Services;
