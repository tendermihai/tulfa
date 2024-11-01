import React from "react";
import "../styles/Main.css";
import barnkids from "../images/barnkids.png";
import cubs from "../images/cubs.png";
import motor from "../images/motor.png";
import nike from "../images/nike.png";
import product from "../images/product.png";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import groupimage from "../images/groupimg.png";
import arviewer from "../images/arviewer.png";
import omnichanel from "../images/omnichanel.png";
import productimagery from "../images/productimagery.png";
import groupimg from "../images/groupimg.png";
import group8 from "../images/group8.png";
import video from "../images/video.png";
import polygon from "../images/polygon.png";

function Main() {
  return (
    <>
      <div className="immersive">
        <h2 className="tulfa-ar-text">
          Tulfa AR creates immersive and <br />
          engaging eCommerce experiences <br />
        </h2>
        <div class="img-frame">
          <section className="ar-images">
            <img src={nike}></img>
            <img src={barnkids}></img>
            <img src={cubs}></img>
            <img src={product}></img>
            <img src={motor}></img>
          </section>
        </div>
      </div>

      <div className="discover-solutions">
        <h2 className="solutions-text">Discover our Solutions</h2>
        <h5 className="scale-text">
          Scale your product with the optimal solutions for e-commerce
        </h5>
      </div>
      <div className="group-7">
        <img src={image1} className="group-img"></img>
        <img src={image2} className="group-img"></img>
        <img src={image3} className="group-img"></img>
      </div>
      <div className="group-3">
        <img src={groupimg} className="groupimg"></img>
      </div>

      <div className="group-9">
        <img src={productimagery}></img>
        <img src={arviewer}></img>
        <img src={omnichanel}></img>
      </div>
      <div className="group-8">
        <img src={group8} className="group8-img"></img>
      </div>

      <div className="innovations">
        <section>
          <p className="innovation-content">METAVERSE CONTENT PRODUCTION</p>
          <h3 className="innstore">InStore Immersive Activation</h3>
          <p className="innovations-text">
            Tulfa's AR feature was tailor-made to suit both the venue and the{" "}
            <br />
            audience. With the easy-to-operate touchscreen scan interface, we{" "}
            <br />
            brought live-action bees to Kate Spade customers!
          </p>
          <button className="btn-learnmore">LEARN MORE ABOUT AR</button>
        </section>
        <section className="video-section">
          <img src={video} className="video"></img>
          <img src={polygon} className="polygon"></img>
        </section>
      </div>
    </>
  );
}

export default Main;
