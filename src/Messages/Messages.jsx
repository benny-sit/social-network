import React, {useState, } from "react";
import {
  MessagesBox,
  MessagesContainer,
  NewChat,
  StyledChatButtons,
  StyledChatDetails,
  StyledChatHeader,
  StyledChatsList,
  StyledMessagesFilter,
  StyledMessagesHeader,
  StyledMessagesLeft,
  StyledMessagesMain,
  StyledSendMessage,
} from "../Components/MessagesComponents";
import { IoSearchOutline, IoEllipsisVerticalOutline, IoClose } from "react-icons/io5";
import MessagesMain from "./MessagesMain";

export default function Messages() {
  const [open, setOpen] = useState(false);

  return (
    <MessagesContainer>
      <StyledMessagesLeft className={`${open ? 'open' : ''}`}>
        <StyledMessagesHeader>
          <span>Messages</span>
          <button onClick={() => setOpen(false)}>
            <IoClose />
          </button>
        </StyledMessagesHeader>
        <StyledMessagesFilter>
          <input type="text" placeholder="filter Messages..." />
          <button>
            <IoSearchOutline />
          </button>
        </StyledMessagesFilter>
        <StyledChatsList>
          <li className="selected">
            <img src="https://via.placeholder.com/128x128.png" alt="chat-icon"/>
            <div>
              <span>
                John Doe
              </span>
              <span>
                Hi, how are you doing today?
              </span>
            </div>
          </li>
          <li>
            <img src="https://via.placeholder.com/128x128.png" alt="chat-icon"/>
            <div>
              <span>
                John Doe
              </span>
              <span>
                Hi, how are you doing today?
              </span>
            </div>
          </li>
          <li>
            <img src="https://via.placeholder.com/128x128.png" alt="chat-icon"/>
            <div>
              <span>
                John Doe
              </span>
              <span>
                Hi, how are you doing today?
              </span>
            </div>
          </li>
          <li>
            <img src="https://via.placeholder.com/128x128.png" alt="chat-icon"/>
            <div>
              <span>
                John Doe
              </span>
              <span>
                Hi, how are you doing today?ddddddddddddddddddddddddddddddddd
              </span>
            </div>
            <span className="unread">
              6
            </span>
          </li>
          <li>
            <img src="https://via.placeholder.com/128x128.png" alt="chat-icon"/>
            <div>
              <span>
                John Doe
              </span>
              <span>
                Hi, how are you doing today?
              </span>
            </div>
            <span className="unread">
              5
            </span>
          </li>
          <li>
            <img src="https://via.placeholder.com/128x128.png" alt="chat-icon"/>
            <div>
              <span>
                John Doe
              </span>
              <span>
                Hi, how are you doing today?
              </span>
            </div>
          </li>
          <li>
            <img src="https://via.placeholder.com/128x128.png" alt="chat-icon"/>
            <div>
              <span>
                John Doe
              </span>
              <span>
                Hi, how are you doing today?
              </span>
            </div>
          </li>

          <li>
            <img src="https://via.placeholder.com/128x128.png" alt="chat-icon"/>
            <div>
              <span>
                John Doe
              </span>
              <span>
                Hi, how are you doing today?
              </span>
            </div>
          </li>

          <li>
            <img src="https://via.placeholder.com/128x128.png" alt="chat-icon"/>
            <div>
              <span>
                John Doe
              </span>
              <span>
                Hi, how are you doing today?
              </span>
            </div>
          </li>
          <li>
            <img src="https://via.placeholder.com/128x128.png" alt="chat-icon"/>
            <div>
              <span>
                John Doe
              </span>
              <span>
                Hi, how are you doing today?
              </span>
            </div>
          </li>
          
        </StyledChatsList>
        <NewChat>
          <span>
          + New Chat
          </span>
        </NewChat>
      </StyledMessagesLeft>
      <MessagesMain setOpen={setOpen}/>
    </MessagesContainer>
  );
}
