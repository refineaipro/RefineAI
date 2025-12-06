"use client";
export default function TrustedBy() {
  return (
    <section className="w-full bg-black py-16">
      <div className="text-center mb-10">
        <span className="px-4 py-2 bg-white/10 text-white rounded-md text-sm tracking-wide">
          HELPING PROFESSIONALS LAND INTERVIEWS AT
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-14">

        {/* Google — already perfect */}
        <img src="/logos/google.png" alt="Google" className="h-10 object-contain" />

        {/* Meta — convert dark blue to white */}
        <img
          src="/logos/meta.svg"
          alt="Meta"
          className="h-10 object-contain invert brightness-200"
        />

        {/* Amazon — convert black text to white */}
        <img
          src="/logos/amazon.png"
          alt="Amazon"
          className="h-10 object-contain invert brightness-200"
        />

        {/* Netflix — enhance brightness only */}
        <img
          src="/logos/netflix.png"
          alt="Netflix"
          className="h-10 object-contain brightness-150"
        />

        {/* Stripe — convert purple to white */}
        <img
          src="/logos/stripe.webp"
          alt="Stripe"
          className="h-10 object-contain invert brightness-200"
        />

        {/* Microsoft — already perfect */}
        <img src="/logos/microsoft.png" alt="Microsoft" className="h-10 object-contain" />

      </div>
    </section>
  );
}
