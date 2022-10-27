import styled from "styled-components";
import { IconContext } from "react-icons";

export const RightBar = styled.div`
    display: flex;
    flex-basis: 20%;
    flex-grow: 1;
    margin-top: 1rem;
    flex-direction: column;
    gap: 0.5rem;

    @media (max-width: 992px) {
        display: none;
    }
`

const MyIconProvider = ({className, children}) => <IconContext.Provider value={{className}}>{children}</IconContext.Provider>;

export const TrendingIconProvider = styled(MyIconProvider)`
  color: rgba(34, 139, 34, 0.5);
  transition: all 0.5s linear;
`;

// Explore Section ----------------------------------------------------------------

export const ExploreStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    filter: brightness(0.98);

    border-left: 1px solid var(--light-gray);

    :hover {
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
        border-left:  2px solid var(--light-gray);
    }

    ul {
        list-style: none;
        color: var(--quick-silver);
        font-size: small;
        padding: 0;
        margin: 0;
    }

    ul li {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: .25rem .25rem;
        cursor: pointer;
    }

    ul li:hover {
        background-color: var(--light-gray);
        color: var(--raisin-black);
    }

    ul li img {
        width: 3rem;
        height: 3rem;
    }

    ul li span:first-child {
        text-overflow: ellipsis;
    }

    ul li span:last-child {
        position: absolute;
        align-self: center;
        right: 0;
        visibility: hidden;
        background-color: inherit;
    }
    ul li:hover span:last-child { 
        visibility: visible;
    }
`

export const ExploreHeader = styled.div`
    display: flex;
    padding: 0.5rem 1rem;
    font-size: x-large;
    align-items: center;
    /* text-shadow: 0 0 1px rgba(0, 0, 0, 0.2); */
    border-bottom: 1px solid var(--light-gray);
`
export const ExploreFooter = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0rem;
    border-top: 1px solid var(--light-gray);
    
    span {
        color: var(--raisin-black);
        max-height: 0;
        overflow: hidden;
        white-space: nowrap;
        transition: max-height 0.5s linear;
    }

    :hover span {
        max-height: 50px;
    }
`

// Trending Section ------------------------------------------------------------

export const TrendingStyled = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: white; */
    /* border-right: 1px solid var(--light-gray); */
    position: sticky;
    align-self: flex-start;
    top: 1rem;
    /* filter: brightness(0.97); */
`

export const TrendingStyledSticky = styled.div`
    display: flex;
    flex-direction: column;


    background-color: white; 
    border-right: 1px solid var(--light-gray);
    filter: brightness(0.97);

    :hover {
        border-right: 2px solid var(--light-gray);
        box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1);
        filter: brightness(0.98);
    }
`

export const TrendingHeader = styled.div`
    display: flex;
    padding: 0.5rem 1rem;
    font-size: x-large;
    /* text-shadow: 0 0 1px rgba(0, 0, 0, 0.2); */
    border-bottom: 1px solid var(--light-gray);
`

export const TrendingList = styled.ul`
    list-style: none;
    padding: 0;

    li {
        gap: 0.25rem;
        display: flex;
        padding: .25rem;
        align-items: center;
        color: var(--quick-silver);
    }

`

// About Section --------------------------------

export const AboutSection = styled.a`
    display: flex;
    font-size: small;
    color: var(--quick-silver);
    align-items: center;
    justify-content: space-between;
    padding: 0 .25rem;
    text-decoration: none;

    :hover {
        color: var(--raisin-black);
    }
`