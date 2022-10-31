import React from "react";
import {
  StyledImgWrapper,
  StyledProfileAbout,
  StyledProfileButtons,
  StyledProfileDetails,
  StyledProfileStats,
  StyledProfileWrapper,
} from "../Components/ProfileComponents";
import {
  IoPersonAdd,
  IoAlarm,
  IoBarChart,
  IoLocation,
} from 'react-icons/io5'
import ProfilePosts from "./ProfilePosts";

export default function Profile() {
  return (
    <StyledProfileWrapper>
      <StyledProfileDetails>
        <StyledProfileAbout>
          <StyledImgWrapper>
            <img src="https://randomuser.me/api/portraits/men/22.jpg" />
          </StyledImgWrapper>
          <StyledProfileStats>
            <span className="title">John Doe</span>
            <span className="sub-title">Professional Photographer</span>
            <span className="body">
              <span><IoPersonAdd /> Member Since 2019/7</span>
              <span><IoAlarm/>Last seen today</span>
              <span><IoBarChart />18 posts last month</span>
              <span><IoLocation />Tel Aviv, Israel</span>
            </span>
          </StyledProfileStats>
        </StyledProfileAbout>
        <StyledProfileButtons>
          <button className="selected">
            Posts
          </button>
          <button>
            followers
          </button>
          <button>
            following
          </button>
        </StyledProfileButtons>
      </StyledProfileDetails>
      <ProfilePosts/>
    </StyledProfileWrapper>
  );
}
