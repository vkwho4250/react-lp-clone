const ListItem = ({ index, item }) => {
   return (
      <li className="list-item">
         <div className="number">
            <h3>{`0${index + 1}`}</h3>
         </div>
         <div className="dash"></div>
         <h3>{item}</h3>
      </li>
   );
};

export default ListItem;
