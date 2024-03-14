import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import ContactForm from "./pages/contactForm/index.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/contato",
    element: <ContactForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(  
  <RouterProvider router={router}>
    // No children here
    <App />
  </RouterProvider>
);
