
import { useState, useEffect } from "react";
import type { TExtension, FilterType } from "../types/extensions";
import data from "../utils/data.json";

function Extensions() {
  const [extensions, setExtensions] = useState<TExtension[]>(data);
  const [filteredExtensions, setFilteredExtensions] =
    useState<TExtension[]>(data);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "inActive", label: "Inactive" },
  ];

  // Apply filtering whenever activeFilter or extensions change
  useEffect(() => {
    let filtered;
    switch (activeFilter) {
      case "active":
        filtered = extensions.filter((ext) => ext.isActive === true);
        break;
      case "inActive":
        filtered = extensions.filter((ext) => ext.isActive === false);
        break;
      case "all":
      default:
        filtered = extensions;
    }
    setFilteredExtensions(filtered);
  }, [activeFilter, extensions]);

  const toggleExtensionStatus = (id: number) => {
    setExtensions((prev) =>
      prev.map((e) => (e.id === id ? { ...e, isActive: !e.isActive } : e))
    );
  };

  return (
    <>
      <div className="my-6 flex justify-end gap-x-3">
        {filters.map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
              activeFilter === tab.key
                ? "bg-red-500 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
            onClick={() => setActiveFilter(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

     
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredExtensions.map((ext) => (
          <div
            key={ext.id}
            className="group rounded-2xl bg-[#1c2331]/90 p-4 border border-white/10 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.45)] transition
                     hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.55)]"
          >
            
            <div className="flex gap-4 mb-4">
            
              <div className="flex items-center justify-center">
                <img src={ext.logo} alt={ext.name} className="w-18 h-18" />
              </div>

             
              <div>
                <h2 className="font-semibold text-white">{ext.name}</h2>
                <p className="text-xs text-slate-300 leading-snug">
                  {ext.description}
                </p>
              </div>
            </div>

          
            <div className="flex items-center justify-between">
        
              <button
                className="rounded-full border border-white/25 cursor-pointer px-4 py-2 text-xs text-white/80
                         transition hover:bg-white/10 hover:text-white"
              >
                Remove
              </button>

              {/* toggle */}
              <button
                type="button"
                aria-label="Toggle active"
                onClick={() => toggleExtensionStatus(ext.id)}
                className={`relative cursor-pointer flex h-6 w-12 items-center rounded-full px-1 transition-colors
                ${ext.isActive ? "bg-green-500" : "bg-slate-600"}`}
              >
                <span
                  className={`h-4 w-4 rounded-full bg-white shadow transition-transform
                  ${ext.isActive ? "translate-x-6" : "translate-x-0"}`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Extensions;