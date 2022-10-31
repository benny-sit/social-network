import styled from 'styled-components';



// Profile Details Section ----------------------------------------------------------------

export const StyledProfileAbout = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const StyledProfileStats = styled.div`
    display: flex;
    flex-direction: column;
    word-break: break-all;

    span.title {
        font-size: xx-large;
        font-weight: 400;
    }

    span.sub-title {
        font-size: medium;
        color: var(--quick-silver);
        margin-bottom: 0.5rem;
    }

    span.body {
        font-size: small;
        color: var(--quick-silver);
        display: flex;
        flex-direction: column;
    }

    span.body span {
        align-items: center;
        display: flex;
        gap: .25rem;
    }
`

export const StyledImgWrapper = styled.div`

    img {
        border-radius: 1rem;
        height: 8rem;
        width: 8rem;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
`

export const StyledProfileButtons = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    button {
        padding: 0.5rem;
        border-radius: .25rem;
        background-color: rgba(177, 229, 242, 0.5);
        font: inherit;
        border: none;
        color: var(--quick-silver);
        cursor: pointer;
    }

    button:hover {
        background-color: rgba(177, 229, 242, 0.6);
        color: var(--raisin-black);
    }

    button.selected {
        background-color: var(--blizzard-blue);
        color: var(--raisin-black);
    }
`

export const StyledProfileDetails = styled.div`
    display: flex;
    background-color: #fff;
    margin-top: 1rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    padding: 1rem;
    flex-direction: column;
    flex-grow: 1;

    @media (max-width: 768px) {
        margin-top: 0;
    }
`

export const StyledProfilePosts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.5rem;
    padding-top: .5rem;
`



export const StyledProfileWrapper = styled.div`
    width: calc(var(--container-size) * 6 / 10);
`
