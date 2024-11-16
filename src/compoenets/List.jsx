import React from "react";

function List() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg my-20">
      <h1 className="text-center text-3xl font-semibold text-gray-700 mb-8">
        To-Do List
      </h1>
      <ul className="space-y-4">
        <li className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200">
          <span className="flex items-center text-gray-700">
            <button className="mr-3 text-green-500 hover:text-green-700">
              ✅
            </button>
            Go for a 30-minute run
          </span>
          <button className="text-red-500 hover:text-red-700">🗑️</button>
        </li>

        <li className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200">
          <span className="flex items-center text-gray-700">
            <button className="mr-3 text-green-500 hover:text-green-700">
              ✅
            </button>
            Meal prep for the week
          </span>
          <button className="text-red-500 hover:text-red-700">🗑️</button>
        </li>

        <li className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200">
          <span className="flex items-center text-gray-700">
            <button className="mr-3 text-green-500 hover:text-green-700">
              ✅
            </button>
            Book dentist appointment
          </span>
          <button className="text-red-500 hover:text-red-700">🗑️</button>
        </li>
      </ul>
    </div>
  );
}

export default List;
