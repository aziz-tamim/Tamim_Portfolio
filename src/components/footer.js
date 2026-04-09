import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    // <!-- ========== Footer section start ========== -->
    <div className="footer py-5 px-4 text-center">
      <p className="pt-3">
        &copy; {year} All right reserved. Made with by{" "}
        <a target="_blank" href="https://github.com/aziz-tamim" rel="noreferrer">
          Abdul Aziz.
        </a>
      </p>
    </div>
  );
};

export default Footer;
