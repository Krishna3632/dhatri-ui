import React from "react";
import { Heart, Settings, LogOut } from "lucide-react";
import { Navigate, NavLink } from "react-router-dom";

export default function SideBar({ sidebarNavItems, activeTab, setActiveTab, setCurrentPage }) {
  return (
    <aside className="w-20 fixed h-screen bg-white/80 backdrop-blur-lg p-4 flex flex-col items-center space-y-8 shadow-sm border-r border-gray-200/80">
      {/* Top Icon */}
      <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
        <Heart className="w-6 h-6 text-white" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col items-center space-y-6">
        {sidebarNavItems.map((item) => (
          <NavLink to={item.path} key={item.id}>
          <button
            key={item.id}
            
            className={`p-3 rounded-lg transition-colors ${
              activeTab === item.id
                ? "bg-blue-100 text-blue-600"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {item.icon}
          </button>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto flex flex-col items-center space-y-6">
        <button className="p-3 text-gray-500 hover:bg-gray-100 rounded-lg">
          <Settings />
        </button>
        <button
          onClick={() => setCurrentPage("login")}
          className="p-3 text-gray-500 hover:bg-gray-100 rounded-lg"
        >
          <LogOut />
        </button>
      </div>
    </aside>
  );
}
