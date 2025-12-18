export default function ProofSection() {
  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold">
          Proof that preparation changes outcomes
        </h2>

        <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
          Real hiring data shows that structured, tailored applications
          dramatically improve interview rates and outcomes, especially
          for international candidates.
        </p>

        {/* Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="rounded-3xl bg-white text-black p-10 shadow-xl">
            <p className="text-6xl font-bold text-green-600">2.1×</p>
            <h3 className="mt-4 text-xl font-semibold">
              More interviews with tailored resumes
            </h3>
            <p className="mt-3 text-gray-600">
              Tailored resumes convert at <span className="font-medium">5.75%</span> 
              compared to <span className="font-medium">2.68%</span> for generic ones,
              resulting in nearly double the interviews.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Source: Huntr analysis of 1.39M applications
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-white text-black p-10 shadow-xl">
            <p className="text-6xl font-bold text-green-600">2×</p>
            <h3 className="mt-4 text-xl font-semibold">
              More applications, fewer offers
            </h3>
            <p className="mt-3 text-gray-600">
              International candidates submit nearly twice as many applications
              but receive approximately <span className="font-medium">30% fewer offers</span>
              compared to domestic applicants.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Source: International Student Employment Trends Report 2025
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-white text-black p-10 shadow-xl">
            <p className="text-6xl font-bold text-green-600">$80K+</p>
            <h3 className="mt-4 text-xl font-semibold">
              Strong outcomes once hired
            </h3>
            <p className="mt-3 text-gray-600">
              International graduates who secure roles earn an average starting
              salary of over <span className="font-medium">$80,000</span>,
              reflecting strong performance in high-skill positions.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Source: International Student Employment Trends Report 2025
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
