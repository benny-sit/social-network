import React from "react";
import {
  StyledNavLink,
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
          <StyledNavItem>
            <StyledNavLink to="/" className={({ isActive}) => (isActive ? 'active' : '')} end>
              <NavIconProvider>
                <IoHomeOutline />
              </NavIconProvider>
              <NavItemTitle>Home</NavItemTitle>
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
          <StyledNavLink to="/profile" className={({ isActive}) => (isActive ? 'active' : '')}>
            <NavIconProvider>
              <IoPersonOutline />
            </NavIconProvider>
            <NavItemTitle>Profile</NavItemTitle>
          </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem className="highlight">
            <NavIconProvider>
              <IoAddSharp />
            </NavIconProvider>
            <NavItemTitle>New Post</NavItemTitle>
          </StyledNavItem>
          <StyledNavItem>
          <StyledNavLink to="/messages" className={({ isActive}) => (isActive ? 'active' : '')}>
            <NavIconProvider>
              <IoChatboxOutline />
            </NavIconProvider>
            <NavItemTitle>Messages</NavItemTitle>
          </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
          <StyledNavLink to="/search" className={({ isActive}) => (isActive ? 'active' : '')}>
            <NavIconProvider>
              <IoSearchOutline />
            </NavIconProvider>
            <NavItemTitle>Search</NavItemTitle>
          </StyledNavLink>
          </StyledNavItem>
        </StyledNavItems>
      </StyledNav>
    </StyledHeader>
  );
}
