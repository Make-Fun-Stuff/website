import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Remarkable } from "remarkable";
import { Loader } from "rsuite";
import { Page } from "../general/Page";
import { Tag } from "./Tag";
import { startCase, toLower } from "lodash";

import "./ProjectDetail.css";

const md = new Remarkable();

const extractTags = (markdown: string) => {
  const tagMatch = markdown.match("tags:([a-zA-Z,]+)");
  if (!tagMatch) {
    return {
      markdown,
      tags: [],
    };
  }
  return {
    markdown: markdown.replace(`tags:${tagMatch[1]}`, ""),
    tags: tagMatch[1].split(","),
  };
};

export const getTitleFromId = (id: string) => {
  return startCase(toLower(id.split("_").join(" ")));
};

export const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const history = useHistory();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);

  const path = `/projects/${projectId}.md`;
  console.log(`Loading content from: ${path}`);
  if (!loading && !content) {
    setLoading(true);
    fetch(path)
      .then((response) => response.text())
      .then((markdown) => {
        console.log("Done loading");
        // article doesn't exist
        if (markdown.includes("<title>React App</title>")) {
          console.log(`Project "${projectId}" doesn't exist`);
          history.push("/404");
        } else {
          const withTags = extractTags(markdown);
          setContent(withTags.markdown);
          setTags(withTags.tags);
          setLoading(false);
        }
      });
  }

  return (
    <Page title={getTitleFromId(projectId)}>
      <div className="Project-Details">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <div className="Tag-List">
              {tags.map((_, ndx) => (
                <Tag key={ndx} id={_} />
              ))}
            </div>
            <hr />
            <div
              className="Project-Content"
              dangerouslySetInnerHTML={{
                __html: md.render(content),
              }}
            />
          </div>
        )}
      </div>
    </Page>
  );
};
