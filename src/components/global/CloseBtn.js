const CloseBtn = ({ purpose }) => {
   return (
      <div className="close-btn">
         <div className="x-box" onClick={purpose}>
            <div className="x-line"></div>
            <div className="x-line"></div>
         </div>
      </div>
   );
};

export default CloseBtn;
