import React, { useState } from "react";
import "./Properties.css";
import PropertyCards from "./PropertyCards/PropertyCards";
import Form from "./PropertyForm/Form";


const Properties = () => {
  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };

  // modal
  //   ? document.body.classList.add("active-modal")
  //   : document.body.classList.remove("active-modal");

  return (
    <div className="container">
      <div className="Properties">
        <div className="head">
          <h1 className="header">All Properties</h1>
          <button className="btn btn-border-4" onClick={toggleModal}>
            Add Property
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
          <PropertyCards setErrorMessage={setErrorMessage}/>
        </div>
      </div>
      <p>{errorMessage}</p>
    </div>
  );
};

export default Properties;
