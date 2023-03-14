import React, { createContext, useContext, useState } from "react";
import uuid from "react-uuid";
import _ from "lodash";

export const FolderTreeContext = createContext();

const FolderTreeProvider = ({ children }) => {
  const [data, setData] = useState({
    children: [],
    type: "folder",
  });

  const handleAdd = (isFolder, parentPathId) => {
    const newId = uuid();
    const newItem = isFolder
      ? {
          name: "New Folder",
          type: "folder",
          children: [],
          pathId: newId,
          isFirstTime: true,
        }
      : {
          name: "Untitled",
          type: "file",
          pathId: newId,
          isFirstTime: true,
        };

    if (parentPathId) {
      const clonedData = _.cloneDeep(data);
      const findPath = (tree, parentPathId) => {
        if (tree.pathId === parentPathId) {
          tree.children.push(newItem);
          setData(clonedData);
          return;
        } else {
          tree.type === "folder" &&
            tree.children.map((child) => findPath(child, parentPathId));
        }
      };
      findPath(clonedData, parentPathId);
    } else {
      setData({
        ...data,
        children: [...data.children, newItem],
      });
    }
  };

  const handleRemove = (parentPathId) => {
    const clonedData = _.cloneDeep(data);
    const findPath = (tree, parentPathId) => {
      if (tree.type === "folder") {
        if (tree.children.map((child) => child.pathId).includes(parentPathId)) {
          tree.children.map((child, index) => {
            if (child.pathId === parentPathId) {
              tree.children.splice(index, 1);
            }
          });
          setData(clonedData);
          return;
        } else {
          tree.children.map((child) => findPath(child, parentPathId));
        }
      }
    };
    findPath(clonedData, parentPathId);
  };

  const handleRename = (parentPathId, name) => {
    const clonedData = _.cloneDeep(data);
    const findPath = (tree, parentPathId) => {
      if (tree.pathId === parentPathId) {
        tree.name = name;
        tree.isFirstTime = false;
        setData(clonedData);
        return;
      } else {
        tree.type === "folder" &&
          tree.children.map((child) => findPath(child, parentPathId));
      }
    };
    findPath(clonedData, parentPathId);
  };

  return (
    <FolderTreeContext.Provider
      value={{
        data,
        handleAdd,
        handleRemove,
        handleRename,
      }}
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
