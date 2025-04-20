// import HoverStretchText from "./text-effects/HoverStretchText";

import MovingBgLink from "./text-effects/MovingBgLink";

export default function Footer() {
  return (
    <footer className="w-screen bg-black min-h-80 relative bottom-0 m-0 p-0 flex flex-col items-center justify-center gap-4 text-white">
      <p className="text-white px-4 text-sm mb-8">
        Still bouncing ideas on this one
      </p>
      {/* <HoverStretchText text="AXEZ" /> */}
      <div className="flex flex-row gap-2 items-center justify-center h-auto w-full">
        <div className="flex flex-col gap-1 items-end justify-center h-auto w-1/2 !tracking-wide">
          <MovingBgLink href="/" className="!text-[10px]" text="About" />
          <MovingBgLink href="/" className="!text-[10px]" text="Products" />
          <MovingBgLink href="/" className="!text-[10px]" text="Journey" />
          <MovingBgLink href="/" className="!text-[10px]" text="Contact Us" />
          <MovingBgLink href="/" className="!text-[10px]" text="Terms" />
        </div>
        <div className="flex flex-col gap-1 items-start justify-center h-auto w-1/2 !tracking-wide">
          <MovingBgLink href="/" className="!text-[10px]" text="Careers" />
          <MovingBgLink href="/" className="!text-[10px]" text="Team" />
          <MovingBgLink href="/" className="!text-[10px]" text="Reviews" />
          <MovingBgLink href="/" className="!text-[10px]" text="Partners" />
          <MovingBgLink href="/" className="!text-[10px]" text="Services" />
        </div>
      </div>
    </footer>
  );
}
