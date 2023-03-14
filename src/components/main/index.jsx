import React, { useState } from "react";
import { useTree } from "../../context";
import {
  VscNewFile,
  VscNewFolder,
  VscChevronRight,
  VscChevronDown,
} from "react-icons/vsc";
import Directory from "../directory";

const Main = () => {
  const [collapse, setCollpase] = useState(true);
  const { data, handleAdd } = useTree();

  return (
    <main className="flex h-[calc(100vh-96px)]">
      <aside className="relative h-full w-[600px] bg-slate-800 p-3">
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
              onClick={() => {
                handleAdd(false);
              }}
              className="cursor-pointer hover:opacity-70"
            />
            <VscNewFolder
              onClick={() => handleAdd(true)}
              className="cursor-pointer hover:opacity-70"
            />
          </div>
        </div>
        <div
          className={`my-2 ml-2 overflow-y-scroll pr-3 overflow-x-hidden scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-cyan-600 ${
            collapse ? "h-[calc(100%-50px)]" : "h-0"
          }`}
        >
          {data.children.map((child) => {
            return <Directory files={child} key={child.pathId} />;
          })}
        </div>
      </aside>
      <article className="flex h-full w-[calc(100%-600px)] flex-col bg-slate-900 p-2"></article>
    </main>
  );
};

export default Main;
