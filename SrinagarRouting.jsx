import React from "react";
import { Routes, Route } from "react-router-dom";
import { CatBenches } from "../../Benches/Benches";
import Act from "../../frontend/containers/Act";
import CaseStatusParent from "../../frontend/containers/CaseManagementServices/CaseDetail/CaseStatusParent";
import CauseListParent from "../../frontend/containers/CaseManagementServices/CauseList/CauseListParent";
import DailyOrderParent from "../../frontend/containers/CaseManagementServices/DailyOrder/DailyOrderParent";
import OralAndFinalOrderParent from "../../frontend/containers/CaseManagementServices/OralAndFinalOrder/OralAndFinalOrderParent";
import Disclaimer from "../../frontend/containers/FooterPages/Disclaimer";
import Help from "../../frontend/containers/FooterPages/Help";
import HyperlinkPolicy from "../../frontend/containers/FooterPages/HyperlinkPolicy";
import PrivacyPolicy from "../../frontend/containers/FooterPages/PrivacyPolicy";
import TermCondition from "../../frontend/containers/FooterPages/TermCondition";
import CircularMoreDetails from "../../frontend/containers/Home/CircularMoreDetails";
import MediaGallery from "../../frontend/containers/Home/PhotoVideoEvent/MediaGallery";
import PhotoGallery from "../../frontend/containers/Home/PhotoVideoEvent/PhotoGallery";
import VideoGallery from "../../frontend/containers/Home/PhotoVideoEvent/VideoGallery";
import EventGallery from "../../frontend/containers/Home/PhotoVideoEvent/EventGallery";
import ReadMoreChairman from "../../frontend/containers/Home/ReadMoreChairman";
import Introduction from "../../frontend/containers/Introduction";
import HomeSR from "./Container/HomeSR";

// Footer Top Menu
import Calendar from "../../frontend/containers/Home/Calendar";
import Vacancies from "../../frontend/containers/Home/Vacancies";
import ImportantLinks from "../../frontend/containers/Home/ImportantLinks";
import Forms from "../../frontend/containers/Home/Forms";
import TourProgramme from "../../frontend/containers/Home/TourProgramme";
import EmployCorner from "../../frontend/containers/Home/EmployCorner";

const SrinagarRouting = () => {
  return (
    <Routes>
      <Route exact path="/" index element={<HomeSR />}></Route> 
      {/* main menu pages */}
      <Route
        exact
        path="/introduction"
        element={
          <Introduction
            pageId={64}
            navigateTo={CatBenches.srinagar.navigateTo}
          />
        }
      ></Route>
      <Route
        exact
        path="/act"
        element={
          <Act pageId={65} navigateTo={CatBenches.srinagar.navigateTo} />
        }
      ></Route>
      <Route
        exact
        path="/case-status"
        element={<CaseStatusParent benchDetails={CatBenches.srinagar} />}
      ></Route>
      <Route
        exact
        path="/cause-list"
        element={<CauseListParent benchDetails={CatBenches.srinagar} />}
      ></Route>
      <Route
        exact
        path="daily-order"
        element={<DailyOrderParent benchDetails={CatBenches.srinagar} />}
      ></Route>
      <Route
        exact
        path="oral-and-final-order"
        element={<OralAndFinalOrderParent benchDetails={CatBenches.srinagar} />}
      ></Route>

      {/* Home Links */}

      <Route
        exact
        path="view-all-circulars"
        element={
          <CircularMoreDetails
            circularId={19}
            navigateTo={CatBenches.srinagar.navigateTo}
          />
        }
      ></Route>
      <Route
        exact
        path="read-more-chairman"
        element={
          <ReadMoreChairman
            memberId={19}
            navigateTo={CatBenches.srinagar.navigateTo}
          />
        }
      ></Route>
      <Route
        exact
        path="photo-media-gallery"
        element={<MediaGallery navigateTo={CatBenches.srinagar.navigateTo} />}
      />
      <Route exact path="photo-gallery" element={<PhotoGallery navigateTo={CatBenches.srinagar.navigateTo} benchId={19} categoryId={2} />} />
     <Route
        exact
        path="video-gallery"
        element={<VideoGallery navigateTo={CatBenches.srinagar.navigateTo} benchId={19} categoryId={3} />}
      />
      <Route
        exact
        path="event-gallery"
        element={<EventGallery navigateTo={CatBenches.srinagar.navigateTo} benchId={19} categoryId={4} />}
      />
      <Route
        exact
        path="notices"
        element={
          <CircularMoreDetails
            circularId={19}
            navigateTo={CatBenches.srinagar.navigateTo}
          />
        }
      ></Route>

      {/* Footer Menu Pages Routes */}
      <Route
        exact
        path="terms-&-condition"
        element={<TermCondition pageId={56} navigateTo={"/srinagar"} />}
      ></Route>
      <Route
        exact
        path="privacy-policy"
        element={<PrivacyPolicy pageId={57} navigateTo={"/srinagar"} />}
      ></Route>
      <Route
        exact
        path="hyperlinking-policy"
        element={<HyperlinkPolicy pageId={58} navigateTo={"/srinagar"} />}
      ></Route>
      <Route
        exact
        path="disclaimer"
        element={<Disclaimer pageId={59} navigateTo={"/srinagar"} />}
      ></Route>
      <Route
        exact
        path="help"
        element={<Help pageId={60} navigateTo={"/srinagar"} />}
      ></Route>

      {/* Footer Top Menu */}
      <Route
        exact
        path="calendar"
        element={
          <Calendar benchId={1} navigateTo={CatBenches.srinagar.navigateTo} />
        }
      ></Route>
      <Route
        exact
        path="important-links"
        element={
          <ImportantLinks
          benchId={1}
          navigateTo={CatBenches.srinagar.navigateTo}
          />
        }
      ></Route>
      <Route
        exact
        path="forms"
        element={<Forms benchId={1} navigateTo={CatBenches.srinagar.navigateTo} />}
      ></Route>
        <Route
          exact
          path="vacancies"
          element={
            <Vacancies benchId={19} navigateTo={CatBenches.srinagar.navigateTo} />
          }
        ></Route>
      <Route
        exact
        path="tour-programme"
        element={
          <TourProgramme benchId={19} navigateTo={CatBenches.srinagar.navigateTo} />
        }
      ></Route>
      <Route
        exact
        path="employee-corner"
        element={
          <EmployCorner benchId={19} navigateTo={CatBenches.srinagar.navigateTo} />
        }
      ></Route>
    </Routes>
  );
};

export default SrinagarRouting;
