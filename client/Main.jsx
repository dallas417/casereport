window.addEventListener("error", (event) => {
  alert("ERROR: " + event.message + "\nAT: " + event.filename + ":" + event.lineno);
});

window.addEventListener("unhandledrejection", (event) => {
  alert("PROMISE ERROR: " + event.reason);
});


import { StrictMode } from "react"; 
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import AnimatedOutlet from "./routing/AnimatedOutlet.jsx";
import Nav from "./components/Nav/Nav.jsx";
import ErrorPage from "./pages/Error/ErrorPage.jsx";

import "./style.css"; 

function Layout() {
    return (
        <>
            <AnimatedOutlet> </AnimatedOutlet>
            <Nav> </Nav>
        </>
    );
};

const root = document.getElementById("root"); 
const router = createHashRouter([
    {
        path: "/*",
        element: <Layout />,
        errorElement: <ErrorPage />
    }
]);

window.addEventListener("error", (event) => {
  alert("ERROR: " + event.message + "\nAT: " + event.filename + ":" + event.lineno);
});

window.addEventListener("unhandledrejection", (event) => {
  alert("PROMISE ERROR: " + event.reason);
});

createRoot(root).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
