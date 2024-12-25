import React, { useState, useEffect } from "react";
import pdfs from "../../data/tripitakaPdf";

const Tripitaka = () => {
  // State for selected PDF and error tracking
  // selectedPdf initially will select the 1st one
  const [selectedPdf, setSelectedPdf] = useState(pdfs[0].url);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for mobile responsiveness
  useEffect(() => {
    // Scroll to the top of the page when this component is rendered
    window.scrollTo({ top: 0, behavior: "smooth" });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if width <= 768px
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle PDF selection
  const handlePdfSelect = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
  };

  return (
    <div className="flex flex-col md:flex-row pt-20 h-[100vh]">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-200 p-4 overflow-y-auto shadow-lg">
        <h2 className="text-lg font-bold mb-4">Tripitaka Index</h2>
        <ul className="space-y-2">
          {/* Displaying the title  */}
          {pdfs.map((pdf, index) => (
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
              {`${index + 1}. ${pdf.title}`}
            </li>
          ))}
        </ul>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 p-4 bg-white flex items-center justify-center">
        {isMobile ? (
          <div className="text-center">
            <p className="text-gray-500 mb-4">
              PDF viewing is not supported on mobile. Download below:
            </p>
            <a
              href={selectedPdf}
              download
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300"
            >
              Download PDF
            </a>
          </div>
        ) : (
          <iframe
            src={selectedPdf}
            title="PDF Viewer"
            className="w-[40vh] sm:w-full h-[50vh] sm:h-[75vh] md:h-full border"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Tripitaka;
