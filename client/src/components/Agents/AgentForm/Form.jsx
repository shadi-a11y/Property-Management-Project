import "./Form.css";
import { useState } from "react";

function Form(props) {
  const [agentID, setAgentID] = useState("");

  const getIsFormValid = () => {
    return agentID.length > 8;
  };

  const clearForm = () => {
    setAgentID("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request Sent!");
    clearForm();
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="formHeader">
            <h2>Agent addition form</h2>
            <button
              className="close-modal"
              onClick={props.toggleModal}
              id="close-button"
            >
              X
            </button>
          </div>
          <div className="Field">
            <label>
              Agent ID <sup>*</sup>
            </label>
            <input
              value={agentID}
              onChange={(e) => {
                setAgentID(e.target.value);
              }}
              placeholder="Property name"
            />
          </div>
          <div className="Field">
            <label>
              Send an opening message <sup id="optional">Optional</sup>
            </label>
            <textarea />
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Add Agent
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
