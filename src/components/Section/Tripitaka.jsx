import React, { useState } from "react";
import pdfs from "../../data/tripitakaPdf";

const Tripitaka = () => {
  // State for selected PDF and error tracking
  // selectedPdf initially will select the 1st one
  const [selectedPdf, setSelectedPdf] = useState(pdfs[0].url);
  const [hasError, setHasError] = useState(false); //initially no error

  // Handle PDF selection
  const handlePdfSelect = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
    setHasError(false); // Reset error state when a new PDF is selected
  };

  return (
    <div className="flex flex-col md:flex-row pt-20 h-[100vh]">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-200 p-4 overflow-y-auto shadow-lg">
        <h2 className="text-lg font-bold mb-4">Tripitaka Index</h2>
        <ul className="space-y-2">
          {/* Displaying the title  */}
          {pdfs.map((pdf) => (
            <li
              key={pdf.id}
              className={`p-2 cursor-pointer rounded ${
                selectedPdf === pdf.url
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-300"
              }`}
              // We are passing clicked pdf url, So we can update the state
              // and display the selected pdf
              onClick={() => handlePdfSelect(pdf.url)}
            >
              {pdf.title}
            </li>
          ))}
        </ul>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 p-2 sm:p-4 bg-white overflow-hidden md:overflow-auto flex items-center justify-center">
        {!hasError ? (
          <iframe
            src={selectedPdf}
            title="PDF Viewer"
            className="w-[40vh] sm:w-full h-[50vh] sm:h-[75vh] md:h-full border"
            onError={() => setHasError(true)} // Trigger fallback if error occurs
            style={{
              display: hasError ? "none" : "block",
            }}
          ></iframe>
        ) : (
          <div className="text-center">
            <p className="text-gray-500 mb-4">
              PDF could not be displayed. Please download from below:{" "}
            </p>
            <a
              href={selectedPdf}
              download
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300"
            >
              Download PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tripitaka;
