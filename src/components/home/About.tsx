import ColorScrollParent, {
  ColorScrollSection,
} from "../ui/ColorVariantSection";

export default function NavBar() {
  return (
    // <section className="relative h-dvh w-screen overflow-x-hidden bg-gray-600/10">
      <ColorScrollParent className="h-[200vh] w-screen p-0 m-0 overflow-x-hidden">
        <ColorScrollSection className="h-screen w-full">Section 1</ColorScrollSection>
        <ColorScrollSection className="h-screen w-full" bgColor="#ff22ff" textColor="#0033ff">
          Section 2
        </ColorScrollSection>
      </ColorScrollParent>
    // </section>
  );
}
