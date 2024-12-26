import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import { v4 as uuidv4 } from "uuid";
import { init, id } from '@instantdb/react';

const db = init({
  appId: "8c62fb94-751e-455c-94c8-996264c39bc9",
});
  const user= JSON.parse(localStorage.getItem("user"))


export default function ChatContainer({ currentChat }) {
  
  const handleSendMsg =  (msg) => {
  
  };
  const { data } = db.useQuery({ messages: {} });

  const { messages } = data || {};

  const sortedMessages = messages?.sort(
    (a, b) =>
      new Date(a.createdAt) - new Date(b.createdAt),
  );
// console.log(sortedMessages,"sortedMessages");

  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            
          </div>
          <div className="username">
            <h3>{currentChat?.username}</h3>
          </div>
        </div>
        <Logout />
      </div>
      <div className="chat-messages">
        {sortedMessages?.map((message) => {
    
          return (
            message?.username===user?.username &&  message?.username ===currentChat?.username &&
            <div  key={uuidv4()}>
              <div
                className={`message ${
                  message?.username===currentChat?.username ? "sended" : "recieved"
                }`}
              >
                <div className="content ">
                  <p>{message?.text}</p>
                </div>
              </div>
            </div>
          );
        })}

  
      </div>
      <ChatInput handleSendMsg={handleSendMsg} currentChat={currentChat}/>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #4f04ff21;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }
  }
`;
