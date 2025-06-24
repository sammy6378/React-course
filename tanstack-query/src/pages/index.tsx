import { useState } from "react";
import Albums from "./Albums";
import AlbumTable from "./AlbumTable";


function HomePage() {
  const [currentView, setCurrentView] = useState<'grid' | 'table'>('grid');

  return (
    <>
      <div className="flex justify-center bg-white p-4 mb-4 rounded-md shadow-lg">
        <button
          onClick={() => setCurrentView("grid")}
          disabled={currentView === "grid"}
          className={`px-4 py-2 rounded cursor-pointer
        ${
          currentView === "grid"
            ? "bg-[#0288D1] text-white hover:bg-[#0288D1] "
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        >
          Grid View
        </button>
        <button
          onClick={() => setCurrentView("table")}
          disabled={currentView === "table"}
          className={`px-4 py-2 cursor-pointer rounded
        ${
          currentView === "table"
            ? "bg-[#0288D1] text-white hover:bg-[#0288D1]"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        >
          Table View
        </button>
      </div>

      <div className="container mx-auto p-4">
        {currentView === "grid" ? <Albums /> : <AlbumTable />}
      </div>
    </>
  );
}

export default HomePage;
