import FileComponent from "../file";
import FolderComponent from "../folder";

const Directory = ({ files }) => {
  if (files.type === "folder") {
    return (
      <FolderComponent
        key={files.pathId}
        titleProp={files?.name}
        childrens={files?.children}
        pathId={files?.pathId}
        isFirstTime={files.isFirstTime}
      />
    );
  } else {
    return (
      <FileComponent
        titleProp={files?.name}
        key={files.pathId}
        pathId={files?.pathId}
        isFirstTime={files.isFirstTime}
      />
    );
  }
};

export default Directory;
