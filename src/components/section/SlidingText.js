const SlidingText = ({ image }) => {
   return (
      <div className="slider-container">
         <div className="top-slider">
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
         <div className="bottom-slider">
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
