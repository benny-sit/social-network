import styled from 'styled-components';
import { IconContext } from 'react-icons';

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
    transform: translateY(100%);
    font-size: 1.1rem;
    transition: all 0.5s linear;
    opacity: 0;
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
            transform: translateY(0);
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

    &.active{
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
    }
`

export const StyledNavItems = styled.ul`
    list-style: none;
    display: flex;
    padding: 0 1rem;
    position: relative;
    margin: 0.25rem 0;
    transition: all 0.5s ease-out;

    &:hover {
        margin: 0.5rem 0;
        ${StyledNavItem}.highlight {
        transform: scale(1.3) translateY(-30%);
        }
    }

    
`

export const StyledNav = styled.nav`

`

export const StyledHeader = styled.header`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    color: var(--raisin-black);
    background-color: white;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    max-width: 100%;
`


