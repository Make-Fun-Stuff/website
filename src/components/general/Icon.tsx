import {
  Icon,
  Site,
  Page,
  Email,
  PlayOutline,
  UserInfo,
  Exit,
} from "@rsuite/icons";

// TODO get better icons to work

export const HomeIcon = () => {
  return (
    <Icon>
      <Site />
    </Icon>
  );
};

export const ProjectsIcon = () => {
  return (
    <Icon>
      <Page />
    </Icon>
  );
};

export const ContactIcon = () => {
  return (
    <Icon>
      <Email />
    </Icon>
  );
};

export const YouTubeIcon = () => {
  return (
    <Icon>
      <PlayOutline />
    </Icon>
  );
};

export const AboutIcon = () => {
  return (
    <Icon>
      <UserInfo />
    </Icon>
  );
};

export const ExternalIcon = () => {
  return (
    <Icon>
      <Exit />
    </Icon>
  );
};
