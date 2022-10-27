import styled from "styled-components";

export const Container = styled.div`
    width: var(--container-size);
    max-width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    gap: 1rem;


    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
    display: none;
    }

`