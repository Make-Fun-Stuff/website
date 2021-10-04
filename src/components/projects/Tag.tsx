import { Tag as RSuiteTag } from "rsuite";

export interface TagProps {
  id: string;
}

interface TagConfig {
  name: string;
  color: any;
}

const tags: Record<string, TagConfig> = {
  rpi: {
    name: "Raspberry Pi",
    color: "red",
  },
  arduino: {
    name: "Arduino",
    color: "green",
  },
  esp: {
    name: "ESP8266 / ESP32",
    color: "blue",
  },
};

export const Tag = (props: TagProps) => {
  return (
    <RSuiteTag size="lg" color={tags[props.id].color}>
      {tags[props.id].name}
    </RSuiteTag>
  );
};
