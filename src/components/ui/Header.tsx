import AnimatedLink from "./buttons/AnimatedLink";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <nav className="max-w-screen w-full !overflow-hidden h-20 flex-center absolute bg-transparent text-white !z-[9999] px-4">
      <div className="flex justify-between items-center w-full h-full text-white">
        <div className="flex items-start w-1/2">
          <AnimatedLink href="/">Hello</AnimatedLink>
        </div>
        <div className="flex flex-row items-center justify-end w-1/2">
          <NavBar />
        </div>
      </div>
    </nav>
  );
}
