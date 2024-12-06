import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import PostAuthLayout from "@/layout/PostAuthLayout";
import AddUser from "@/page/addUser/AddUser";
import Home from "@/page/home/Home";
import Login from "@/page/login/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
