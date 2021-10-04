import "./Page.css";

export interface PageProps {
  title: string;
  children: any;
}

export const Page = (props: PageProps) => {
  return (
    <div className="App-Page">
      <h1 className="Page-Title">{props.title}</h1>
      <div className="Page-Content">{props.children}</div>
    </div>
  );
};
