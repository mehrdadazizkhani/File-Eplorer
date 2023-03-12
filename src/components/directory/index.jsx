import FileComponent from "../file";
import FolderComponent from "../folder";

const Directory = ({ files }) => {
  if (files.type === "folder") {
    return (
      <FolderComponent
        titleProp={files.name}
        childrens={files.childrens}
        id={files.id}
      />
    );
  }
  return <FileComponent titleProp={files.name} />;
};

export default Directory;
