import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout"; // We'll create this
import HomePage from "./components/Pages/HomePage";
import PatientsPage from "./components/Pages/PatientsPage";
import StatisticsPage from "./components/Pages/StatisticsPage";
import UserLayout from "./components/layouts/UserLayout";
import UserProfile from "./components/Pages/UserProfile";
// import PatientsPage from "./components/Pages/PatientsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "home", element: <HomePage /> },
      { 
        path: "users", 
        element: <UserLayout />, 
        children: [
          { path: "", element: <PatientsPage /> }, // /users
          { path: ":id",element: <UserProfile/>}, // /users/123
        ]
      },
      { path: "stats", element: <StatisticsPage /> },
    ],
  },
]);

export default routes;