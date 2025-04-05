import ColorScrollParent, {
  ColorScrollSection,
} from "../ui/ColorVariantSection";

export default function NavBar() {
  return (
    // <section className="relative h-dvh w-screen overflow-x-hidden bg-gray-600/10">
    <section className="relative min-h-dvh w-full overflow-x-hidden">
      <ColorScrollParent className="h-[200vh] w-full p-0 m-0">
        <ColorScrollSection className="h-screen w-full overflow-x-hidden">
          Section 1
        </ColorScrollSection>
        <ColorScrollSection
          className="h-screen w-full overflow-x-hidden"
          bgColor="#ff22ff"
          textColor="#0033ff"
        >
          Section 2
        </ColorScrollSection>
      </ColorScrollParent>
    </section>
  );
}
