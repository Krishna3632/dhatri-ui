import { useState } from "react";
import SideBar from "./components/SideBar";
import { Home, Users, BarChart2 } from "lucide-react"; // Import some icons
import "./App.css";
import HomePage from "./components/Pages/HomePage";
// import RouteLinks from "./Routes";
import PatientsPage from "./components/Pages/PatientsPage";
import StatisticsPage from "./components/Pages/StatisticsPage";

function App() {
  // State for active tab and page navigation
  const [activeTab, setActiveTab] = useState("home");
  const [currentPage, setCurrentPage] = useState("dashboard");

  // Sidebar navigation items
  const sidebarNavItems = [
    { id: "home", icon: <Home /> },
    { id: "users", icon: <Users /> },
    { id: "stats", icon: <BarChart2 /> },
  ];

  return (
    <div className="flex" >
      <SideBar
        sidebarNavItems={sidebarNavItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setCurrentPage={setCurrentPage}
      />

      <main className="flex-1 p-6">
        {/* Render based on active tab */}
        {activeTab === "home" && <HomePage />}
        {activeTab === "users" && <PatientsPage />}
        {activeTab === "stats" && <StatisticsPage/>}

        {/* Example of page state usage */}
        {/* {currentPage === "login" && <h1>🔑 Login Page</h1>} */}
      </main>
    </div>
  );
}

export default App;
