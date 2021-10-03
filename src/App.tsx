import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SideNav } from "./components/app/nav/SideNav";
import { Home } from "./components/home/HomePage";
import { Projects } from "./components/projects/ProjectsPage";
import { Contact } from "./components/contact/ContactPage";
import { NotFoundPage } from "./components/404/NotFoundPage";
import { About } from "./components/about/AboutPage";

import "./App.css";

const navWidthPercent = 20;

const paths: Record<
  string,
  {
    name: string;
    component: () => JSX.Element;
  }
> = {
  "/": { name: "home", component: Home },
  "/projects": { name: "projects", component: Projects },
  "/contact": { name: "contact", component: Contact },
  "/about": { name: "about", component: About },
};

function App() {
  useEffect(() => {
    document.title = "Make Fun Stuff";
  }, []);

  const path = (window.location.pathname.match("/[a-zA-Z0-9]+") || [])[0] || "";
  const [activePage, setActivePage] = React.useState(
    paths[path] ? paths[path].name : "404"
  );

  return (
    <div className="App">
      <Router>
        <SideNav
          activePage={activePage}
          setActivePage={setActivePage}
          widthPercent={navWidthPercent}
        />
        <div
          className="App-Main"
          style={{
            left: `${navWidthPercent}%`,
            width: `${100 - navWidthPercent}%`,
          }}
        >
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/projects"} component={Projects} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/about"} component={About} />

            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
