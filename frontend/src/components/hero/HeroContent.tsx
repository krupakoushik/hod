import HeroVid from "@/assets/hod-bg.mp4";

export default function HeroContent() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover brightness-[0.4] contrast-[1.3] saturate-50"
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
        <div className="font-bebas text-[18rem] md:text-[22rem] tracking-tighter leading-[0.8] text-white/95 text-center">
            <span className="text-white">H</span>
            <span className="text-primary">O</span>
            <span className="text-white">D</span>
            <p className="font-inter uppercase tracking-[0.85em] text-xs text-slate-400 md:text-sm -mt-6">
            HOUSE OF DISCIPLINE
            </p>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="absolute inset-x-0 bottom-18 flex flex-col items-center text-center">

        <div className="mb-4 font-bebas text-sm uppercase tracking-[0.5em] text-slate-300 md-10">
          YOUR NEXT TRAINING PARTNER<br />IS PROBABLY A STRANGER
        </div>

        <button className="group rounded-full border border-blue-700/60 bg-[#0B1F4D]/80 backdrop-blur-xl px-12 py-4 font-inter font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-primary-hover hover:shadow-[0_0_70px_rgba(13,110,253,.45)]">
          Join this weekend
          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </button>

      </div>

    </section>
  );
}