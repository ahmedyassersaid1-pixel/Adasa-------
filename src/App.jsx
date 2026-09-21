import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Component/Layout/Layout";
import Blog from "./Component/Blog/Blog";
import About from "./Component/About/About";
import Notfound from "./Component/Notfound/Notfound";
import Home from "./Component/Home/Home";
import BlogDetails from "./Component/BlogDetails/BlogDetails";
import Terms from "./Component/Terms/Terms";
import Privacy from "./Component/Privacy/Privacy";
const routes = createBrowserRouter(
  [
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "blog", element: <Blog /> },
        { path: "about", element: <About /> },
        { path: "terms", element: <Terms /> },
        { path: "privacy", element: <Privacy /> },
        { path: "blog/:slug", element: <BlogDetails /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
