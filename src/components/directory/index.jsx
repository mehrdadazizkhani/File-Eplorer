import { useTree } from "../../context";
import FileComponent from "../file";
import FolderComponent from "../folder";

const Directory = () => {
  const { data } = useTree();

  if (!data.children.length) {
    return;
  }
  return data.children.map((data) => {
    console.log({ ...data });
    if (data.type === "folder") {
      return (
        <FolderComponent
          key={data.pathId}
          titleProp={data?.name}
          childrens={data?.children}
          pathId={data?.pathId}
        />
      );
    } else {
      return (
        <FileComponent
          titleProp={data?.name}
          key={data.pathId}
          pathId={data?.pathId}
        />
      );
    }
  });
};

export default Directory;
