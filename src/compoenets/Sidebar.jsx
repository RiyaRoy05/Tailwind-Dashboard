import React from "react";

function Sidebar() {
  return (
    <div>
      <aside class="bg-[#FAF3E0] h-[89.9vh] p-4 w-64">
        <nav class="space-y-4">
          <a
            href="#"
            class="flex items-center space-x-2 text-[#2C3E50] hover:bg-[#FF7F50] hover:text-white px-3 my-8 py-2 rounded-lg"
          >
            <span class="text-[#BDC3C7]">🏠</span>
            <span>Dashboard</span>
          </a>

          <a
            href="#"
            class="flex items-center space-x-2 text-white bg-[#FF7F50] px-3 py-2 rounded-lg"
          >
            <span class="text-white">📋</span>
            <span>All Tasks</span>
          </a>

          <a
            href="#"
            class="flex items-center space-x-2 text-[#2C3E50] hover:bg-[#FF7F50] hover:text-white px-3 py-2 rounded-lg"
          >
            <span class="text-[#BDC3C7]">📂</span>
            <span>Categories</span>
          </a>

          <a
            href="#"
            class="flex items-center space-x-2 text-[#2C3E50] hover:bg-[#FF7F50] hover:text-white px-3 py-2 rounded-lg"
          >
            <span class="text-[#BDC3C7]">✅</span>
            <span>Completed Tasks</span>
          </a>

          <a
            href="#"
            class="flex items-center space-x-2 text-[#2C3E50] hover:bg-[#FF7F50] hover:text-white px-3 py-2 rounded-lg"
          >
            <span class="text-[#BDC3C7]">🔧</span>
            <span>Settings</span>
          </a>

          <a
            href="#"
            class="flex items-center space-x-2 text-[#2C3E50] hover:bg-[#FF7F50] hover:text-white px-3 py-2 rounded-lg"
          >
            <span class="text-[#BDC3C7]">❓</span>
            <span>Help & Support</span>
          </a>
        </nav>

        <div class="mt-8">
          <a
            href="#"
            class="flex items-center space-x-2 text-[#FF7F50] hover:text-[#ff956d] px-3 py-2 my-48 rounded-lg"
          >
            <span class="text-[#FF7F50]">🚪</span>
            <span>Logout</span>
          </a>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
