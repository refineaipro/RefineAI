"use client";

export default function TrustedBy() {
  const logos = [
    { src: "/logos/amazon.png" },
    { src: "/logos/google.png" },
    { src: "/logos/meta.svg" },
    { src: "/logos/microsoft.png" },
    { src: "/logos/netflix.png" },
    { src: "/logos/stripe.webp" },

    // Manually boosted logos
    { src: "/logos/2.png", className: "max-h-14 max-w-[170px]" },
    { src: "/logos/3.png", className: "max-h-14 max-w-[170px]" },
    { src: "/logos/7.png", className: "max-h-14 max-w-[170px]" },
    { src: "/logos/8.png", className: "max-h-16 max-w-[180px]" },
    { src: "/logos/9.png", className: "max-h-14 max-w-[170px]" },
  ];

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="text-center mb-10">
        <span className="text-black tracking-wide text-lg font-semibold">
          HELPING PROFESSIONALS LAND INTERVIEWS AT
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-20">
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt="Trusted company logo"
              className={`
                object-contain transition
                max-h-10 max-w-[140px]
                ${logo.className ?? ""}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
