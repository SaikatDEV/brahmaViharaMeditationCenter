import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import Paper from "@mui/material/Paper";
import viharasBd from "../../data/viharaListBd";
import viharasUsa from "../../data/viharaListUsa";

const Viharas = () => {
  // State for selected country
  const [selectedCountry, setSelectedCountry] = useState("USA");
  // State for filtered viharas and selected vihara
  const [filteredViharas, setFilteredViharas] = useState(viharasUsa);
  const [selectedVihara, setSelectedVihara] = useState(viharasUsa[0]);
  const [sliderOpen, setSliderOpen] = useState(false);

  // Handle country toggle
  const handleToggle = (country) => {
    setSelectedCountry(country);

    const newFilteredViharas = country === "USA" ? viharasUsa : viharasBd;

    // Sort by name before setting the filtered Viharas
    const sortedViharas = [...newFilteredViharas].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setFilteredViharas(sortedViharas);
    // Automatically select the first vihara
    handleClickEachVihara(sortedViharas[0]);
  };

  const handleClickEachVihara = (vihara) => {
    // Automatically select the first vihara
    setSelectedVihara(vihara);
    setSliderOpen(!sliderOpen);
  };

  const handleCloseSlider = () => {
    setSliderOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen pt-20">
      {/* Left Sidebar */}
      <div className="w-full sm:w-1/4 bg-gray-200 p-4 overflow-y-auto shadow-lg">
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
          {filteredViharas.map((vihara, index) => (
            <li
              key={vihara.id}
              className={`p-2 cursor-pointer rounded ${
                selectedVihara && selectedVihara.id === vihara.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-300"
              }`}
              onClick={() => handleClickEachVihara(vihara)}
            >
              {`${index + 1}. ${vihara.name}`}
            </li>
          ))}
        </ul>
      </div>

      {/* Slide-Out Panel for Vihara Details */}
      <Slide
        direction="up"
        in={sliderOpen}
        mountOnEnter
        unmountOnExit
        className="absolute top-40 sm:w-1/4 sm:h-auto"
      >
        <Paper
          elevation={6}
          className="w-[300px] sm:w-[400px] h-[80vh] p-6 text-center rounded-lg bg-white shadow-2xl"
        >
          {/* Address Section */}
          <div className="p-4 mt-6 flex flex-col flex-1 justify-between ">
            <div>
              <a
                href={selectedVihara.website}
                rel="noopener noreferrer"
                target="_blank"
                className="text-xl font-bold mb-2 cursor-pointer hover:text-blue-500"
              >
                {selectedVihara.name}
              </a>
              <p className="text-gray-700">{selectedVihara.address}</p>
            </div>

            {console.log(selectedVihara.mapSrc)}
            <div className="pt-10">
              <iframe
                src={selectedVihara.mapSrc}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <button
                onClick={handleCloseSlider}
                className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </Paper>
      </Slide>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-white">
        {selectedVihara ? (
          <div className="space-y-4">
            {/* Enlarged Website Section */}
            <div className="flex justify-center">
              <a
                href={selectedVihara.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border rounded-lg overflow-hidden"
              >
                <iframe
                  src={selectedVihara.website}
                  title={`${selectedVihara.name} Website`}
                  className="w-full h-[80vh] border"
                ></iframe>
              </a>
            </div>

            {/* Note */}
            <p className="text-sm text-gray-500 text-center">
              Click the website preview to open in a new tab.
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
