import { useEffect, useState } from "react";

const SlidingText = ({ image }) => {
  const [startSlide, setStartSlide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartSlide(true);
    }, 10);
  }, []);

  return (
    <div className="slider-container">
      <div className={`slider ${startSlide ? "top-slider" : ""}`}>
        <div className="slide">
          <img
            alt={`${image}-slider`}
            className="project-image"
            src={`${process.env.PUBLIC_URL}/assets/sliders/${image}-slider-top.png`}
          ></img>
        </div>
        <div className="slide">
          <img
            alt={`${image}-slider`}
            className="project-image"
            src={`${process.env.PUBLIC_URL}/assets/sliders/${image}-slider-top.png`}
          ></img>
        </div>
      </div>
      <div className={`slider ${startSlide ? "bottom-slider" : ""}`}>
        <div className="slide">
          <img
            alt={`${image}-slider`}
            className="project-image"
            src={`${process.env.PUBLIC_URL}/assets/sliders/${image}-slider-bottom.png`}
          ></img>
        </div>
        <div className="slide">
          <img
            alt={`${image}-slider`}
            className="project-image"
            src={`${process.env.PUBLIC_URL}/assets/sliders/${image}-slider-bottom.png`}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default SlidingText;
