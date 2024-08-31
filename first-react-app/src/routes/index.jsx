import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";

const WebRoutes = () => {
  const routes = [
    { id: 0, path: "/", component: <Home /> },
    { id: 0, path: "/menu", component: <Menu /> },
  ];
  return (
    <Routes>
      {routes.map(({ id, path, component }) => {
        return <Route path={path} element={component} key={id} />;
      })}
    </Routes>
  );
};

export default WebRoutes;
