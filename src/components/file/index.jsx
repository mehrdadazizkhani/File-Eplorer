import React, { useState } from "react";
import { VscTrash, VscEdit, VscCheck } from "react-icons/vsc";
import FileIcon from "./fileIcon";

const FileComponent = ({ titleProp }) => {
  const [visible, setVisible] = useState(true);
  const [title, setTitle] = useState(titleProp);
  const [showOptions, setShowOptions] = useState(false);
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
      <div
        onMouseEnter={() => {
          setShowOptions(true);
        }}
        onMouseLeave={() => {
          !edit && setShowOptions(false);
        }}
        className="ml-0.5 w-full cursor-pointer"
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center gap-2">
            <FileIcon title={title} />
            {edit ? (
              <input
                maxLength="12"
                className="rounded-md bg-slate-400 px-2 text-slate-900"
                type="text"
                onChange={handleEdit}
                value={title}
              />
            ) : (
              title
            )}
          </div>
          <div
            className={`flex h-full w-[110px] gap-2 py-2 transition-all duration-200 ${
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
            <VscTrash
              className="hover:opacity-70"
              onClick={() => setVisible(false)}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default FileComponent;
