import styled from "styled-components";

export const LeftBar = styled.div`
    display: flex;
    flex-basis: 20%;
    flex-direction: column;
    flex-grow: 1;
    margin: 1rem 0;
    gap: 0.5rem;

    @media (max-width: 768px) {
        display: none;
    }
`

// Profile Section ----------------------------------------------------------------

export const ProfileStats = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    color: var(--raisin-black);
    border-top: 3px solid var(--quick-silver);
    filter: brightness(0.98);

    :hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
        border-top: 5px solid var(--quick-silver);
    }

    /* ::before {
        content: "";
        border: 1px solid var(--quick-silver);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        transform: scale(1.01) translateY(2%) translateX(-2%);
    }

    &:hover::before {
        background-color: black;
    } */
`

export const ProfilePicture = styled.div`
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;

    
    img {
        border-radius: 9999px;
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
        width: 7rem;
        height: 7rem;
        position: sticky;
    }

    .profileName {
        font-size: large;
        margin-top: .5rem;
    }
`

export const ProfileData = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0 0.5rem;
    font-size: small;
    color: var(--quick-silver);
    gap: 0.25rem;
    li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid transparent;
    }

    li:hover {
        border-bottom: 1px solid var(--ghost-white);
        color: var(--raisin-black)
    }
`

export const ProfileBtn = styled.div`
    display: flex;
    justify-content: center;
    border-top: 1px solid var(--ghost-white);
    padding: 0.5rem 0;
    gap: 0.25rem;

    span:last-child{
        max-width: 0px;
        overflow: hidden;
    }
    :hover span:last-child {
        max-width: 100px;
        transition: max-width 0.5s linear;
    }
`

// Recent Section ----------------------------------------------------------------

export const RecentStats = styled.div`
    display: flex;
    background-color: white;
    flex-direction: column; 
    top: 1rem;
    position: sticky;
    align-self: flex-start;
    border-bottom: 1px solid var(--quick-silver);
    color: var(--raisin-black);
    width: 100%;
    filter: brightness(0.98);

    :hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
        border-bottom: 2px solid var(--quick-silver);
    }
`

export const RecentHeader = styled.div`
    font-size: x-large;
    margin: 0.5rem 1rem;
`

export const RecentData = styled.div`
    margin: 0.25rem 0;
    
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: small;
    }
    li {
        min-width: 0;
        border-bottom: 1px solid var(--ghost-white);
        padding: 0.5rem 1rem;
    }

    li div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--quick-silver);
        width: 10rem;
        cursor: pointer;
    }

    li:hover div {
        text-overflow: clip;
    }
    li:hover {
        filter: brightness(0.85);
    }
`
export const RecentDataHeader = styled.div`
    margin: 0 0.5rem;
`