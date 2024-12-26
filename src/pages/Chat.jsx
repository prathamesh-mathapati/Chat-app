import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ChatContainer from "../components/ChatContainer";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";

export default function Chat() {
  const [contactsBy, setContactsBy] = useState("");
  const [currentChat, setCurrentChat] = useState(undefined);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  // console.log(currentChat,"currentChat");
  

  return (
    <>
      <Container>
        <div className="container">
          <Contacts changeChat={handleChatChange} />

            <ChatContainer currentChat={currentChat} />
          
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
