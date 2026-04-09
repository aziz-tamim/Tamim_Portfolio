import { BiTimeFive } from "react-icons/bi";

const Blog = () => {
  return (
    <section id="blog" className="section-padding blog">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                Our Blog
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Latest Blogs
              </h2>
              <div
                className="section-divider divider-traingle"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              ></div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div
            className="col"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="card h-100 blog__single-post">
              <div className="blog__single-post__image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://sakhawat.medium.com/react-js-fundamental-10-concepts-f1bb1780df1f"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/blog1.jpg"
                    alt="blog 01"
                  />
                </a>
              </div>
              <div className="blog__single-post__body card-body">
                <div className="blog__single-post__content">
                  <h2 className="fs-4">
                    <a href="https://sakhawat.medium.com/react-js-fundamental-10-concepts-f1bb1780df1f">
                      React.js fundamental 10 concepts
                    </a>
                  </h2>
                  <p className="m-0">
                    In this blog, there are 10 simple ways to react.js. It is
                    not a complete guide to React but rather a complete
                    introduction
                  </p>
                </div>
              </div>
              <div className="blog__single-post__meta card-footer">
                <BiTimeFive /> May 7, 2021
              </div>
            </div>
          </div>
          <div
            className="col"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="card h-100 blog__single-post">
              <div className="blog__single-post__image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://sakhawat.medium.com/javascript-es6-block-binding-385781357080"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/blog2.jpg"
                    alt="blog 02"
                  />
                </a>
              </div>
              <div className="blog__single-post__body card-body">
                <div className="blog__single-post__content">
                  <h2 className="fs-4">
                    <a href="https://sakhawat.medium.com/javascript-es6-block-binding-385781357080">
                      JavaScript ES6 Block Bindin
                    </a>
                  </h2>
                  <p className="m-0">
                    Variable declarations using var are treated as if they are
                    at the top of the function this is called hoisting.
                  </p>
                </div>
              </div>
              <div className="blog__single-post__meta card-footer">
                <BiTimeFive /> May 6, 2021
              </div>
            </div>
          </div>
          <div
            className="col"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="card h-100 blog__single-post">
              <div className="blog__single-post__image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://sakhawat.medium.com/top-10-javascript-interview-questions-2e1d2f106443"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/blog3.jpg"
                    alt="blog 03"
                  />
                </a>
              </div>
              <div className="blog__single-post__body card-body">
                <div className="blog__single-post__content">
                  <h2 className="fs-4">
                    <a href="https://sakhawat.medium.com/top-10-javascript-interview-questions-2e1d2f106443">
                      Top 10 JavaScript Interview Questions
                    </a>
                  </h2>
                  <p className="m-0">
                    Here are ten common JavaScript interview questions that you
                    may encounter.
                  </p>
                </div>
              </div>
              <div className="blog__single-post__meta card-footer">
                <BiTimeFive /> May 8, 2021
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
