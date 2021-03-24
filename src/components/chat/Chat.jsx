import React from "react";
import mensagem from "./../mensagens/mesagem";
import "./chat.css";
import icon from "../../icons/icon01.png";
import icon2 from "../../icons/icon02.png";

const Enviar = ({ setMessage, sendMessage, message }) => (
  <div className="outerContainer">
    <div className="container">
      <div className="infoBar">
        <div className="leftInnerContainer">
          <img className="onlineIcon" src={icon2} alt="online icon" />
          <h3>teste</h3>
        </div>
        <div className="rightInnerContainer">
          <a href="/">
            <img src={icon} alt="close icon" />
          </a>
        </div>
      </div>
      <form class="form">
        <input
          class="input"
          type="text"
          placeholder="Digite uma Mensagem..."
          value={mensagem}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />
        <button class="sendButton" onClick={(e) => sendMessage(e)}>
          Enviar
        </button>
      </form>
    </div>
  </div>
);

export default Enviar;
