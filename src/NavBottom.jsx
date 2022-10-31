import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import {
  StyledNavLink,
  StyledHeader,
  StyledNav,
  StyledNavItems,
  StyledNavItem,
  NavIconProvider,
  NavItemTitle,
  StyledMoreOptions,
  StyledMoreTitle,
  StyledMoreContent,
  StyledLogIn,
  StyledToggleMore,
  StyledOnlineFriends,
  StyledLogoutButton,
  StyledOnlineFriendButtons,
} from "./Components/StyledNavComponents";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoAddSharp,
  IoChatboxOutline,
  IoSearchOutline,
  IoChevronUpSharp
} from "react-icons/io5";


export default function NavBottom() {
    const [loggedIn , setLoggedIn] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const [MoreOptionsHeight, setMoreOptionsHeight] = useState(0);
    const MoreRef = useRef(null);

    useLayoutEffect(() => {
      if (MoreRef?.current) {
        console.log(MoreRef.current.clientHeight);
        setMoreOptionsHeight(prev => MoreRef.current.clientHeight);
      }
    }, [loggedIn])

  return (
    <StyledHeader className={`${openNav ? 'open' : ''}`} translateY={MoreOptionsHeight}>
      <StyledNav>
        <StyledToggleMore className={`${openNav ? 'open' : ''}`} onClick={() => setOpenNav(prev => !prev)}>
          <IoChevronUpSharp />
        </StyledToggleMore>
        <StyledNavItems>
          <StyledNavItem>
            <StyledNavLink to="/social-network/" className={({ isActive}) => (isActive ? 'active' : '')} end>
              <NavIconProvider>
                <IoHomeOutline />
              </NavIconProvider>
              <NavItemTitle>Home</NavItemTitle>
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
          <StyledNavLink to="/social-network/profile" className={({ isActive}) => (isActive ? 'active' : '')}>
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
          <StyledNavLink to="/social-network/messages" className={({ isActive}) => (isActive ? 'active' : '')}>
            <NavIconProvider>
              <IoChatboxOutline />
            </NavIconProvider>
            <NavItemTitle>Messages</NavItemTitle>
          </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
          <StyledNavLink to="/social-network/search" className={({ isActive}) => (isActive ? 'active' : '')}>
            <NavIconProvider>
              <IoSearchOutline />
            </NavIconProvider>
            <NavItemTitle>Search</NavItemTitle>
          </StyledNavLink>
          </StyledNavItem>
        </StyledNavItems>
      </StyledNav>
      <StyledMoreOptions ref={MoreRef}>
        <StyledMoreTitle>
          {loggedIn ? 
          <>
          <span>
            Online Friends
          </span>
          <span className="sub-text">
            10
          </span></>
          : 
          <span>
            Login
          </span>
          }
        </StyledMoreTitle>
        <StyledMoreContent>
          {loggedIn ?
          <>
          <StyledOnlineFriends>
            <li>
              <img src="https://randomuser.me/api/portraits/women/76.jpg" />
              <span>
                Alexa Johnson
              </span>
              <StyledOnlineFriendButtons>
                <IoPersonOutline />
                <IoChatboxOutline />
              </StyledOnlineFriendButtons>
            </li>
            <li>
              <img src="https://randomuser.me/api/portraits/men/84.jpg" />
              <span>
                John Doe
              </span>
              <StyledOnlineFriendButtons>
                <IoPersonOutline />
                <IoChatboxOutline />
              </StyledOnlineFriendButtons>
            </li>
            <li>
              <img src="https://randomuser.me/api/portraits/men/87.jpg" />
              <span>
                George Smith
              </span>
              <StyledOnlineFriendButtons>
                <IoPersonOutline />
                <IoChatboxOutline />
              </StyledOnlineFriendButtons>
            </li>
            <li>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
              <span>
                Alex Doe
              </span>
              <StyledOnlineFriendButtons>
                <IoPersonOutline />
                <IoChatboxOutline />
              </StyledOnlineFriendButtons>
            </li>
          </StyledOnlineFriends>
          <StyledLogoutButton onClick={() => setLoggedIn(false)}>
            Logout
          </StyledLogoutButton>
          </>
          :
          <StyledLogIn>
            <input type="text" placeholder="Username or Email" />
            <input type="password" placeholder="Password" />
            <div>
              <a href="#">
                Forgot password?
              </a>
              <a href="#">
                Register
              </a>
            </div>
            <button type="submit" onClick={() => setLoggedIn(prev => !prev)}>Login</button>
          </StyledLogIn>          
          }
        </StyledMoreContent>
      </StyledMoreOptions>
    </StyledHeader>
  );
}
