import styled from "styled-components";
import { IconContext } from "react-icons";

const MyIconProvider = ({className, children}) => <IconContext.Provider value={{className}}>{children}</IconContext.Provider>;

export const SearchIconProvider = styled(MyIconProvider)`
  height: 1.5rem;
  width: 1.5rem;
  transition: all 0.5s linear;
  position: absolute;
  align-self: center;
  color: var(--quick-silver);

  &.left {
    left: .5rem;
  }

  &.right {
    right: .5rem;
    transform: translateX(30%);
    visibility: hidden;
    cursor: pointer;
  }
`;

export const Divider = styled.hr`
    border-top: 1px solid var(--quick-silver);
`

// Search Section ----------------------------------------------------------------

export const StyledSearchWrapper = styled.div`
    width: calc(var(--container-size) * 6 / 10);
`

export const StyledSearch = styled.div`
    margin: 1rem 0rem;
    background-color: #fff;
    /* border-radius: 1rem; */
    color: var(--raisin-black);
    padding: 1rem;

    @media (max-width: 768px) {
        margin: 0;
    }
`

export const StyledSearchHeader = styled.div`
    font-size: x-large;
    margin: .5rem 1rem;
    align-self: center;
`

export const StyledSearchInput = styled.div`
    width: 100%;
    display: flex;
    position: relative;

    input {
        border: 1px solid var(--light-gray);
        outline: none;
        flex-grow: 1;
        padding: .75rem 3rem;
        border-radius: 1rem;
    }

    :hover ${SearchIconProvider}.left {
        color: var(--raisin-black);
    }

    input:focus ~ ${SearchIconProvider}.right,
    ${SearchIconProvider}.right:focus {
        color: var(--raisin-black);
        visibility: visible;
        transform: translateX(0);

    }
`

// Resault Divider Section ------------------------------

export const StyledResultWrapper = styled.div`
    display: flex;
    font-size: x-large;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    transition: all 0.3s linear;

    hr {
        height: 0px;
    }
    
    hr:first-child {
        flex: 1 1 2rem;
    }

    hr:last-child {
        flex-grow: 6;
    }

    span {
        overflow: hidden;
        transition: all 0.3s linear;
        max-width: 100px;
    }

    span.unseen {
        max-width: 0;
    }
`



// Search Feed Section ----------------------------------------------------------------

export const StyledSearchFeed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.5rem;
`