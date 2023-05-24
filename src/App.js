import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./app.scss"
import { Login } from "./pages/Login/Login";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";

const LayOut = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products/:id",
        element: <Products/>,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "*",
        element: <PageNotFound/>
      }
    ]
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
