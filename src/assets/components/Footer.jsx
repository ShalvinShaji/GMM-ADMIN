import React from "react";

const Footer = () => {
  const openCredit = () => {
    window.open("https://gmmreact.netlify.app", "_blank");
  };

  return (
    <>
      <footer id="footer" className="footer">
        <div className="copyright">
          &copy; Copyright
          <strong>
            &nbsp;
            <span> GMM Hospital</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a onClick={openCredit}>AZAIC TECH LLP</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
