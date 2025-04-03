import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaProjectDiagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoDocument } from "react-icons/io5";
import { LuText } from "react-icons/lu";
import { MdMail } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";

export type siteConfig = typeof siteConfig;
export type NavBarConfig = typeof navBarConfig;

export const siteConfig = {
  //  Update accordingly to your specifications
  name: "John Doe",
  longName: "John Doe - Software Engineer | tech Enthusiast",
  description:
    "A software engineer with a passion for building web applications.",
  // if you have a custom domain, you can add it here
  //  it's very important you include the correct url here
  // otherwise the generated sitemap.xml and robots.txt will display the wrong url
  // Do not include a slash at the end of the url
  // e.g. https://example.com
  url: "https://portfolio-builder-template.vercel.app",
  creator: "@johnDoe",
  ogImgUrl: "img/opengraph-image.jpg",
  contactLinks: [
    // include your social media links here
    { name: "Github", link: "/", icon: <FaGithub /> },
    { name: "Facebook", link: "", icon: <FaFacebook /> },
    { name: "LinkedIn", link: "/", icon: <FaLinkedin /> },
    { name: "Twitter", link: "/", icon: <FaXTwitter /> },
    { name: "Instagram", link: "/", icon: <FaInstagram /> },
  ],
};

export const siteMapConfig = [
  //  Update accordingly to your specifications
  { name: "Home", href: "/", icon: <FaHome /> },
  { name: "About", href: "/about", icon: <LuText /> },
  { name: "Projects", href: "/projects", icon: <FaProjectDiagram /> },
  { name: "Contact", href: "/contact", icon: <RiContactsLine /> },
];

export const navBarConfig = [
  ...siteMapConfig,
  // highly recommend storing your resume in a public place like Google Drive or Dropbox and linking it here
  // and replace the href with the link to your resume
  { name: "CV", href: "https://drive.google.com", icon: <IoDocument /> },
];

export const homePageConfig = {
  // short name or pet name of the user
  title: "John",
};

export const aboutPageConfig = {
  //  Update accordingly to your specifications
  name: siteConfig.name,
  titles: "Software Engineer | Tech Enthusiast",
  paragraphOne: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              odit quae dicta maxime excepturi, vel corporis perspiciatis atque
              suscipit adipisci modi unde minus, maiores ea impedit debitis iste
              beatae pariatur.`,
  // You can leave paragraph two blank if not needed (just leave an empty string)
  paragraphTwo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              odit quae dicta maxime excepturi, vel corporis perspiciatis atque
              suscipit adipisci modi unde minus, maiores ea impedit debitis iste
              beatae pariatur.`,
};

export const projectsPageConfig = {
  // Update accordingly to your specifications
  // You can either the image paths to match or change the images in the public/img folder
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              odit quae dicta maxime excepturi.`,

  // You can include upto 3 projects in here, anything more will be ignored
  projects: [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, odit quae dicta maxime excepturi.",
      imgUrl: "/img/project-1.webp",
      projectUrl: "/",
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, odit quae dicta maxime excepturi.",
      imgUrl: "/img/project-2.webp",
      projectUrl: "/",
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, odit quae dicta maxime excepturi.",
      imgUrl: "/img/project-3.webp",
      projectUrl: "/",
    },
  ],
};

export const contactPageConfig = {
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam.`,
  contact: [
    // you can add more if you like, but try to keep it within 4 or 5 to fit them in small mobile screens
    { name: "Email", link: "mailto:john.doe@mail.com", icon: <MdMail /> },
    { name: "Phone", link: "tel:+1234567890", icon: <FaPhone /> },
    // { name: "LinkedIn", link: "/", icon: <FaLinkedin /> },
  ],
};
