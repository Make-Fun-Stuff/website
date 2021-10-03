import "./Page.css";

export interface PageProps {
  title: string;
  children: any;
}

export const Page = (props: PageProps) => {
  return (
    <div className="App-Page">
      <h2 className="Page-Title">{props.title}</h2>
      {props.children}
    </div>
  );
};
