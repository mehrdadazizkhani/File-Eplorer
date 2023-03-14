import React, { useEffect, useState } from "react";
import { useTree } from "../../context";
import {
  VscChevronDown,
  VscChevronRight,
  VscFolder,
  VscTrash,
  VscNewFile,
  VscNewFolder,
  VscEdit,
  VscCheck,
  VscFolderOpened,
} from "react-icons/vsc";
import Directory from "../directory";

const FolderComponent = ({ titleProp, childrens, pathId, isFirstTime }) => {
  const [collapse, setCollpase] = useState(true);
  const [title, setTitle] = useState(titleProp);
  const [edit, setEdit] = useState(false);
  const { handleAdd, handleRemove, handleRename } = useTree();

  useEffect(() => {
    setEdit(isFirstTime);
  }, []);

  const handleEdit = (e) => {
    if (e.target.value) {
      setTitle(e.target.value);
    } else {
      setTitle("Untitled");
    }
  };

  return (
    <div className="w-full cursor-pointer">
      <div className="group relative flex w-full items-center justify-between rounded-md py-1 px-2 hover:bg-cyan-900">
        <div
          onClick={() => {
            !edit && setCollpase(!collapse);
          }}
          className="flex w-full items-center gap-2"
        >
          {collapse ? (
            <VscChevronDown size={15} />
          ) : (
            <VscChevronRight size={15} />
          )}
          {collapse ? <VscFolderOpened /> : <VscFolder />}
          {edit ? (
            <input
              maxLength="20"
              className="rounded-md bg-slate-400 px-2 text-slate-900"
              type="text"
              onChange={handleEdit}
              value={title}
            />
          ) : (
            <div>{title}</div>
          )}
        </div>
        <div className="absolute top-0 right-0 hidden h-full items-center justify-end gap-2 py-2 pr-4 transition-all duration-200 group-hover:flex">
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

          <VscNewFile
            onClick={() => {
              handleAdd(false, pathId);
            }}
            className="hover:opacity-70"
          />
          <VscNewFolder
            onClick={() => {
              handleAdd(true, pathId);
            }}
            className="hover:opacity-70"
          />
          <VscTrash
            className="hover:opacity-70"
            onClick={() => {
              handleRemove(pathId);
            }}
          />
        </div>
      </div>
      <div
        className={`ml-2 flex flex-col overflow-hidden border-l border-slate-600 pl-2 ${
          collapse ? "h-fit" : "h-0"
        }`}
      >
        {collapse &&
          childrens.map((item) => <Directory files={item} key={item.pathId} />)}
      </div>
    </div>
  );
};

export default FolderComponent;
