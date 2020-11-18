import React from "react";
import Dashboard from "./views/home/Dashboard";
import Board from "./views/home/Board";
import User from "./views/user/User";
import Register from "./views/register/Register";
import Login from "./views/login/Login";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Dashboard />,
  },
  {
    path: "/board/:id",
    exact: true,
    component: () => <Board />,
  },
  {
    path: "/user",
    exact: true,
    component: () => <User />,
  },
  {
    path: "/register",
    exact: false,
    component: () => <Register />,
  },
  {
    path: "/login",
    exact: true,
    component: () => <Login />,
  },
];

export default routes;
