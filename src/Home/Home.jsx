import React from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import UserFeed from "./UserFeed";

export default function Home() {
  return (
    <>
      <LeftSideBar />
      <UserFeed />
      <RightSideBar />
    </>
  );
}
