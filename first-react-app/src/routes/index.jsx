import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NotFound from "../Pages/Error";
import Users from "../Pages/Users";
import Detail from "../Pages/Detail";

export const links = [
  { id: 0, to: "/", title: "Home" },
  { id: 1, to: "/contact", title: "Contact" },
  { id: 2, to: "/about", title: "About" },
  { id: 3, to: "/users", title: "Users" },
];

const WebRoutes = () => {
  const routes = [
    { id: 0, component: <Home />, path: "/" },
    { id: 2, component: <NotFound />, path: "/*" },
    { id: 1, component: <About />, path: "/about" },
    { id: 2, component: <Contact />, path: "/contact" },
    { id: 3, component: <Users />, path: "/users" },
    { id: 3, component: <Detail />, path: "/users/:id" },
  ];
  return (
    <Routes>
      {routes.map(({ id, component, path }) => {
        return <Route key={id} path={path} element={component} />;
      })}
    </Routes>
  );
};

export default WebRoutes;
