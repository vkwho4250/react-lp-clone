import SlideButton from "./SlideButton";
import PageNav from "./PageNav";

const RightSidebar = ({
   changeRequestOpened,
   changeItemHovered,
   itemHovered,
   currentSection,
   changeCurrentSection,
}) => {
   const languages = ["en", "ua", "ru"];

   return (
      <div id="right-sidebar" className="sidebar">
         <ul className="buttons-container">
            {languages.map((language, index) => {
               return (
                  <li key={index}>
                     <SlideButton
                        text={language}
                        weight={index !== 0 ? "thin" : "default"}
                        changeItemHovered={changeItemHovered}
                        itemHovered={itemHovered}
                        currentSection={currentSection}
                     />
                  </li>
               );
            })}
         </ul>
         <PageNav
            changeItemHovered={changeItemHovered}
            itemHovered={itemHovered}
            currentSection={currentSection}
            changeCurrentSection={changeCurrentSection}
         />
         <div className="start-project-container" onClick={changeRequestOpened}>
            <SlideButton
               text="Start Project"
               changeItemHovered={changeItemHovered}
               itemHovered={itemHovered}
            />
         </div>
      </div>
   );
};

export default RightSidebar;
