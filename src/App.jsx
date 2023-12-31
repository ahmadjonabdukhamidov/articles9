// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import MainLayout from "./layout/MainLayout";

// Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Article from "./pages/article";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "article/:id",
          element: <Article />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
