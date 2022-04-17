import React from "react";
import { Routes, Route } from "react-router-dom";
import { Admin } from "../components/Admin/Admin";
import { Home } from "../components/Home/Home";
import { Schedule } from "../components/Schedule/Schedule";

export const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/admin"} element={<Admin />} />
      <Route path={"/Schedule"} element={<Schedule />} />
    </Routes>
  );
};
