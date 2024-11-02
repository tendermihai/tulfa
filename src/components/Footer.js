import React from "react";
import "../styles/Footer.css";
import footerimg from "../images/footerimg.png";

function Footer() {
  return (
    <>
      <section className="footimg">
        <img src={footerimg} className="img-footer"></img>
      </section>
      <div className="sub-section">
        <h2>Subscribe to Tufla Newsletters</h2>
        <p>Get the latest insights delivered straight to your inbox</p>
        <button className="btn-subscribe">SUBSCRIBE</button>
      </div>
    </>
  );
}

export default Footer;
