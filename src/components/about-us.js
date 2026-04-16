import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="about-us section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="section-title-center text-center">
              <span>ABOUT ME</span>
              <h2 className="display-6">Some core information's about me</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div
            className="col-lg-6 mb-3 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="about-us__image">
              <img
                className="img-fluid"
                src="assets/images/tamim-hero-image.jpg"
                alt="About us"
              />
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="about-us__content">
              <h3 className="display-6">Hello, I'm Abdul Aziz</h3>
              <p className="about-us__content__text">
                I am a passionate Frontend Developer with a strong focus on JavaScript and modern web technologies, aiming to build a career as a Professional Software Engineer in Bangladesh’s software industry by working with local and multinational IT companies; I am a Diploma student in Computer Science and Engineering with strong problem-solving skills, having solved 500+ problems, achieved a 3★ rating on CodeChef and Pupil on Codeforces, and I am proficient in C, C++, Data Structures and Algorithms, while also skilled in building responsive web applications using HTML5, CSS3, Bootstrap, Tailwind CSS, and Sass, with experience in deploying projects on Vercel and Netlify, and continuously learning new technologies to improve my skills.
              </p>
              <p>
                I want to be a Professional Software Engineer, it's my dream.
                I love to learn new tech and new languages.
              </p>
              <h3 className="mt-4">My Social Media Accounts.</h3>
              <ul className="social-icon mt-3">
                <li>
                  <a href="https://www.facebook.com/imtamimaziz">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/imtamimaziz/">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="tel:01887538750">
                    <BsWhatsapp />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/imtamimaziz/">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/aziz-tamim">
                    <FiGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
