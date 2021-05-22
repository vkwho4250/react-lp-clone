const Badge = ({ text, color }) => {
   return (
      <div style={{ background: color }} className="badge">
         <h3>
            X <span>.</span>
         </h3>
         <h4>{text}</h4>
      </div>
   );
};

export default Badge;
