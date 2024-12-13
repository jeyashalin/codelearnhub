import React, { useEffect } from "react";

export default function DashPdfViewer({ selectedPdf }: { selectedPdf: string | null }) {
  useEffect(() => {
    const fetchPdfData = async () => {
      if (!selectedPdf) return;

      console.log("Selected PDF:", selectedPdf);

      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ selectedPdf }),
        });

        if (!res.ok) {
          console.log("here");
          
          throw new Error(`Error: ${res.status}`);
        }
      } catch (error) {
        console.error("Failed to send request:", error);
      }
    };

    fetchPdfData();
  }, [selectedPdf]);
  return (
    <div className="h-full">
      {selectedPdf ? (
        <iframe
          src={`/data/${selectedPdf}`}
          className="w-full h-full"
          title={selectedPdf}
          frameBorder="0"
          aria-label={`${selectedPdf}`}
        ></iframe>
      ) : (
        <p>No PDF selected</p>
      )}
    </div>
  );
}
