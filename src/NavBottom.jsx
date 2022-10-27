import React from "react";
import {
  StyledHeader,
  StyledNav,
  StyledNavItems,
  StyledNavItem,
  NavIconProvider,
  NavItemTitle,
} from "./Components/StyledNavComponents";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoAddSharp,
  IoChatboxOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { useState } from "react";

export default function NavBottom() {
    const [homeActive, setHomeActive] = useState(false);
  return (
    <StyledHeader>
      <StyledNav>
        <StyledNavItems>
          <StyledNavItem className={`${homeActive ? 'active' : ''}`} onClick={() => setHomeActive(prev => !prev)}>
            <NavIconProvider>
              <IoHomeOutline />
            </NavIconProvider>
            <NavItemTitle>Home</NavItemTitle>
          </StyledNavItem>
          <StyledNavItem>
            <NavIconProvider>
              <IoPersonOutline />
            </NavIconProvider>
            <NavItemTitle>Profile</NavItemTitle>
          </StyledNavItem>
          <StyledNavItem className="highlight">
            <NavIconProvider>
              <IoAddSharp />
            </NavIconProvider>
            <NavItemTitle>New Post</NavItemTitle>
          </StyledNavItem>
          <StyledNavItem>
            <NavIconProvider>
              <IoChatboxOutline />
            </NavIconProvider>
            <NavItemTitle>Messages</NavItemTitle>
          </StyledNavItem>
          <StyledNavItem>
            <NavIconProvider>
              <IoSearchOutline />
            </NavIconProvider>
            <NavItemTitle>Search</NavItemTitle>
          </StyledNavItem>
        </StyledNavItems>
      </StyledNav>
    </StyledHeader>
  );
}
