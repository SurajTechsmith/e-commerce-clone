import { createBrowserRouter } from "react-router-dom";
import Homepage from './pages/Home'
import Login from "./pages/Login";
import Errorp from "./Error"
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/ProductPage";

const appRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      Component: Homepage,
    },
    { path: "/login", Component: Login },
    { path: "/checkout", Component: Checkout },
    {path:"/product/:productId", Component:ProductPage},
    { path: "*", Component: Errorp }
  ]);
};

export default appRouter;
