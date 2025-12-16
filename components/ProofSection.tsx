export default function ProofSection() {
  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold">
          Un-deniable proof for you
        </h2>

        <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
          70% of our customers receive a refund because they land their dream job
          before their credits are used. We celebrate wins by refunding leftover credits.
        </p>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="rounded-3xl bg-white text-black p-10 shadow-xl">
            <p className="text-6xl font-bold text-green-600">93%</p>
            <h3 className="mt-4 text-xl font-semibold">
              Landed jobs in 3 months
            </h3>
            <p className="mt-3 text-gray-600">
              47% from our applications, 46% from personal networking
              and individual efforts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-white text-black p-10 shadow-xl">
            <p className="text-6xl font-bold text-green-600">40%</p>
            <h3 className="mt-4 text-xl font-semibold">
              Less time spent in job search
            </h3>
            <p className="mt-3 text-gray-600">
              We reduce the average five-month job search to one to three months.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-white text-black p-10 shadow-xl">
            <p className="text-6xl font-bold text-green-600">200x</p>
            <h3 className="mt-4 text-xl font-semibold">
              Return on Investment
            </h3>
            <p className="mt-3 text-gray-600">
              Saved weeks often translate to an extra $20K,
              and multiple offers can lead to a $30K salary increase.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
