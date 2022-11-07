import "./styles.css";
import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import MessageParser from "./chatbot/MessageParser";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import { GoMarkGithub } from "react-icons/go";
import ChatBot from 'react-simple-chatbot';
import { IconContext } from "react-icons";
import { ReactComponent as Button } from "./assets/robot.svg";
function App({ children }) {
  const [showBot, setBot] = useState(true);

  function handleBot() {
    const botState = !showBot;
    setBot(botState);
  }
  const steps = [
    {
      id: '0',
      message: 'Welcome to react chatbot!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Bye!',
      end: true,
    },
  ];

  return (
    <div className="App">
      <div className="header">
        <h4>
          Try out KC's food assistant and have an interactive experience
          placing your food order!
        </h4>
        <h4>Order @KC FOOD TRUCK</h4>
        <p>Thane East</p>
      </div>
      {/* <div>
    <ChatBot steps={steps} />
  </div> */}
      {showBot && (
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}

        />
      )}
      <div className="footer">
        <p>Made by @team</p>
        <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
          <a href="https://github.com/shriyash121">
            <GoMarkGithub />
          </a>
        </IconContext.Provider>
      </div>
      <button className="app-chatbot-button" onClick={handleBot}>
        <Button className="app-chatbot-button-icon" />
      </button>
    </div>
  );
}
export default App;
