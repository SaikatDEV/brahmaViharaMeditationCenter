import React, { useState } from "react";
import pdfs from "../../data/tripitakaPdf";

const Tripitaka = () => {
  // State for selected PDF
  const [selectedPdf, setSelectedPdf] = useState(pdfs[0].url);

  return (
    <div className="flex flex-col md:flex-row pt-20 h-[100vh]">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-200 p-4 overflow-y-auto shadow-lg">
        <h2 className="text-lg font-bold mb-4">Tripitaka Index</h2>
        <ul className="space-y-2">
          {pdfs.map((pdf) => (
            <li
              key={pdf.id}
              className={`p-2 cursor-pointer rounded ${
                selectedPdf === pdf.url
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-300"
              }`}
              onClick={() => setSelectedPdf(pdf.url)}
            >
              {pdf.title}
            </li>
          ))}
        </ul>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 p-4 bg-white overflow-hidden md:overflow-auto">
        {selectedPdf ? (
          <iframe
            src={selectedPdf}
            title="PDF Viewer"
            className="w-[40vh] sm:w-full h-[50vh] sm:h-[75vh] md:h-full border"
            style={{
              display: "block",
            }}
          ></iframe>
        ) : (
          <p className="text-center text-gray-500">Select a PDF to view</p>
        )}
      </div>
    </div>
  );
};

export default Tripitaka;
