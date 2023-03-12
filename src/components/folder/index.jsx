import React, { useCallback, useState } from "react";
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

const FolderComponent = ({ titleProp, childrens, pathId }) => {
  const [visible, setVisible] = useState(true);
  const [collapse, setCollpase] = useState(false);
  const [title, setTitle] = useState(titleProp);
  const [showOptions, setShowOptions] = useState(true);
  const [edit, setEdit] = useState(false);

  const handleEdit = (e) => {
    if (e.target.value) {
      setTitle(e.target.value);
    } else {
      setTitle("Untitled");
    }
  };

  return (
    visible && (
      <div className="ml-2 w-full cursor-pointer">
        <div className="flex w-full items-center justify-between">
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
                maxLength="12"
                className="rounded-md bg-slate-400 px-2 text-slate-900"
                type="text"
                onChange={handleEdit}
                value={title}
              />
            ) : (
              <div>
                {title}
                <span className="ml-3 text-xs text-red-600">
                  path: <span className="text-gray-400"> {pathId}</span>
                </span>
              </div>
            )}
          </div>
          <div
            className={`flex h-full w-[150px] gap-2 py-2 transition-all duration-200 ${
              showOptions ? "opacity-100" : "opacity-0"
            }`}
          >
            {edit ? (
              <VscCheck
                className="hover:opacity-70"
                onClick={() => {
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

            <VscNewFile className="hover:opacity-70" />
            <VscNewFolder className="hover:opacity-70" />
            <VscTrash
              className="hover:opacity-70"
              onClick={() => setVisible(false)}
            />
          </div>
        </div>
        <div
          className={`ml-2 flex flex-col overflow-hidden border-l border-slate-600 pl-2 ${
            collapse ? "h-fit" : "h-0"
          }`}
        >
          {collapse &&
            childrens.map((item, index) => (
              <Directory files={item} key={index} />
            ))}
        </div>
      </div>
    )
  );
};

export default FolderComponent;
