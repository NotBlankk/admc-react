import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Contact from "./components/ContactUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/admc",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/admc/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/admc/service",
      element: (
        <>
          <Navbar />
          <Service />
        </>
      ),
    },
    {
      path: "/admc/gallery",
      element: (
        <>
          <Navbar />
          <Gallery />
        </>
      ),
    },
    {
      path: "/admc/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
