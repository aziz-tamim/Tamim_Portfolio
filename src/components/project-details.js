import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { MdViewInAr } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from 'swiper/modules';

const ProjectDetails = ({ data, i }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => {
    setModalShow(false);
  };

  return (
    // <!-- ========== Project details section start ========== -->
    <div
      className="col-lg-4 col-md-6 mb-4"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={(i + 2) * 50}
    >
      <div className="projects__item">
        <div className="projects__item__image">
          <img className="img-fluid" src={data.image} alt="cheesy kitchen" />
          <div className="view">
            <div className="view__icon" onClick={() => setModalShow(true)}>
              <MdViewInAr />
            </div>
            <a
              href={data.githubLink}
              target="_blank"
              rel="noreferrer"
              className="view__icon"
            >
              <FiGithub />
            </a>
          </div>
        </div>
        <div className="projects__item__content">
          <h3>{data.name}</h3>
          <p>{data.title}</p>
        </div>

        <Modal
          show={modalShow}
          onHide={handleClose}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="projects__item__modal"
        >
          <button
            type="button"
            className="projects__item__modal__close"
            onClick={handleClose}
          >
            <AiOutlineClose />
          </button>
          <div className="modal-content p-4">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <Swiper
                  modules={[FreeMode, Thumbs, Autoplay]}
                  autoplay
                  loop={true}
                  spaceBetween={10}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                >
                  {data.galleryImg.map((images, i) => (
                    <SwiperSlide key={i}>
                      <div className="modal-content__image">
                        <img
                          className="img-fluid"
                          src={images.image}
                          alt="project details"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  modules={[FreeMode, Thumbs, Autoplay]}
                  autoplay
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={3}
                  freeMode={true}
                  watchSlidesProgress={true}
                  className="mt-3"
                >
                  {data.galleryImg.map((images, i) => (
                    <SwiperSlide key={i}>
                      <div className="modal-content__image-btn">
                        <img
                          className="img-fluid"
                          src={images.image}
                          alt="project details"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="col-lg-6">
                <div className="d-flex justify-content-between align-items-center">
                  <h1 className="title">{data.name}</h1>
                  <span>
                    <a
                      className="demo"
                      target="_blank"
                      rel="noreferrer"
                      href={data.liveLink}
                    >
                      Live Demo
                    </a>
                  </span>
                </div>
                <h3 className="subtitle">{data.title}</h3>
                <div className="description">
                  {data.description.map((items, i) => (
                    <p key={i}>{items.item}</p>
                  ))}
                </div>
                <h3 className="subtitle">Technology</h3>
                <div className="technology">
                  {data.technology.map((items, i) => (
                    <span key={i}>{items.item}</span>
                  ))}
                </div>
                {data.comparable && (
                  <p className="compatible" dangerouslySetInnerHTML={{ __html: data.comparable }}></p>
                )}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
    // <!-- ========== Project details section end ========== -->
  );
};

export default ProjectDetails;
