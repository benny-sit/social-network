import React from 'react'
import { ProfileBtn, ProfileData, ProfilePicture, ProfileStats } from '../Components/LeftBarComponents'
import {IoArrowForwardSharp, IoPersonOutline} from 'react-icons/io5';

export default function ProfileSection() {
  return (
    <ProfileStats>
      <ProfilePicture>
        <img src="/npc2.jpg"/>
        <div className="profileName">
          John Doe
        </div>
      </ProfilePicture>
      <ProfileData >
        <li>
          <span>
            Online Friends  
          </span>
          <span>
            91
          </span>
        </li>
        <li>
          <span>
            Likes On Latest Post 
          </span>
          <span>
            230
          </span>
        </li>
        <li>
          <span>
            Views today
          </span>
          <span>
            58
          </span>
        </li>
      </ProfileData>
      <ProfileBtn>
        <IoPersonOutline />
        <span>Profile</span>
        <span>
        <IoArrowForwardSharp />
        </span>
      </ProfileBtn>
    </ProfileStats>
  )
}
