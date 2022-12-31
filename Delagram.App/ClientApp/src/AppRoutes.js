import { Home } from "./components/Home";
import HomeTest from "./components/HomeTest"
import Login from "./components/Login"

const AppRoutes = [
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/counter",
    element: <HomeTest />
  },
  {
    index: true,
    element: <Login />
  }
];

export default AppRoutes;
