import React from "react";
import { VscFiles } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="h-12 w-full bg-slate-700">
      <div className="container mx-auto flex h-full items-center justify-center gap-2 px-3 uppercase md:justify-start">
        file explorer
        <VscFiles />
      </div>
    </header>
  );
};

export default Header;
