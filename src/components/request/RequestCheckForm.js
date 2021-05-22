import RequestOption from "./RequestOption";

const RequestCheckForm = ({ title, firstSet, secondSet }) => {
   return (
      <div id="request-check-form">
         <h1>{title}</h1>
         <div className="option-container">
            <div className="option-column">
               {firstSet.map((item, index) => {
                  return <RequestOption item={item} key={index} />;
               })}
            </div>
            <div className="option-column">
               {secondSet.map((item, index) => {
                  return <RequestOption item={item} key={index} />;
               })}
            </div>
         </div>
      </div>
   );
};

export default RequestCheckForm;
