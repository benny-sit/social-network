import styled, { keyframes } from 'styled-components';


export const MessagesContainer = styled.div`
    display: flex;
    background-color: white;
    margin-top: 1rem;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 0 4px 1px rgba(177, 229, 242, 0.3);
    height: 90vh;
    position: relative;

    @media (max-width: 768px) {
        margin-top: 0;
        border-radius: 0;
    }
`

export const StyledMessagesLeft = styled.div`
    flex-basis: 30%;
    flex-grow: 1;
    border-right: 1px solid var(--quick-silver);
    box-shadow: 7px 0px 5px -3px rgba(0, 0, 0, 0.1);
    color: var(--raisin-black);
    display: flex;
    flex-direction: column;
    

    @media (max-width: 768px) {
        transform: translateX(-100%);
        position: absolute;
        max-height: 90vh;
        z-index: 10;
        background-color: #fff;
    }

    &.open {
        transform: translateX(0);
    }
`

export const StyledMessagesHeader = styled.div`
    font-weight: 300;
    padding: 0.25rem .5rem;
    border-bottom: 1px solid var(--quick-silver);
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    button {
        border: none;
        display: flex;
        align-items: center;
        background-color:rgba(177, 229, 242, 0.3);
        height: 100%;
        visibility: hidden;
    }

    button:hover {
        background-color:rgba(177, 229, 242, 0.7);
    }

    @media (max-width: 768px) {
        button {
            visibility: visible;
        }
    }
`

export const StyledMessagesFilter = styled.div`
    margin: .5rem;
    display: flex;
    position: relative;
    input {
        outline: none;
        flex-grow: 1;
        padding: 0.25rem;
        border: 1px solid var(--quick-silver);
        border-radius: 0.25rem;
        padding-right: 1.5rem;
    }

    input:hover {
        box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.1);
    }
     
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        position: absolute;
        right: 0rem;
        align-self: center;
    }
`

export const StyledChatsList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: .5rem;
    overflow-y: auto;
    
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

    li:hover {
        filter: brightness(0.9);
    }

    li.selected {
        background-color: rgba(177, 229, 242, 0.3);
    }

    li {
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--light-gray);
        padding: .25rem .5rem;
        position: relative;
    }

    li:last-child {
        border-bottom: none;
    }

    img {
        height: 4rem;
        width: 4rem;
        border-radius: 9999px;
    }

    li div {
        display: flex;
        flex-direction: column;
        white-space: nowrap;
        overflow: hidden;
        padding: 0 0.25rem;
        max-width: 13rem;
        
    }

    li div span:first-child {

    }

    li div span:last-child {
        color: var(--quick-silver);
        font-size: small;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    li:hover div span:last-child {
        text-overflow: clip;
    }

    li span.unread {
        position: absolute;
        background-color: var(--blizzard-blue);
        padding: .25rem;
        right: 0;
        border-top-left-radius: .25rem;
        border-bottom-left-radius: .25rem;
    }

    li:hover span.unread {
        padding: .25rem .5rem;
    }

    li.selected span.unread {
        visibility: hidden;
    }
`

export const NewChat = styled.div `
    cursor: pointer;
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    span {
        background-color: rgba(177, 229, 242, 0.5);
        flex-grow: 1;
        margin: 1rem;
        padding: 1rem;
        text-align: center;
        color: var(--raisin-black);
    }

    span:hover {
        background-color: rgba(177, 229, 242, 0.9);
    }
`


// Main Chat Section ----------------------------------------------------------------

export const StyledMessagesMain = styled.div`
    flex-basis: 70%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: hidden;
`

export const StyledChatHeader = styled.div`
    display: flex;
    border-bottom: 1px solid var(--light-gray);
`

export const StyledChatDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: .5rem;

    img {
        height: 3rem;
        border-radius: 9999px;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    div span:last-child {
        color: green;
        font-size: small;
    }

    button:first-child {
        border:none;
        font-size: x-large;

        align-items: center;
        background-color: transparent;
        display: none;
    }

    @media (max-width: 768px) {
        button:first-child {
            display: flex;
        }
    }
`

export const StyledChatButtons = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 .5rem;
    font-size: x-large;
`

export const StyledMessage = styled.div`
    background-color: #efefef;
    color: var(--raisin-black);
    padding: .25rem;
    align-self: flex-end;
    border-radius: .5rem;
    border-bottom-right-radius: 0;
    max-width: 75%;
    word-break: break-all;

    &.you {
        border-bottom-right-radius: .5rem;
        border-bottom-left-radius: 0;
        align-self: flex-start;
        background-color: rgba(177, 229, 242, 0.5);
    }

`
export const StyledMessageSender = styled.div`
    color: var(--quick-silver);
    font-size: small;
`

export const StyledMessageContent = styled.div`
`

export const MessagesBox = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: .5rem;
    gap: .5rem;

    min-height: 0;
`

export const MessagesBoxWrapper = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
`

const flying_out = keyframes`
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    99% {
        transform: translateX(50%);
        opacity: 0.3;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`

export const StyledSendMessage = styled.div`
    display: flex;
    --pad: 1rem;
    padding: var(--pad);
    
    position: relative;

    textarea {
        resize: none;
        padding: .75rem 2.5rem;
        outline: none;
        flex-grow: 1;
        border: 1px solid var(--light-gray);
        border-radius: .5rem;
        font: inherit;
        overflow-y: auto;
        max-height: 10rem;
    }

    button {
        position: absolute;
        background: none;
        font-size: x-large;
        align-self: center;
        border: none;
        display:flex;
        align-items: center;
        color: var(--raisin-black);
    }

    button.attach{
        left: 1rem;
    }

    button.send {
        right: 1rem;

        background-color: var(--blizzard-blue);
        padding: 0.25rem .5rem;
        border-top-left-radius: .25rem;
        border-bottom-left-radius: .25rem;
    }

    button.send:hover {
        padding-right: 1rem;
    }

    button.send:focus span{
        animation: ${flying_out} 1s linear normal forwards;
    }

    button span {
        display: flex;
        align-items: center;
    }
`