import "./styles/css/styles.css";
import React, { useState } from "react";

import Home from "./sections/Home";
import Practice from "./sections/Practice";
import Awards from "./sections/Awards";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";
import TopNavBar from "./components/navbars/TopNavBar";
import RightSidebar from "./components/navbars/RightSidebar";
import LeftSidebar from "./components/navbars/LeftSidebar";
import Menu from "./components/menu/Menu";
import Request from "./components/request/Request";

export const appContext = React.createContext();

const App = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [requestOpened, setRequestOpened] = useState(false);
  const [currentSection, setCurrentSection] = useState("home-page");

  const changeCurrentSection = (id) => setCurrentSection(id);
  const changeMenuOpened = () => setMenuOpened(!menuOpened);
  const changeRequestOpened = () => setRequestOpened(!requestOpened);

  const appContextValue = {
    changeCurrentSection,
    changeMenuOpened,
    changeRequestOpened,
  };

  return (
    <appContext.Provider value={appContextValue}>
      <div
        id="app"
        className={
          currentSection === "awards-page" || currentSection === "projects-page"
            ? "dark-mode"
            : ""
        }
      >
        <TopNavBar changeMenuOpened={changeMenuOpened} />

        <Menu
          //  changeMenuOpened={changeMenuOpened}
          menuOpened={menuOpened}
          //  changeRequestOpened={changeRequestOpened}
          //  changeCurrentSection={changeCurrentSection}
        />
        <Request
          changeRequestOpened={changeRequestOpened}
          requestOpened={requestOpened}
        />
        <LeftSidebar changeMenuOpened={changeMenuOpened} />
        <RightSidebar
          changeRequestOpened={changeRequestOpened}
          changeCurrentSection={changeCurrentSection}
          currentSection={currentSection}
        />

        <Home changeCurrentSection={changeCurrentSection} />
        <Practice
          changeRequestOpened={changeRequestOpened}
          changeCurrentSection={changeCurrentSection}
        />
        <Awards
          changeRequestOpened={changeRequestOpened}
          changeCurrentSection={changeCurrentSection}
        />
        <Projects changeCurrentSection={changeCurrentSection} />
        <Services
          changeRequestOpened={changeRequestOpened}
          changeCurrentSection={changeCurrentSection}
        />
        <About
          changeRequestOpened={changeRequestOpened}
          changeCurrentSection={changeCurrentSection}
        />
        <Contact
          changeRequestOpened={changeRequestOpened}
          changeCurrentSection={changeCurrentSection}
        />
      </div>
    </appContext.Provider>
  );
};

export default App;
