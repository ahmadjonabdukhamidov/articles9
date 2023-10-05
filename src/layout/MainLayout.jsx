import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { useContext, useState } from "react";
import {ThemeContext} from "../context/ThemeContext"

function MainLayout() {
    return (
    <>
      <Navbar />
      <main className="align-element py-9">
       <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
