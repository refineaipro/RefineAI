"use client";

export default function TrustedBy() {
  return (
    <section className="w-full bg-white py-14">
      
      <div className="text-center mb-10">
        <span className="text-black tracking-wide text-lg font-semibold">
          HELPING PROFESSIONALS LAND INTERVIEWS AT
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-20">

        <img src="/logos/google.png" alt="Google" className="h-10 object-contain" />
        <img src="/logos/meta.svg" alt="Meta" className="h-10 object-contain" />
        <img src="/logos/amazon.png" alt="Amazon" className="h-10 object-contain" />
        <img src="/logos/netflix.png" alt="Netflix" className="h-10 object-contain" />
        <img src="/logos/stripe.webp" alt="Stripe" className="h-10 object-contain" />
        <img src="/logos/microsoft.png" alt="Microsoft" className="h-10 object-contain" />

      </div>
    </section>
  );
}
