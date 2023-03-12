import React, { createContext, useContext, useState } from "react";
import uuid from "react-uuid";

export const FolderTreeContext = createContext();

const FolderTreeProvider = ({ children }) => {
  const [data, setData] = useState({ children: [] });

  const handleAdd = (isFolder, parentPathId) => {
    if (isFolder) {
      const newFolder = {
        name: "New Folder",
        type: "folder",
        children: [],
        pathId: uuid(),
      };
      if (parentPathId) {
      } else {
        setData({ ...data, children: [...data.children, newFolder] });
      }
    } else {
      const newFile = {
        name: "Untitled",
        type: "file",
      };
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
