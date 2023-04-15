import "./Form.css";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function Form(props) {
  const [propertyName, setPropertyName] = useState("");
  const [propertyValue, setPropertyValue] = useState("");
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [propertyLocation, setPropertyLocation] = useState("");
  const [type, setType] = useState("type");

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
    setIsValid(isValidUrl(event.target.value));
  };

  const isValidUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
  };

  const getIsFormValid = () => {
    return (
      propertyName &&
      propertyValue &&
      isValid &&
      propertyLocation &&
      type !== "type"
    );
  };

  const clearForm = () => {
    setPropertyName("");
    setPropertyValue("");
    setUrl("");
    setPropertyLocation("");
    setType("type");
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const accessToken = Cookies.get("access_token");
    const userID = localStorage.getItem('userID');

    if(!accessToken){
      throw new Error("Authentication token not found!");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try{
      const response = await axios.post(
        "http://localhost:8080/api/v1/properties/createProperty",
        {
          title: propertyName,
          description: "Demo Description",
          propertyType: type,
          location: propertyLocation,
          price: propertyValue,
          photo: url,
          creator: userID,
        },
        config
      );
      if(response.status === 200){
        alert("Property added successfully");
      }
    }
    catch(error){
      console.log(error);
      alert("Error adding property")
    }
    clearForm();
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="formHeader">
            <h2>Property Creation Form</h2>
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
              Property name <sup>*</sup>
            </label>
            <input
              value={propertyName}
              onChange={(e) => {
                setPropertyName(e.target.value);
              }}
              placeholder="Property name"
            />
          </div>
          <div className="Field">
            <label>
              Property Value <sup>*</sup>
            </label>
            <input
              type="number"
              value={propertyValue}
              onChange={(e) => {
                setPropertyValue(e.target.value);
              }}
              placeholder="Property value"
            />
          </div>
          <div className="Field">
            <label>
              Property Image <sup>*</sup>
            </label>
            <input
              type="text"
              value={url}
              onChange={handleUrlChange}
              placeholder="Property Image should be entered as a valid URL"
            />
          </div>
          <div className="Field">
            <label>
              Location <sup>*</sup>
            </label>
            <input
              value={propertyLocation}
              type="text"
              onChange={(e) => {
                setPropertyLocation(e.target.value);
              }}
              placeholder="ex: 1100, brown street, metropolis NY"
            />
          </div>
          <div className="Field">
            <label>
              Type <sup>*</sup>
            </label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="role">Type</option>
              <option value="individual">Renting</option>
              <option value="business">Leasing</option>
              <option value="business">Management</option>
              <option value="business">Concession</option>
              <option value="business">License</option>
              <option value="business">Tenancy</option>
              <option value="business">Sale-Leaseback</option>
              <option value="business">Other</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Add Property
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
