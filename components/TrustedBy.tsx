"use client";

export default function TrustedBy() {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">

      {/* HEADING */}
      <h3 className="text-gray-800 text-lg tracking-wider font-semibold px-4 py-1 bg-blue-100 rounded-sm">
        HELPING PROFESSIONALS LAND INTERVIEWS AT
      </h3>

      {/* LOGOS */}
      <div className="mt-10 flex items-center justify-center gap-14 flex-wrap px-6">

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
