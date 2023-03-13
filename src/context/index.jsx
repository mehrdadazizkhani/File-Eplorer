import React, { createContext, useContext, useState } from "react";
import uuid from "react-uuid";
import _ from "lodash";

export const FolderTreeContext = createContext();

const FolderTreeProvider = ({ children }) => {
  const [data, setData] = useState({ children: [] });

  const handleAdd = (isFolder, parentPathId) => {
    const newId = uuid();

    const newFolder = {
      name: "New Folder",
      type: "folder",
      children: [],
      pathId: newId,
    };

    const newFile = {
      name: "Untitled",
      type: "file",
      pathId: newId,
    };

    if (isFolder) {
      if (parentPathId) {
        const clonedData = _.cloneDeep(data);
        const findPath = (tree, parentPathId) => {
          if (tree.pathId === parentPathId) {
            tree.children.push(newFolder);
            setData(clonedData);
            return;
          } else {
            tree.children.map((child) => findPath(child, parentPathId));
          }
        };
        findPath(clonedData, parentPathId);
      } else {
        setData({ ...data, children: [...data.children, newFolder] });
      }
    } else {
      if (parentPathId) {
      } else {
        setData({ ...data, children: [...data.children, newFile] });
      }
    }
  };

  const handleRemove = () => {};
  const handleRename = () => {};

  return (
    <FolderTreeContext.Provider
      value={{ data, handleAdd, handleRemove, handleRename }}
    >
      {children}
    </FolderTreeContext.Provider>
  );
};

export const useTree = () => {
  const folderContext = useContext(FolderTreeContext);
  if (folderContext) return folderContext;
  throw new Error("Context tree dosnt provided");
};

export default FolderTreeProvider;
