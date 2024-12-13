import React, { useState } from "react";

const Tripitaka = () => {
  // Mock data for PDFs
  const pdfs = [
    {
      id: 1,
      title: "দীর্ঘ নিকায় ১",
      url: "/public/pdf/০১. দীর্ঘ-নিকায় ১.pdf",
    },
    {
      id: 2,
      title: "দীর্ঘ নিকায় ২",
      url: "/public/pdf/০২. দীর্ঘ-নিকায় ২.pdf",
    },
    {
      id: 3,
      title: "দীর্ঘ নিকায় ৩",
      url: "/public/pdf/০৩. দীর্ঘ-নিকায় ৩.pdf",
    },
    {
      id: 4,
      title: "মধ্যম নিকায় ১",
      url: "/public/pdf/০৪. মধ্যম-নিকায় ১.pdf",
    },
    {
      id: 5,
      title: "মধ্যম-নিকায় ২",
      url: "/public/pdf/০৫. মধ্যম-নিকায় ২.pdf",
    },
  ];

  // State for selected PDF
  const [selectedPdf, setSelectedPdf] = useState(pdfs[0].url);

  return (
    <div className="flex pt-20 h-[100vh]">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto shadow-lg">
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
      <div className="flex-1 p-4 bg-white">
        {selectedPdf ? (
          <iframe
            src={selectedPdf}
            title="PDF Viewer"
            className="w-full h-full border"
          ></iframe>
        ) : (
          <p className="text-center text-gray-500">Select a PDF to view</p>
        )}
      </div>
    </div>
  );
};

export default Tripitaka;
