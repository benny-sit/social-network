import React from "react";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";
import { ExploreFooter, ExploreHeader, ExploreStyled } from "../Components/RightBarComponents";

export default function ExploreSection() {
  return (
    <ExploreStyled>
      <ExploreHeader>Explore</ExploreHeader>
      <ul>
        <li>
          <img src="https://yt3.ggpht.com/ytc/AMLnZu-PjRc81p0qP-ZPWxv8aY4k-4gFRzGEYs3HWbIQ=s176-c-k-c0x00ffffff-no-rj-mo"/>
          <span>
          Web Dev Simplified very
          </span>
          <span>
            <IoChevronForward />
          </span>
        </li>
        <li>
          <img src="https://yt3.ggpht.com/ytc/AMLnZu_eX41jzTt6cENVn9timgdy-lAg3DJhvod9Ejz_TQ=s176-c-k-c0x00ffffff-no-rj-mo"/>
          <span>
          Tech With Tim
          </span>
          <span>
            <IoChevronForward />
          </span>
        </li>
        <li>
          <img src="https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s176-c-k-c0x00ffffff-no-rj-mo"/>
          <span>
          Traversy Media
          </span>
          <span>
            <IoChevronForward />
          </span>
        </li>
      </ul>
      <ExploreFooter>
        <span>More</span>
        <IoChevronDown />
      </ExploreFooter>
    </ExploreStyled>
  );
}
