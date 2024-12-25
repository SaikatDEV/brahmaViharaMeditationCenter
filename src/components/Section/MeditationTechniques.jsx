import React from "react";

const MeditationTechniques = () => {
  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-100 min-h-screen flex items-center justify-center px-6 py-24">
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-green-700 mb-6">
          🌿 6R Meditation Technique 🌿
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          A simple and gentle way to calm your mind and cultivate peace based on
          the 6R technique from Dhamma Sukha.
        </p>

        <div className="text-left space-y-6">
          <div className="flex items-start space-x-4">
            <span className="text-3xl text-green-500 font-bold">1.</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Recognize
              </h3>
              <p className="text-gray-600">
                Notice when your mind wanders – thinking, planning, or
                daydreaming. Awareness is the first step!
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-3xl text-green-500 font-bold">2.</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Release</h3>
              <p className="text-gray-600">
                Gently let go of the thought. Don't force it away, just allow it
                to drift.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-3xl text-green-500 font-bold">3.</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Relax</h3>
              <p className="text-gray-600">
                Relax your body – your head, shoulders, and face. Smile inside
                and feel the calm settle in.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-3xl text-green-500 font-bold">4.</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Re-smile</h3>
              <p className="text-gray-600">
                Put a soft smile on your face. This helps relax your mind and
                body even more.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-3xl text-green-500 font-bold">5.</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Return</h3>
              <p className="text-gray-600">
                Gently return your attention to your breath or the object of
                meditation, such as loving-kindness.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-3xl text-green-500 font-bold">6.</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Repeat</h3>
              <p className="text-gray-600">
                When your mind drifts again (and it will), simply start over:
                Recognize, Release, Relax, Re-smile, Return, and Repeat.
              </p>
            </div>
          </div>

          <div className="mt-10 p-6 bg-green-100 rounded-2xl text-gray-700">
            <h3 className="text-2xl font-bold mb-4">✨ Tips for Meditating</h3>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>Meditate for 10-15 minutes daily.</li>
              <li>Sit comfortably but stay relaxed.</li>
              <li>
                Be kind to yourself – if your mind wanders, gently bring it
                back.
              </li>
              <li>No judgment – it's normal for the mind to drift.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeditationTechniques;
