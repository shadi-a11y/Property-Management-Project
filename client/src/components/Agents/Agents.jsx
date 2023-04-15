import React, { useState } from "react";
import "./Agents.css";
import AgentCards from "./AgentCards/AgentCards";
import Form from "./AgentForm/Form";

const Agents = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // modal
  //   ? document.body.classList.add("active-modal")
  //   : document.body.classList.remove("active-modal");

  return (
    <div className="container">
      <div className="Agents">
        <div className="head">
          <h1 className="header">Agents</h1>
          <button className="btn btn-border-4" onClick={toggleModal}>
            Add Agent
          </button>
          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <Form toggleModal={toggleModal} />
              </div>
            </div>
          )}
        </div>
        <div className="Properties">
          <AgentCards />
        </div>
      </div>
    </div>
  );
};

export default Agents;
