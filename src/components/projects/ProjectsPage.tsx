import { Link } from "react-router-dom";
import { Page } from "../general/Page";
import { getTitleFromId } from "./ProjectDetail";

const projects: string[] = ["test_article"];

export const Projects = () => {
  return (
    <Page title="Projects">
      <div>
        <p>Check out these projects</p>
      </div>
      {projects.map((_, ndx) => (
        <Link key={ndx} to={`/projects/${_}`}>
          {getTitleFromId(_)}
        </Link>
      ))}
    </Page>
  );
};
