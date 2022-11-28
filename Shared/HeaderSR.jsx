import React from "react";
import HeaderMiddle from "../../../frontend/shared/header/HeaderMiddle";
import Menus from "../../../frontend/shared/header/Menus";
import TopHeader from "../../../frontend/shared/header/TopHeader";

const HeaderJB = () => {
  return (
    <header>
      <TopHeader />
      <HeaderMiddle bench={"srinagar bench"} to={"/srinagar"} />
      <Menus menuId={19} homeLink="/srinagar/" />
    </header>
  );
};

export default HeaderJB;
