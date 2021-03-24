import React from "react";

import "./mensagem.css";

const mensagem = ({ message: text }) => {
  return (
    <>
      <div className="messageContainer justifyEnd">
        <p className="sentText pr-10"></p>
        <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">{text}</p>
        </div>
      </div>

      <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{text}</p>
        </div>
        <p className="sentText pl-10 ">User</p>
      </div>
    </>
  );
};

export default mensagem;
