import { Home } from "./components/Home";
import HomeTest from "./components/HomeTest"
import Login from "./components/Login"

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: "/counter",
    element: <HomeTest />
  },
  {
    path: "/login",
    element: <Login />
  }
];

export default AppRoutes;
