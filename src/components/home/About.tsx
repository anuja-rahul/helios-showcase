import ColorScrollParent, {
  ColorScrollSection,
} from "../ui/ColorVariantSection";

export default function NavBar() {
  return (
    // <section className="relative h-dvh w-screen overflow-x-hidden bg-gray-600/10">
    <section className="relative min-h-dvh h-auto w-full overflow-x-hidden">
      <ColorScrollParent className="h-auto w-full p-0 m-0">
        <ColorScrollSection
          className="h-screen w-full overflow-x-hidden bg-white text-black"
          bgColor="#ffffff"
          textColor="#000000"
        >
          Section 1
        </ColorScrollSection>
        <ColorScrollSection
          className="h-screen w-full overflow-x-hidden"
          bgColor="#ceff1f"
          textColor="#000000"
        >
          Section 2
        </ColorScrollSection>
        <ColorScrollSection
          className="h-screen w-full overflow-x-hidden"
          bgColor="#fcba03"
          textColor="#ffffff"
        >
          Section 3
        </ColorScrollSection>
      </ColorScrollParent>
    </section>
  );
}
