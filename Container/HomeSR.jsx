import React from "react";
import { CatBenches } from "../../../Benches/Benches";
import ChairPerson from "../../../frontend/containers/Home/ChairPerson";
import Chart from "../../../frontend/containers/Home/Chart";
import Circulars from "../../../frontend/containers/Home/Circulars";
import HomeBanner from "../../../frontend/containers/Home/HomeBanner";
import OtherLinks from "../../../frontend/containers/Home/OtherLinks";
import PhotoVideoEvent from "../../../frontend/containers/Home/PhotoVideoEvent/PhotoVideoEvent";
import WhatsNew from "../../../frontend/containers/Home/WhatsNew";
import CaseCauseDailyFinalOrderHome from "../../Ahmedabad/Containers/Home/CaseCauseDailyFinalOrderAH/CaseCauseDailyFinalOrderHome";

const HomeSR = () => {
  const otherLinkData = [
    {
      name: "Notices/Circulars",
      to: "notices",
      icon: "images/link-1.png",
    },
    {
      name: "Tour Programme",
      to: "tour-programme",
      icon: "images/link-2.png",
    },
    {
      name: "Employee Corner",
      to: "employee-corner",
      icon: "images/link-3.png",
    },
    {
      name: "Forms",
      to: "forms",
      icon: "images/link-4.png",
    },
    // {
    //   name: "Press Release",
    //   to: "press-release",
    //   icon: "images/link-5.png",
    // },
    {
      name: "Calendar",
       to: "calendar",
       icon: "images/link-5.png",
     },
    {
      name: "Vacancies",
      to: "vacancies",
      icon: "images/link-6.png",
    },
    {
      name: "Important Links",
      to: "important-links",
      icon: "images/link-7.png",
    },
    {
      name: "Notices/Circulars",
      to: "notices",
      icon: "images/link-1.png",
    },
    {
      name: "Tour Programme",
      to: "tour-programme",
      icon: "images/link-2.png",
    },
    {
      name: "Employee Corner",
      to: "employee-corner",
      icon: "images/link-3.png",
    },
    {
      name: "Forms",
      to: "forms",
      icon: "images/link-4.png",
    },
    // {
    //   name: "Press Release",
    //   to: "press-release",
    //   icon: "images/link-5.png",
    // },
    
    {
        name: "Calendar",
         to: "calendar",
         icon: "images/link-5.png",
       },
    {
      name: "Vacancies",
      to: "vacancies",
      icon: "images/link-6.png",
    },
    {
      name: "Important Links",
      to: "important-links",
      icon: "images/link-1.png",
    },
  ];
  return (
    <>
      <HomeBanner bannerId={19} />
      <WhatsNew benchId={19} />
      <div className="case_details_sec">
        <div className="container">
          <div className="row">
            <CaseCauseDailyFinalOrderHome
              schemaId={CatBenches.srinagar.id}
              bench={CatBenches.srinagar.name}
            />
            <ChairPerson memberId={19} />
          </div>
        </div>
      </div>
      <div className="circulars_photo_video_event_sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-7">
              <div className="row">
                <Circulars circularId={19} />
                <PhotoVideoEvent galleryId={19} />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 chart-sec-right">
            <Chart />
          </div>
        </div>
      </div>
      <OtherLinks otherLinkData={otherLinkData} />
    </>
  );
};

export default HomeSR;
