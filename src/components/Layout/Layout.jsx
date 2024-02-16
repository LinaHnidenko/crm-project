import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const isLarge = innerWidth >= 1200;

  return (
    <>
      {isLarge ? (
        <Sidebar isLarge={isLarge} />
      ) : (
        isOpenBurger && <Sidebar setIsOpenBurger={setIsOpenBurger} />
      )}
      <Header
        setIsOpenBurger={setIsOpenBurger}
        isOpenBurger={isOpenBurger}
        isLarge={isLarge}
      />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
