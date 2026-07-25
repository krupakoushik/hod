import HeroVid from "@/assets/hod-bg3.mp4";

export default function HeroContent() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover brightness-[0.5] contrast-[1.3] saturate-50"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={HeroVid} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/45 to-black" />
      <div className="absolute inset-0 bg-blue-950/10" />

      
      {/* Brand */}
      <div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-28 select-none">
        <div className="font-bebas text-[17rem] md:text-[22rem] tracking-tighter leading-[0.8] text-white/95 text-center">
            <span className="text-white">H</span>
            <span className="text-primary">O</span>
            <span className="text-white">D</span>
            <p className="font-inter uppercase tracking-[0.65em] text-xs text-white/55 md:text-sm -mt-4">
            HOUSE OF DISCIPLINE
            </p>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="absolute inset-x-0 bottom-18 flex flex-col items-center text-center">

        <div className="mb-5 font-bebas text-sm uppercase tracking-[0.5em] text-slate-300 md-10">
          YOUR NEXT TRAINING PARTNER<br />IS PROBABLY A STRANGER
        </div>

        <button className="group rounded-full border border-blue-700/60 bg-[#0B1F4D]/80 px-12 py-4 font-inter font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary-hover">
          become a fighter
          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </button>

      </div>

    </section>
  );
}