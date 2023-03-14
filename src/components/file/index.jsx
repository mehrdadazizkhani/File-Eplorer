import React, { useState, useEffect } from "react";
import { VscTrash, VscEdit, VscCheck } from "react-icons/vsc";
import FileIcon from "./fileIcon";
import { useTree } from "../../context";

const FileComponent = ({ titleProp, pathId, isFirstTime }) => {
  const [title, setTitle] = useState(titleProp);
  const [edit, setEdit] = useState(false);
  const { handleRemove, handleRename } = useTree();

  const handleEdit = (e) => {
    if (e.target.value) {
      setTitle(e.target.value);
    } else {
      setTitle("Untitled");
    }
  };

  useEffect(() => {
    setEdit(isFirstTime);
  }, []);

  return (
    <div className="group relative flex w-full cursor-pointer items-center justify-between rounded-md py-1 px-2 hover:bg-cyan-900">
      <div className="flex w-full items-center gap-2">
        <FileIcon title={title} />
        {edit ? (
          <input
            maxLength="20"
            className="rounded-md bg-slate-400 px-2 text-slate-900"
            type="text"
            onChange={handleEdit}
            value={title}
          />
        ) : (
          title
        )}
      </div>
      <div className="absolute right-0 top-0 hidden h-full items-center gap-2 py-2 pr-4 transition-all duration-200 group-hover:flex">
        {edit ? (
          <VscCheck
            className="hover:opacity-70"
            onClick={() => {
              handleRename(pathId, title);
              setEdit(false);
            }}
          />
        ) : (
          <VscEdit
            className="hover:opacity-70"
            onClick={() => {
              setEdit(true);
            }}
          />
        )}
        <VscTrash
          className="hover:opacity-70"
          onClick={() => {
            handleRemove(pathId);
          }}
        />
      </div>
    </div>
  );
};

export default FileComponent;
