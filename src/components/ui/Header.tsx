import { FaChevronDown } from "react-icons/fa";
import AnimatedLink from "./buttons/AnimatedLink";
import NavBar from "./NavBar";
import { BiSolidCarousel } from "react-icons/bi";

export default function Header() {
  return (
    <nav className="max-w-screen w-full !overflow-hidden h-20 flex-center absolute bg-transparent text-white !z-[9999] px-4">
      <div className="flex justify-between items-center w-full h-full text-white">
        <div className="flex items-start w-1/2 pl-4 gap-4">
          <AnimatedLink
            href="/"
            title="Products"
            rightIcon={<FaChevronDown />}
          />
          <AnimatedLink
            href="/"
            title="Projects"
            rightIcon={<BiSolidCarousel />}
          />
        </div>
        <div className="flex flex-row items-center justify-end w-1/2">
          <NavBar />
        </div>
      </div>
    </nav>
  );
}
