import Image from "next/image";

export default function Watermark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
    >
      <div className="-rotate-45 flex flex-col items-center gap-4 opacity-70 select-none">
        <Image
          src="/nexsite-logo.png"
          alt=""
          width={900}
          height={900}
          priority
          className="w-[130vw] max-w-none md:w-[70vw] md:max-w-[900px] h-auto"
        />
        <span className="text-[5vw] md:text-[3vw] font-semibold tracking-widest text-slate-900 whitespace-nowrap">
          nexsitestudios.co.za
        </span>
      </div>
    </div>
  );
}
