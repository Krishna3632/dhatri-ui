import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import { Home, Users, BarChart2 } from "lucide-react";

function AppLayout() {
  const navigate = useNavigate();

  const sidebarNavItems = [
    { id: "home", icon: <Home />, path: "/home" },
    { id: "users", icon: <Users />, path: "/users" },
    { id: "stats", icon: <BarChart2 />, path: "/stats" },
  ];

  return (
    <div className="flex">
      <SideBar
        sidebarNavItems={sidebarNavItems}
        setActiveTab={(tab) => navigate(tab.path)} // ✅ Navigate instead of state
      />

      <main className="flex-1 p-6">
        <Outlet /> {/* ✅ This renders the current route's element */}
      </main>
    </div>
  );
}

export default AppLayout;
