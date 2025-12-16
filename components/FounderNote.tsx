import Image from "next/image";

export default function FounderNote() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            A note from our cofounder
          </p>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            We have been through the job search ourselves.
            The uncertainty, the rejections, and the constant guessing
            about what actually makes a difference.
            <br /><br />
            Refine AI is built from those experiences.
            From learning what works, what does not,
            and how to focus effort on the things that truly matter.
          </p>

          <div className="mt-8 text-gray-500">
            <p>Gayatri Bhavana Addala</p>
            <p>Co-founder, Refine AI</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-72 h-96 rounded-3xl overflow-hidden grayscale">
            <Image
              src="/founder-placeholder.jpg"
              alt="Gayatri Bhavana Addala"
              fill
              className="object-cover"
            />
          </div>

          {/* Soft fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
