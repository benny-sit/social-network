import React, { useState, useRef, useEffect } from "react";
import {
  MessagesBox,
  MessagesBoxWrapper,
  MessagesContainer,
  StyledChatButtons,
  StyledChatDetails,
  StyledChatHeader,
  StyledChatsList,
  StyledMessage,
  StyledMessageContent,
  StyledMessageSender,
  StyledMessagesFilter,
  StyledMessagesHeader,
  StyledMessagesLeft,
  StyledMessagesMain,
  StyledSendMessage,
} from "../Components/MessagesComponents";
import {
  IoSearchOutline,
  IoEllipsisVerticalOutline,
  IoSendOutline,
  IoAttach,
  IoMenu,
} from "react-icons/io5";

export default function MessagesMain({setOpen}) {
  const [message, setMessage] = useState("");
  const messageAreaRef = useRef();
  const [rows, setRows] = useState(1);

  useEffect(() => {
    const rowlen = message.split("\n");
    if (rowlen.length > 1) {
      setRows(rowlen.length);
    }
    if (messageAreaRef) {
      messageAreaRef.current.style.height = "min-content";
      if (messageAreaRef.current.scrollHeight > 60) {
        messageAreaRef.current.style.height = `${messageAreaRef.current.scrollHeight}px`;
      }
    }
  }, [message]);

  return (
    <StyledMessagesMain>
      <StyledChatHeader>
        <StyledChatDetails>
          <button onClick={() => setOpen(prev => !prev)}>
            <IoMenu />
          </button>
          <img src="https://via.placeholder.com/128x128.png" alt="chat-icon" />
          <div>
            <span>John Doe</span>
            <span>Online</span>
          </div>
        </StyledChatDetails>
        <StyledChatButtons>
          <IoEllipsisVerticalOutline />
        </StyledChatButtons>
      </StyledChatHeader>
      <MessagesBoxWrapper>
        <MessagesBox>
          <StyledMessage>
            <StyledMessageSender>John Doe</StyledMessageSender>
            <StyledMessageContent>Hi, John how are you?</StyledMessageContent>
          </StyledMessage>
          <StyledMessage className="you">
            <StyledMessageSender>John Doe</StyledMessageSender>
            <StyledMessageContent>Hi, John how are you?</StyledMessageContent>
          </StyledMessage>
        </MessagesBox>
      </MessagesBoxWrapper>
      <StyledSendMessage>
        <textarea
          rows={rows}
          onChange={(text) => setMessage(text.target.value)}
          placeholder="Message..."
          ref={messageAreaRef}
        />
        <button className="attach">
            <IoAttach />
        </button>
        <button className="send">
            <span>
                <IoSendOutline />
            </span>
        </button>
      </StyledSendMessage>
    </StyledMessagesMain>
  );
}
