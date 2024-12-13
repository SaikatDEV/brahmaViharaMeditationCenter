import React, { useState } from "react";

const Viharas = () => {
  // Mock data for Viharas
  const viharas = [
    {
      id: 1,
      name: "Dhammakaya International Meditation Center",
      country: "USA",
      address: "865 E Monrovia Pl, Azusa, CA 91702, USA",
      website: "https://www.dhammakaya.net/",
    },
    {
      id: 2,
      name: "Los Angeles Buddhist Vihara",
      country: "USA",
      address: "9205 Columbus Ave, North Hills, CA 91343, USA",
      website: "http://www.labuddhistvihara.org/",
    },
    {
      id: 3,
      name: "Dharmarajika Buddhist Monastery",
      country: "Bangladesh",
      address: "Bashabo, Dhaka, Bangladesh",
      website: "https://www.dharmarajika.org/",
    },
    {
      id: 4,
      name: "Chittagong Buddhist Vihara",
      country: "Bangladesh",
      address: "Chittagong, Bangladesh",
      website: "https://chittagongvihara.org/",
    },
  ];

  // State for selected country
  const [selectedCountry, setSelectedCountry] = useState("USA");

  // Filtered Viharas based on selected country
  const filteredViharas = viharas.filter(
    (vihara) => vihara.country === selectedCountry
  );

  // State for selected Vihara
  const [selectedVihara, setSelectedVihara] = useState(filteredViharas[0]);

  // Handle country toggle
  const handleToggle = (country) => {
    setSelectedCountry(country);
    const firstVihara = viharas.find((vihara) => vihara.country === country);
    setSelectedVihara(firstVihara); // Automatically select the first Vihara of the selected country
  };

  return (
    <div className="flex flex-col md:flex-row h-screen pt-20">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-200 p-4 overflow-y-auto shadow-lg">
        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => handleToggle("USA")}
            className={`px-4 py-2 rounded-lg ${
              selectedCountry === "USA"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            USA
          </button>
          <button
            onClick={() => handleToggle("Bangladesh")}
            className={`px-4 py-2 rounded-lg ${
              selectedCountry === "Bangladesh"
                ? "bg-green-600 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            Bangladesh
          </button>
        </div>

        {/* Vihara List */}
        <h2 className="text-lg font-bold mb-4">
          {selectedCountry} Buddhist Viharas
        </h2>
        <ul className="space-y-2">
          {filteredViharas.map((vihara) => (
            <li
              key={vihara.id}
              className={`p-2 cursor-pointer rounded ${
                selectedVihara && selectedVihara.id === vihara.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-300"
              }`}
              onClick={() => setSelectedVihara(vihara)}
            >
              {vihara.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-white">
        {selectedVihara ? (
          <div className="space-y-4">
            {/* Address Section */}
            <div>
              <h3 className="text-xl font-bold mb-2">{selectedVihara.name}</h3>
              <p className="text-gray-700">{selectedVihara.address}</p>
            </div>

            {/* Website Thumbnail */}
            <div className="flex justify-center">
              <a
                href={selectedVihara.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://screenshotlayer.com/api/capture?access_key=your_api_key&url=${selectedVihara.website}`}
                  alt={`${selectedVihara.name} thumbnail`}
                  className="w-full max-w-md border rounded-lg shadow-lg"
                />
              </a>
            </div>

            {/* Note */}
            <p className="text-sm text-gray-500 text-center">
              Click the thumbnail to visit the website.
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            Select a Vihara to view details.
          </p>
        )}
      </div>
    </div>
  );
};

export default Viharas;
