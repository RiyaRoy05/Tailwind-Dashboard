import React from "react";

function Header() {
  return (
    <header class="bg-[#FAF3E0] text-[#2C3E50] p-4 flex items-center justify-between">
      <div class="text-lg font-bold">To-Do Dashboard</div>

      <input
        type="text"
        placeholder="Search tasks..."
        class="px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring focus:ring-[#7FB3D5]"
      />

      <div class="flex items-center space-x-4">
        <button class="bg-[#FF7F50] text-white px-4 py-2 rounded-lg hover:bg-[#ff956d]">
          + Add Task
        </button>

        <span class="text-[#7FB3D5]">🔔</span>

        <span class="text-[#BDC3C7]">👤</span>
      </div>
    </header>
  );
}

export default Header;
