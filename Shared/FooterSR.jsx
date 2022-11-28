import React from "react";
import FooterBottom from "../../../frontend/shared/footer/FooterBottom";
import FooterNav from "../../../frontend/shared/footer/FooterNav";
import FooterSlider from "../../../frontend/shared/footer/FooterSlider";

const FooterSR = () => {
  return (
    <>
      <FooterSlider />
      <footer>
        <FooterNav menuId={1} />
        <FooterBottom />
      </footer>
    </>
  );
};

export default FooterSR;
