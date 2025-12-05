export default function FooterGlow() {
  return (
    <section className="relative w-full h-[300px] md:h-[420px] bg-black overflow-hidden flex items-end">
      
      {/* BACKGROUND GRADIENT LIKE MICRO1 */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#7089a5]/60 via-[#111]/70 to-black" />

      {/* GIANT TRANSLUCENT WORD BEHIND */}
      <h1
        className="
          absolute bottom-0 left-1/2 -translate-x-1/2
          text-[180px] md:text-[320px]
          font-heading
          text-white/5
          tracking-tight
          select-none
          pointer-events-none
          leading-none
        "
      >
        refineAI
      </h1>

      {/* FOOTER CONTENT */}
      <div className="relative z-10 w-full text-center pb-10">
        <p className="text-white/70 text-sm md:text-base font-body">
          © 2025 RefineAI. All rights reserved.
        </p>
      </div>
    </section>
  );
}
