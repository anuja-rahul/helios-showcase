import ColorScrollParent, {
  ColorScrollSection,
} from "../ui/ColorVariantSection";
import AnimatedTitle from "../ui/text-effects/AnimatedTitle";

export default function NavBar() {
  return (
    // <section className="relative h-dvh w-screen overflow-x-hidden bg-gray-600/10">
    <section className="relative min-h-dvh h-auto w-full overflow-x-hidden">
      <ColorScrollParent className="h-auto w-full p-0 m-0">
        <ColorScrollSection
          className="h-screen w-full overflow-x-hidden bg-black text-white flex flex-col items-center justify-center"
          bgColor="#000000"
          textColor="#ffffff"
        >
          <h1 className="text-9xl">Section 1</h1>
          <AnimatedTitle title="Section 1 <br />" />
        </ColorScrollSection>
        <ColorScrollSection
          className="h-screen w-full overflow-x-hidden flex flex-col items-center justify-center"
          bgColor="#ceff1f"
          textColor="#000000"
        >
          <h1 className="text-9xl">Section 2</h1>
        </ColorScrollSection>
        <ColorScrollSection
          className="h-screen w-full overflow-x-hidden flex flex-col items-center justify-center"
          bgColor="#fcba03"
          textColor="#ffffff"
        >
          <h1 className="text-9xl">Section 3</h1>
        </ColorScrollSection>
      </ColorScrollParent>
    </section>
  );
}
