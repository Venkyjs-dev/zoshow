// Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import PlatformWorkflow from "../pages/PlatformWorkflow";
import ScreensSection from "../pages/ScreenSection";
import MarketSection from "../pages/MarketSection";
import FeaturesSection from "../pages/FeaturesSection";
import SolutionsSection from "../pages/SolutionsSection";
import AddSection from "../pages/AddSection";
import BannerSection from "../pages/BannerSection";

export default function Layout() {
  return (
    <>
      {/* Navbar always at top */}
      <Navbar />
      {/* <main>
        <Outlet />
      </main> */}
      <BannerSection />
      <AddSection />
      {/* <SolutionsSection /> */}
      <FeaturesSection />
      <MarketSection />
      <ScreensSection />
      <PlatformWorkflow />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}
