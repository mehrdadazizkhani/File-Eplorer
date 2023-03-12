import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiReact,
  SiTypescript,
  SiGit,
} from "react-icons/si";
import { VscFile } from "react-icons/vsc";

const FileIcon = ({ title }) => {
  if (title.endsWith(".html")) {
    return <SiHtml5 className="text-orange-600" />;
  } else if (title.endsWith(".css")) {
    return <SiCss3 className="text-blue-400" />;
  } else if (title.endsWith(".js")) {
    return <SiJavascript className="text-yellow-400" />;
  } else if (title.endsWith(".jsx")) {
    return <SiReact className="text-cyan-400" />;
  } else if (title.endsWith(".ts")) {
    return <SiTypescript className="text-blue-600" />;
  } else if (title.startsWith(".gitignore")) {
    return <SiGit className="text-orange-600" />;
  } else {
    return <VscFile />;
  }
};

export default FileIcon;
