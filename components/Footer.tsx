export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 px-10">

        {/* Column 1 */}
        <div>
          <h2 className="text-3xl font-bold">Refine AI</h2>
          <p className="text-gray-400 mt-4">
            500 W 14TH ST<br />
            Richmond, VA 23224
          </p>

          <div className="flex gap-4 mt-6">
            <div className="w-12 h-12 bg-white/20 rounded"></div>
            <div className="w-12 h-12 bg-white/20 rounded"></div>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-gray-500 mb-3">Products</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Platform</li>
            <li>AI Matching</li>
            <li>Applications</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-gray-500 mb-3">For Candidates</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Job Search</li>
            <li>Interview Tools</li>
            <li>Resume Builder</li>
            <li>Referrals</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-gray-500 mb-3">Support</h3>
          <p className="text-gray-300">support@refine.ai</p>
        </div>

      </div>
    </footer>
  );
}
