export default function FeatureCards() {
  return (
    <section className="w-full py-28 bg-black flex justify-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="feature-card bg-[#FFF7D9] text-gray-800">
          <div className="feature-icon">🔍</div>

          <h2 className="feature-title">Smart Job Matching</h2>

          <p className="feature-text">
            AI analyzes your skills and experience to instantly match you with the most relevant opportunities.
          </p>

          <div className="feature-pill-row">
            <span className="pill">AI Matching</span>
            <span className="pill">Skill Fit</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="feature-card bg-[#FDECF1] text-gray-800">
          <div className="feature-icon">📝</div>

          <h2 className="feature-title">Resume Optimizer</h2>

          <p className="feature-text">
            Improve your resume with personalized suggestions tailored to each job you want to apply for.
          </p>

          <div className="feature-pill-row">
            <span className="pill">Resume Score</span>
            <span className="pill">Keyword Match</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="feature-card bg-[#E6FBF1] text-gray-800">
          <div className="feature-icon">📊</div>

          <h2 className="feature-title">Career Insights Dashboard</h2>

          <p className="feature-text">
            Track your progress and receive actionable insights to help you grow your career strategically.
          </p>

          <div className="feature-pill-row">
            <span className="pill">Insights</span>
            <span className="pill">Recommendations</span>
          </div>
        </div>

      </div>
    </section>
  );
}
