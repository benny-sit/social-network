import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';

const MyIconProvider = ({className, children}) => <IconContext.Provider value={{className}}>{children}</IconContext.Provider>;

export const NavIconProvider = styled(MyIconProvider)`
  height: 1.5rem;
  width: 1.5rem;
  padding: 1rem 1rem;
  transition: all 0.5s linear;
`;

export const NavItemTitle = styled.span`
    position: absolute;
    bottom: 0;
    transform: translateY(100%) translateX(-50%);
    font-size: 1.1rem;
    transition: all 0.5s linear;
    opacity: 0;
    left: 50%;

    @media (max-width: 768px) {
        font-size: small;
    }
`

export const StyledNavLink = styled(NavLink)`
    color: inherit;
    display: flex;
    position: relative;
`


export const StyledNavItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.75rem;
    position: relative;
    transition: transform 0.5s linear;

    &:not(.highlight):hover {
        ${NavIconProvider} {
            transform: scale(0.9) translateY(-20%);
        }
        ${NavItemTitle} {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
        }
    }

    &.highlight {
        ${NavItemTitle} {
            opacity: 1;
            position: relative;
            max-width: 0;
            transform: translateY(0);
            overflow: hidden;
            text-overflow: unset;
            white-space: nowrap;
            left: 0;
        }
        margin: 0 0.5rem;
        background-color: var(--main-color);
        flex-direction: row;
        border-radius: 9999px;
        transform: scale(1.1) translateY(-10%);
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
        z-index: 3;
    }

    &.highlight:hover {
        ${NavItemTitle} {
            max-width: 100px;
        }
        ${NavIconProvider} {
            padding-right: 0;
            padding-left: 0;
        }
        box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.15);
    }

    .active{
        ${NavIconProvider} {
            background-color: var(--main-color);
            border-radius: 9999px;
        }
    }

    @media (max-width: 768px) {
        &:not(.highlight) {
            padding: 0;
        }

        &.highlight {
            padding: 0 0.5rem;
        }
        font-size: small;
    }
`

export const StyledNavItems = styled.ul`
    list-style: none;
    display: flex;
    padding: 0 1rem;
    position: relative;
    margin: 0.25rem 0;
    transition: all 0.5s ease-out;

    

    
`

export const StyledToggleMore = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 300ms ease-out;
    z-index: 2;

    &.open {
        transform: translateX(-50%) rotateZ(180deg);
    }
`

export const StyledNav = styled.nav`
    position: relative;
`

export const StyledMoreTitle = styled.div`
    padding: .5rem 2rem;
    font-size: x-large;
    font-weight: 500;

    span.sub-text {
        padding: 0 .25rem;
        font-size: medium;
        color: var(--quick-silver);
    }
`

export const StyledLogIn = styled.form`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 0 3rem;
    margin-bottom: 1rem;

    input {
        padding: .25rem .5rem;
        outline: none;
        border: 1px solid var(--quick-silver);
        border-radius: .5rem;
    }

    button:last-child {
        border: none;
        background-color: var(--blizzard-blue);
        border-radius: .5rem;
        padding: .25rem;
        font-size: medium;
    }

    div {
        font-size: small;
        display: flex;
        justify-content: space-between;
    }

`

export const StyledOnlineFriendButtons = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    gap: 0.5rem;

`

export const StyledOnlineFriends = styled.ul`
    margin: 0;
    list-style: none;
    margin-bottom: 0.5rem;
    padding: 0;
    max-height:10rem;
    overflow-y: auto;

    li img {
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 9999px;
    }

    li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0rem 2rem;
        padding-bottom: .25rem;
    }

    &::-webkit-scrollbar {
        width: 10px;
        height: 20px;
    }

    &::-webkit-scrollbar-track {
        border-radius: 100vh;
        background-color: var(--light-gray);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--quick-silver);
        border-radius: 100vh;
        border: 3px solid var(--light-gray);
    }
`

export const StyledLogoutButton = styled.button`
    border: none;
    background-color: var(--blizzard-blue);
    border-radius: .5rem;
    padding: .25rem;
    font-size: medium;
    margin: .5rem 2rem;
    flex-grow: 1;
`


export const StyledMoreContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`

export const StyledMoreOptions = styled.div`
    background-color: #e7e7e7;
    z-index: 5;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    color: var(--raisin-black);
    
`

export const StyledHeader = styled.header.attrs(props => ({
    transY: props.translateY || 0,
}))`
    display: flex;
    position: fixed;
    flex-direction: column;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) ${props => `translateY(${props.transY}px)`};
    z-index: 100;
    color: var(--raisin-black);
    background-color: white;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    max-width: 100%;

    

    &.open {
        transition: transform 0.5s linear;
        transform: translateX(-50%);
    }

    &:hover {
        ${StyledNavItems} {
            margin: 0.5rem 0;
        }
        ${StyledNavItem}.highlight {
        transform: scale(1.3) translateY(-35%);
        }
    }
`


