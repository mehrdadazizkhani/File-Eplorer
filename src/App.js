import { useState } from "react";
import {
  VscFiles,
  VscNewFile,
  VscNewFolder,
  VscCollapseAll,
  VscChevronRight,
  VscChevronDown,
} from "react-icons/vsc";

function App() {
  const [collapse, setCollpase] = useState(false);

  return (
    <div className=" select-none text-slate-300">
      <header className="h-12 w-full bg-slate-700">
        <div className="container mx-auto flex h-full items-center justify-center gap-2 px-3 uppercase md:justify-start">
          file explorer
          <VscFiles />
        </div>
      </header>
      <main className="flex h-[calc(100vh-96px)]">
        <aside className="h-full w-[350px] bg-slate-800 p-3">
          <div
            onClick={() => {
              setCollpase(!collapse);
            }}
            className="flex h-10 w-full cursor-pointer items-center justify-between rounded-md bg-slate-700 p-4"
          >
            <div className="flex h-full items-center justify-center">
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
              <VscNewFile className="cursor-pointer hover:opacity-70" />
              <VscNewFolder className="cursor-pointer hover:opacity-70" />
              <VscCollapseAll className="cursor-pointer hover:opacity-70" />
            </div>
          </div>
          <div
            className={`ml-10 overflow-hidden ${collapse ? "h-fit" : "h-0"}`}
          >
            folder
          </div>
        </aside>
        <article className="h-full w-[calc(100%-350px)] bg-slate-900"></article>
      </main>
      <footer className="h-12 bg-slate-700">
        <div className="container mx-auto flex h-full items-center justify-center gap-2 uppercase">
          designed by{" "}
          <a
            href="https://github.com/mehrdadazizkhani"
            className="text-cyan-500"
          >
            mehrdad azizkhani
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
