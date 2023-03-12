import React, { useState } from "react";
import {
  VscNewFile,
  VscNewFolder,
  VscChevronRight,
  VscChevronDown,
} from "react-icons/vsc";
import Directory from "../directory";
import files from "../../files.json";

const Main = () => {
  const [collapse, setCollpase] = useState(true);
  const [data, setData] = useState();

  const handleNewFile = () => {};
  return (
    <main className="flex h-[calc(100vh-96px)]">
      <aside className="h-full w-[450px] bg-slate-800 p-3">
        <div className="flex h-10 w-full cursor-pointer items-center justify-between rounded-md bg-slate-700 p-2">
          <div
            onClick={() => {
              setCollpase(!collapse);
            }}
            className="flex h-full w-full items-center"
          >
            {collapse ? (
              <VscChevronDown size={25} />
            ) : (
              <VscChevronRight size={25} />
            )}
            EXPLORER
          </div>

          <div
            className={`${
              collapse ? "flex" : "hidden"
            } h-full items-center justify-center gap-2 text-xl`}
          >
            <VscNewFile
              className="cursor-pointer hover:opacity-70"
              onClick={handleNewFile}
            />
            <VscNewFolder className="cursor-pointer hover:opacity-70" />
          </div>
        </div>
        <div className={`overflow-hidden ${collapse ? "h-fit" : "h-0"}`}>
          <Directory files={files} />
        </div>
      </aside>
      <article className="h-full w-[calc(100%-450px)] bg-slate-900"></article>
    </main>
  );
};

export default Main;
