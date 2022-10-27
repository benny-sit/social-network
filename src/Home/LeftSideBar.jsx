import React from "react";
import { LeftBar } from "../Components/LeftBarComponents";
import ProfileSection from "./ProfileSection";
import RecentSection from "./RecentSection";

export default function LeftSideBar() {
  return (
    <LeftBar>
      <ProfileSection />
      <RecentSection />
    </LeftBar>
  );
}
