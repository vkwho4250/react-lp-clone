import PageNavBtn from "./PageNavBtn";

const PageNav = ({
   changeItemHovered,
   itemHovered,
   changeCurrentSection,
   currentSection,
}) => {
   const pages = [
      "home",
      "practice",
      "awards",
      "projects",
      "services",
      "about",
      "contact",
   ];

   return (
      <div id="page-navigation">
         {pages.map((page, index) => {
            return (
               <PageNavBtn
                  key={index}
                  index={index}
                  page={page}
                  changeItemHovered={changeItemHovered}
                  itemHovered={itemHovered}
                  changeCurrentSection={changeCurrentSection}
                  currentSection={currentSection}
               />
            );
         })}
      </div>
   );
};

export default PageNav;
