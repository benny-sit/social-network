import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --ghost-white: #E8E9F3;
    --light-gray: #CECECE;
    --quick-silver: #A6A6A8;
    --raisin-black: #272635;
    --blizzard-blue: #B1E5F2;

    --main-color: var(--blizzard-blue);

    --container-size: 1024px;

    --md-size: 768px;
    --lg-size: 1024px;
}


body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: var(--ghost-white);
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
    display: none;
    }
}
`;
