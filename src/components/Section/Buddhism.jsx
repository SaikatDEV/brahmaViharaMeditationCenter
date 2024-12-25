import React from "react";

const Buddhism = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 to-orange-200 min-h-screen px-6 py-20 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-5xl w-full text-center">
        <h1 className="text-5xl font-extrabold text-yellow-700 mb-8">
          The Two Major Branches of Buddhism
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Explore the key differences and core beliefs of Hinayana and Mahayana
          Buddhism, two major paths that guide millions of practitioners
          worldwide.
        </p>

        {/* Hinayana Section */}
        <div className="bg-yellow-50 p-6 rounded-2xl shadow-lg mb-10">
          <h2 className="text-3xl font-semibold text-yellow-600 mb-4">
            🌿 Hinayana Buddhism (The Narrow Path)
          </h2>
          <p className="text-gray-700 leading-8">
            Hinayana, often referred to as Theravāda, focuses on individual
            enlightenment through self-discipline, meditation, and wisdom.
          </p>
          <ul className="list-disc list-inside mt-6 text-left space-y-3 text-gray-600">
            <li>
              <strong>Goal:</strong> Personal Nirvana by becoming an Arhat.
            </li>
            <li>
              <strong>Key Practices:</strong> Following the Four Noble Truths
              and Eightfold Path.
            </li>
            <li>
              <strong>Focus:</strong> Monastic life, individual effort, and
              strict practice.
            </li>
            <li>
              <strong>Main Texts:</strong> Pali Canon (Tripitaka).
            </li>
            <li>
              <strong>Geographic Spread:</strong> Sri Lanka, Thailand, Myanmar,
              Laos, Cambodia.
            </li>
          </ul>
        </div>

        {/* Mahayana Section */}
        <div className="bg-blue-50 p-6 rounded-2xl shadow-lg mb-10">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            🌸 Mahayana Buddhism (The Great Path)
          </h2>
          <p className="text-gray-700 leading-8">
            Mahayana emphasizes universal enlightenment and compassion,
            encouraging practitioners to help all beings reach Nirvana.
          </p>
          <ul className="list-disc list-inside mt-6 text-left space-y-3 text-gray-600">
            <li>
              <strong>Goal:</strong> Become a Bodhisattva and aid others in
              their journey to enlightenment.
            </li>
            <li>
              <strong>Key Practices:</strong> Compassion, wisdom, and dedication
              to all beings.
            </li>
            <li>
              <strong>Focus:</strong> Open to laypeople, monks, and nuns.
            </li>
            <li>
              <strong>Main Texts:</strong> Mahayana Sutras (Lotus Sutra, Heart
              Sutra).
            </li>
            <li>
              <strong>Geographic Spread:</strong> China, Japan, Korea, Vietnam,
              Tibet, Mongolia.
            </li>
          </ul>
        </div>

        {/* Comparison Section */}
        <div className="bg-gradient-to-tl from-orange-100 to-yellow-50 p-6 rounded-2xl shadow-lg mb-10">
          <h2 className="text-3xl font-semibold text-orange-600 mb-6">
            Key Differences Between Hinayana and Mahayana
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="text-lg font-bold text-gray-700">Aspect</h3>
              <p className="text-gray-600 mt-2">Goal</p>
              <p className="text-gray-600 mt-2">Focus</p>
              <p className="text-gray-600 mt-2">Scriptures</p>
              <p className="text-gray-600 mt-2">Path</p>
              <p className="text-gray-600 mt-2">Geographic Spread</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-700">Differences</h3>
              <p className="text-gray-600 mt-2">
                Hinayana: Personal Nirvana / Mahayana: Universal Enlightenment
              </p>
              <p className="text-gray-600 mt-2">
                Hinayana: Individual Effort / Mahayana: Compassion for All
              </p>
              <p className="text-gray-600 mt-2">
                Hinayana: Pali Canon / Mahayana: Mahayana Sutras
              </p>
              <p className="text-gray-600 mt-2">
                Hinayana: Monastic Practice / Mahayana: Open to All
              </p>
              <p className="text-gray-600 mt-2">
                Hinayana: Southeast Asia / Mahayana: East and Central Asia
              </p>
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <div className="text-center p-8 bg-green-100 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-green-700">
            🌏 Conclusion
          </h3>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            While Hinayana focuses on personal enlightenment, Mahayana embraces
            the liberation of all beings. Despite their differences, both paths
            reflect the same essence of Buddhism – cultivating wisdom, peace,
            and compassion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Buddhism;
