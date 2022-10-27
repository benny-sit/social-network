import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { keyframes } from 'styled-components';
const MyIconProvider = ({className, children}) => <IconContext.Provider value={{className}}>{children}</IconContext.Provider>;

export const PostIconProvider = styled(MyIconProvider)`
  height: 1.5rem;
  width: 1.5rem;
  padding: 0.5rem 0.5rem;
  transition: all 0.5s linear;

  &.red {
    color: red;
    filter: brightness(0.8);
  }
`;

export const Divider = styled.hr`
    --shadowColor: 0px -4px 5px 1px var(--light-gray);
    border-top: 1px solid var(--light-gray);
    margin: 0.25rem 1rem;
    /* box-shadow: var(--shadowColor); */
`

export const Feed = styled.div`
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: 0 0.5rem;
    
`

export const WebPost = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    max-width: 100%;
    margin: 1rem 0;
    border-radius: 0.75rem;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    color: var(--raisin-black);
    min-width: 0;
    position: relative;

    @media (max-width: 768px) {
        margin-top: 0;
        margin-bottom: .5rem;
    }

`

export const PostAuthor = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem 1rem;
    gap: 0.5rem;
    img {
        height: 48px;
        border-radius: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    div div:first-child {
        font-size: large;

    }

    div div:last-child {
        color: var(--quick-silver);
        font-size: smaller;
    }
`
export const PostImage = styled.div`
    display: flex;
    justify-content: center;
    background-color: var(--light-gray);
    overflow: hidden;
    img {
        max-width: 100%;
        max-height: 50vh;
        object-fit: scale-down;
    }
`

export const PostDescription = styled.div`
    flex-direction: column;
    margin: 0.5rem 1rem;
    text-overflow: ellipsis;
    overflow: hidden;

    span {
        margin: 0 0.5rem;
        color: var(--quick-silver);
        cursor: pointer;
    }
    span:hover {
        /* filter: brightness(0.8); */
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    }
`

export const PostStats = styled.div`
    display: flex;
    font-size: smaller;
    justify-content: end;
    text-align: end;
    color: var(--quick-silver);
    margin: 0 1rem;
`

export const PostFeedback = styled.div`
    display: flex;
    margin: 0.5rem 1rem 1rem;

    button {
        background: none;
	    color: inherit;
	    border: none;
	    padding: 0;
	    font: inherit;
	    cursor: pointer;
	    outline: inherit;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const littlePulse = keyframes`
    from {
        filter: brightness(0.7);
    }
    to {
        filter: brightness(1);
    }
`

export const PostInputWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    position: relative;
    --x-padding: 3.5rem;
    filter: brightness(0.98);
    textarea {
        padding: 1rem var(--x-padding);
        flex-grow: 1;
        border-radius: 1rem;
        resize: none;
        height: 0px;
        max-height: 6rem;
        font-size: large;
        border: 1px solid var(--light-gray);
        font: inherit;
    }

    textarea:focus,
    button:focus ~ textarea{
        outline: none;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    textarea:focus ~ button,
    button:focus{
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        background-color: var(--blizzard-blue);
    }



    button:focus {
        animation: ${littlePulse} 1s linear alternate;
    }

    img {
        position: absolute;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 9999px;
        align-self: center;
        left: 0.5rem;
    }

    button {
        position: absolute;
        align-self: center;
        right: 0;
        border-radius: 9999px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.5rem;
        transition: all 0.5s ease-out;
    }

    textarea::-webkit-scrollbar {
        width: 10px;
        height: 20px;
        z-index: -1;
    }

    textarea::-webkit-scrollbar-track {
        border-radius: 100vh;
        background: var(--ghost-white);
    }

    textarea::-webkit-scrollbar-thumb {
        background: var(--light-gray);
        border-radius: 100vh;
        border: 3px solid #f6f7ed;
    }

    textarea::-webkit-scrollbar-thumb:hover {
        background: var(--light-gray);
    }
`
export const PostActions = styled.div`
    margin-left: 0.5rem;
    display: flex;
    color: var(--raisin-black);
    

    @media (max-width: 768px) {
        justify-content: end;
        align-items: flex-end;
    }
`