import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const contactForm = process.env.REACT_APP_CONTACT;

const Contact = () => {
  return (
    // <!-- ========== Contact section start ========== -->
    <section className="section-padding contact">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="section-title-center text-center">
              <span>Contact us</span>
              <h2 className="display-6">Contact me anything or anytime</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-8 col-md-6 col-sm-12 mb-4 mb-md-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="contact-form-box">
              <form id="contact-form" method="post" action={contactForm}>
                <div className="message col">
                  <p className="email-loading alert alert-warning">
                    <img src="assets/images/loading.gif" alt="loader" />
                    &nbsp;&nbsp;&nbsp;Sending...
                  </p>
                  <p className="email-success alert alert-success">
                    <i className="icofont-check-circled"></i> Your quote has
                    successfully been sent.
                  </p>
                  <p className="email-failed alert alert-danger">
                    <i className="icofont-close-circled"></i> Something went
                    wrong!
                  </p>
                </div>
                <div className="d-lg-flex gap-3">
                  <div className="w-100">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      name="name"
                      className="contact-name"
                      id="contact-name"
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="w-100">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input
                      name="phone"
                      className="contact-phone"
                      id="contact-phone"
                      type="number"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    name="email"
                    className="contact-email"
                    id="contact-email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    name="subject"
                    className="contact-subject"
                    id="contact-subject"
                    type="text"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-message">Your Message</label>
                  <textarea
                    name="message"
                    className="contact-message"
                    id="contact-message"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="button button__primary align-items-center"
                >
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-md-0"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="contact__address">
              <div className="contact__address__image">
                <img src="assets/images/contact1.png" alt="Contact" />
              </div>
              <div className="contact__address__title">
                <h3>Abdul Aziz</h3>
                <p>Frontend Developer</p>
              </div>
              <div className="contact__address__description">
                <p>
                  I am available for freelance work. Connect with me via and
                  call into my account.
                </p>
                <span>
                  Phone: <a href="tel:01887538750">+8801887538750</a>
                </span>
                <span>
                  Email:
                  <a href="mailto:tamimaziz2007@gmail.com">
                    {" "}
                    tamimaziz2007@gmail.com
                  </a>
                </span>
              </div>
              <h4>Find with me</h4>
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
    </section>
    // <!-- ========== Contact section end ========== -->
  );
};

export default Contact;
