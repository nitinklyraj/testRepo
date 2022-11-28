import React from "react";
import SrinagarRouting from "./SrinagarRouting";
import FooterSR from "./Shared/FooterSR";
import HeaderSR from "./Shared/HeaderSR";

const SrinagarLayout = () => {
  return (
    <>
      <HeaderSR />
      <SrinagarRouting />
      <FooterSR />
    </>
  );
};

export default SrinagarLayout;
