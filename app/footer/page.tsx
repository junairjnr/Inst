import { BiSolidHome } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

import React from "react";

function Footer() {
  return (
    //here is an absolute ,and i'm replaced with fixed
    <footer className="fixed bg-gray-800 text-white p-4 text-center  bottom-0 w-full flex flex-row">
      <BiSolidHome />
      <FiSearch />
    </footer>
  );
}

export default Footer;
