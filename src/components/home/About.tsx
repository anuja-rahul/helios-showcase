import ColorScrollParent, {
  ColorScrollSection,
} from "../ui/ColorVariantSection";
import AnimatedTitle from "../ui/text-effects/AnimatedTitle";
import ScrambleLoadText from "../ui/text-effects/ScrambleLoadText";

export default function NavBar() {
  return (
    // <section className="relative h-dvh w-screen overflow-x-hidden bg-gray-600/10">
    <section className="relative min-h-dvh h-auto w-full overflow-x-hidden">
      <ColorScrollParent className="h-auto w-full p-0 m-0">
        <ColorScrollSection
          className="h-screen w-full overflow-x-hidden bg-black text-white flex flex-col items-center justify-center gap-8"
          bgColor="#000000"
          textColor="#ffffff"
        >
          <AnimatedTitle title="Section 1 <br />" />
          <div className="flex flex-col md:flex-row items-center justify-center w-full h-auto gap-2 md:gap-6 px-4 overflow-hidden">
            <div className="w-full md:w-1/2 flex flex-col items-end justify-center flex-nowrap overflow-hidden gap-2 md:gap-6 md:mt-20">
              <ScrambleLoadText
                text="At our core <br /> we turn ideas into <br /> impactful digital experiences <br /> that captivate and convert."
                direction="left"
              />
              <ScrambleLoadText
                text="From sleek designs to cutting <br /> edge development we create <br /> solutions that drive results."
                direction="right"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center flex-nowrap overflow-hidden gap-2 md:gap-6">
              <ScrambleLoadText
                text="we design and develop <br /> digital experiences that  <br /> leave a lasting impression."
                direction="right"
              />
              <ScrambleLoadText
                text="we build innovative solutions <br /> tailored to help your brand  <br /> thrive in the digital world."
                direction="left"
              />
            </div>
          </div>
        </ColorScrollSection>
        <ColorScrollSection
          className="h-screen w-full overflow-x-hidden flex flex-col items-center justify-center"
          bgColor="#ceff1f"
          textColor="#000000"
        >
          <AnimatedTitle title="Section 2 <br />" />
        </ColorScrollSection>
        <ColorScrollSection
          className="h-screen w-full overflow-x-hidden flex flex-col items-center justify-center"
          bgColor="#fcba03"
          textColor="#ffffff"
        >
          <AnimatedTitle title="Section 3 <br />" />
        </ColorScrollSection>
      </ColorScrollParent>
    </section>
  );
}
