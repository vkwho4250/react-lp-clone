const YellowButton = ({ text, changeRequestOpened = null }) => {
   return (
      <button onClick={changeRequestOpened} className="big-yellow-btn">
         <h6>{text}</h6>
         <div className="pulse"></div>
      </button>
   );
};

export default YellowButton;
