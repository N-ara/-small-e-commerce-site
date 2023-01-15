import React from "react";
import Link from "next/link";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        2023 Nada Store for Electronics Accessories & Supplies, All rights
        reserverd
      </p>
      <p className="icons">
        <Link href="https://github.com/nada125am" passHref>
          <AiFillGithub />
        </Link>
        <Link href="https://twitter.com/Nada125am" passHref>
          <AiOutlineTwitter />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
