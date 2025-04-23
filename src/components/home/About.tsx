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
          <div className="flex flex-row items-center justify-center w-full h-auto text-[10px] md:text-sm gap-6">
            <div className="w-1/2 flex flex-col items-end justify-center">
              <ScrambleLoadText
                text="At our core <br /> we turn ideas into <br /> impactful digital experiences that"
                direction="left"
              />
              <ScrambleLoadText
                className="mt-5"
                text="to cutting-edge development, <br /> leave a lasting impression. <br /> innovative solutions"
                direction="right"
              />
            </div>
            <div className="w-1/2 flex flex-col items-start justify-center mt-3">
              <ScrambleLoadText
              className="mt-3"
                text="captivate and convert. <br /> From sleek designs <br /> we create websites that <br /> Together, we build"
                direction="right"
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
