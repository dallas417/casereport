import { lazy } from "react"; 

const App = lazy(() => import('../pages/Dash/Dash.jsx'));
const Init = lazy(() => import('../pages/Init/Init.jsx'));
const SignIn = lazy(() => import('../pages/Signin/Signin.jsx'));
const AnnaGarcia = lazy(() => import('../pages/93-2003-XC/93-2003-XC.jsx'));

export const routes = [
  { path: '/', element: <App />, title: "Cases" },
  { path: "/init", element: <Init />, title: "Initalizing"},
  { path: "/signin", element: <SignIn />, title: "Sign In"},
  { path: "/93-2003-XC", element: <AnnaGarcia />, title: "Anna Garcia Case"},
];
