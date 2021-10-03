import { Nav } from "rsuite";
import { Link } from "react-router-dom";
import {
  AboutIcon,
  ContactIcon,
  HomeIcon,
  ProjectsIcon,
  YouTubeIcon,
} from "../../general/Icon";

export interface SideNavProps {
  widthPercent: number;
  activePage: string;
  setActivePage: (page: string) => any;
}

export const SideNav = (props: SideNavProps) => {
  return (
    <div className="SideNav">
      <Nav
        vertical
        appearance="subtle"
        activeKey={props.activePage}
        onSelect={props.setActivePage}
        style={{
          width: `${props.widthPercent}%`,
          height: "100vh",
          backgroundColor: "#1A4260",
          paddingTop: "5%",
        }}
      >
        <Nav.Item eventKey="home" icon={<HomeIcon />} as={Link} to={"/"}>
          Home
        </Nav.Item>
        <Nav.Item
          disabled={true}
          eventKey="youtube"
          icon={<YouTubeIcon />}
          href={"https://youtube.com/MakeFunStuff"}
        >
          YouTube
        </Nav.Item>
        <Nav.Item
          eventKey="projects"
          icon={<ProjectsIcon />}
          as={Link}
          to={"/projects"}
        >
          Projects
        </Nav.Item>
        <Nav.Item eventKey="about" icon={<AboutIcon />} as={Link} to={"/about"}>
          About
        </Nav.Item>
        <Nav.Item
          eventKey="contact"
          icon={<ContactIcon />}
          as={Link}
          to={"/contact"}
        >
          Contact
        </Nav.Item>
      </Nav>
    </div>
  );
};
