// import React from 'react'
// import './PropertyCards.css'
// import { PropertyCardsData } from './PropertyCardsData'
// import PropertyCard from '../PropertyCard/PropertyCard'

// const PropertyCards = (props) => {

//   return (
//     <div className='PropertyCards'>
//         {PropertyCardsData.map((card, key) => {
//             return (
//                 <div className="parentContainer" key={key}>
//                     <PropertyCard
//                     title={card.title}
//                     value={card.value}
//                     img={card.img}
//                     location={card.location}
//                     />
//                 </div>
//             );
//         })}
//     </div>
//   )
// }

// export default PropertyCards

import React, { useState, useEffect } from "react";
import "./PropertyCards.css";
import axios from "axios";
import PropertyCard from "../PropertyCard/PropertyCard";
import Cookies from "js-cookie";

const PropertyCards = (props) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = Cookies.get("access_token");
        const userID = localStorage.getItem('userID');

        if (!accessToken) {
          throw new Error("Authentication token not found");
        }

        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`, // set the Authorization header with the token
          },
        };
        const response = await axios.get(
          `http://localhost:8080/api/v1/properties/${userID}/getProperties`,
          config
        );

        if (response.status === 200) {
          console.log(response.data);
          setProperties(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="PropertyCards">
      {properties.map((property, index) => (
        <div className="parentContainer" key={index}>
          <PropertyCard
            title={property.title}
            value={property.price}
            img={property.photo}
            location={property.location}
          />
        </div>
      ))}
    </div>
  );
};

export default PropertyCards;
