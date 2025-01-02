import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialIcons = () => {
  const socialLinks = [
    { link: "#", icon: FaLinkedin },
    { link: "#", icon: FaInstagram },
    { link: "#", icon: FaTwitter },
    { link: "#", icon: FaGithub },
    { link: "#", icon: MdEmail },
  ];

  const socialIcon = socialLinks.map((Icons, index) => (
    <div key={index}>
      <a
        href={Icons.link}
        className=" hover:text-amber-500 hover:-translate-y-1 transition transform duration-300 ease-in-out"
      >
        <Icons.icon className="w-7 h-7" />
      </a>
    </div>
  ));

  return (
    <div className="text-slate-400 md:flex md:items-center md:justify-between">
      <div className="flex md:flex-col gap-7 ">{socialIcon}</div>
    </div>
  );
};

export default SocialIcons;
