import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rows, setRows] = useState(4); // default even number
  const [columns, setColumns] = useState(5); // default odd number

  const handleRowsChange = (e) => {
    let val = parseInt(e.target.value, 10);
    if (val % 2 !== 0) val += 1; // force even
    val = Math.min(Math.max(val, 2), 20);
    setRows(val);
  };

  const handleColumnsChange = (e) => {
    let val = parseInt(e.target.value, 10);
    val = Math.min(Math.max(val, 1), 21);
    setColumns(val);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Title */}
        <h1 className="text-2xl font-extrabold tracking-wide select-none">
          essmann&apos;s memory
        </h1>

        {/* Desktop Options */}
        <div className="hidden md:flex items-center space-x-10 font-medium text-lg select-none">
          <div className="flex flex-col items-center">
            <label htmlFor="rows-desktop" className="mb-1 text-sm opacity-80">
              Rows (even only)
            </label>
            <input
              id="rows-desktop"
              type="range"
              min="2"
              max="20"
              step="2"
              value={rows}
              onChange={handleRowsChange}
              className="w-32 cursor-pointer rounded-lg accent-pink-400"
            />
            <span className="mt-1 text-white">{rows}</span>
          </div>

          <div className="flex flex-col items-center">
            <label htmlFor="columns-desktop" className="mb-1 text-sm opacity-80">
              Columns (odd or even)
            </label>
            <input
              id="columns-desktop"
              type="range"
              min="1"
              max="21"
              step="1"
              value={columns}
              onChange={handleColumnsChange}
              className="w-32 cursor-pointer rounded-lg accent-pink-400"
            />
            <span className="mt-1 text-white">{columns}</span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center space-y-1.5 focus:outline-none focus:ring-2 focus:ring-white rounded"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg p-5 shadow-lg text-gray-800 max-w-sm mx-auto">
          <div className="mb-6">
            <label
              htmlFor="rows-mobile"
              className="block mb-2 font-semibold text-indigo-700"
            >
              Number of Rows (even only)
            </label>
            <input
              id="rows-mobile"
              type="range"
              min="2"
              max="20"
              step="2"
              value={rows}
              onChange={handleRowsChange}
              className="w-full cursor-pointer rounded-lg accent-indigo-600"
            />
            <div className="text-center mt-1 font-semibold text-indigo-900">
              {rows}
            </div>
          </div>

          <div>
            <label
              htmlFor="columns-mobile"
              className="block mb-2 font-semibold text-indigo-700"
            >
              Number of Columns (odd or even)
            </label>
            <input
              id="columns-mobile"
              type="range"
              min="1"
              max="21"
              step="1"
              value={columns}
              onChange={handleColumnsChange}
              className="w-full cursor-pointer rounded-lg accent-indigo-600"
            />
            <div className="text-center mt-1 font-semibold text-indigo-900">
              {columns}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
