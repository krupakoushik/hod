import HeroVid from "@/assets/hod-bg.mp4";

export default function HeroContent() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover brightness-[0.35] contrast-[1.3] saturate-50"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={HeroVid} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-black/20" />

      
      {/* Brand */}
      <div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-28 select-none">

        <div className="font-bebas text-[18rem] md:text-[22rem] tracking-tighter leading-[0.8] text-white/95 text-center">
            HoD
            <p className="font-inter uppercase tracking-[1em] text-xs text-white/70 md:text-sm -mt-6">
            HOUSE OF DISCIPLINE
            </p>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="absolute inset-x-0 bottom-18 flex flex-col items-center text-center">

        <div className="mb-4 font-bebas text-sm uppercase tracking-[0.5em] text-neutral-300 md-10">
          YOUR NEXT TRAINING PARTNER IS PROBABLY A STRANGER
        </div>

        <button
          className="
            group
            rounded-full
            border border-white/20
            bg-white/10
            backdrop-blur-md
            px-12 py-4
            font-inter
            text-xl
            font-bold
            uppercase
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-white
            hover:text-black
          "
        >
          Join this weekend
          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

      </div>

    </section>
  );
}