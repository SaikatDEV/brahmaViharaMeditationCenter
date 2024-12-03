import React from "react";

function DonateOnline() {
  return (
    <div className="p-6 bg-gray-100 h-auto min-h-[850px] flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Donate Online
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Your generosity helps us continue our mission. Please donate using one
          of the following methods:
        </p>

        {/* Zelle Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-600">Zelle</h3>
          <p className="text-gray-700">
            Send your donation via Zelle to the following email address:
          </p>
          <p className="font-semibold text-gray-900 mt-2">zelle@example.com</p>
        </div>

        {/* Bank Check Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-600">
            Send a Personal Check
          </h3>
          <p className="text-gray-700">
            Mail your check to the following address:
          </p>
          <p className="font-semibold text-gray-900 mt-2">
            Brahma Vihara Meditation Center
            <br />
            123 Meditation Way
            <br />
            Peaceful City, PC 12345
          </p>
        </div>

        {/* Call for More Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-600">Call Us</h3>
          <p className="text-gray-700">
            For more information about the donation process, please call us at:
          </p>
          <p className="font-semibold text-gray-900 mt-2">+1 (555) 123-4567</p>
        </div>

        {/* Thank You Note */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Thank you for your support. Your kindness makes a difference.
        </p>
      </div>
    </div>
  );
}

export default DonateOnline;
