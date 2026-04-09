
const Projects = () => {

  return (
    <div className="projects section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="section-title-center text-center">
              <span>Projects</span>
              <h2 className="display-6">Some of my projects</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="projects__item">
              <div className="projects__item__image">
                <a href="https://www.codechef.com/users/aziztamim"><img className="img-fluid" src="assets/images/codechef.png" alt="CodeChef" /></a>
              </div>
              <div className="projects__item__content">
                <h3><a href="https://www.codechef.com/users/aziztamim">CodeChef</a></h3>
                <p>I have been actively solving problems on CodeChef for over 6 months. Through regular participation in contests, I have achieved a maximum rating of 1637 and earned a 3-star rating.</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
          >
            <div className="projects__item">
              <div className="projects__item__image">
                <a href="https://codeforces.com/profile/AbdulAzizTamim"><img className="img-fluid" src="assets/images/codeforces.png" alt="Codeforces" /></a>
              </div>
              <div className="projects__item__content">
                <h3><a href="https://codeforces.com/profile/AbdulAzizTamim">Codeforces</a></h3>
                <p>I have been actively solving problems on Codeforces for over a year, during which I have solved more than 400 problems. Through regular participation in contests, I have achieved a rating of 1199. continuously improving my problem-solving and algorithmic skills.</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="projects__item">
              <div className="projects__item__image">
                <a href="https://cpifeni.vercel.app/"><img className="img-fluid" src="assets/images/cpi-website.png" alt="cpi website" /></a>
              </div>
              <div className="projects__item__content">
                <h3><a href="https://cpifeni.vercel.app/">Compact Polytechnic Institute</a></h3>
                <p>This is my semester project where I developed my institute’s website. It contains detailed information about my college and provides regular updates such as curriculum and various activities. It took me around one month to complete this project.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
