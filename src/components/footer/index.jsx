import React from "react";
import { VscFiles } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="h-12 bg-slate-700">
      <div className="container mx-auto flex h-full items-center justify-center gap-2 uppercase">
        designed by{" "}
        <a href="https://github.com/mehrdadazizkhani" className="text-cyan-500">
          mehrdad azizkhani
        </a>
      </div>
    </footer>
  );
};

export default Footer;
