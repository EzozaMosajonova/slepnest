import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePages from "../pages/Home";
import Favorites from "../components/Favorite";
import Single from "../components/single";
import News from "../components/Home/News";
import SingleNews from "../components/Home/singlenews";
import Collection from "../components/collection";
import About from "../components/About";
import Contact from "../components/Contact";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePages />,
      },
      {
        path:"/collection",
        element:<Collection/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/item/:id",         
        element: <Single />,
      },
      {
        path: "/news",             
        element: <News />,
      },
      {
        path: "/news/:id",         
        element: <SingleNews />,
      },
    ],
  },
]);
