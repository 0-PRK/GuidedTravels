import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UseFetch from "../Hooks/UseFetch";

function Card1() {


  const { id } = useParams();

  const {user} = UseFetch(`http://localhost:4000/plans/user/plan/${id}`)
  
  const num = user.planCount; // Assuming you have the `user` object with the `planCount` value
  const plans = user.plans || []; // Assuming you have the `user` object with the `plans` array

  // Create an array with `num` elements
  const cardArray = Array.from({ length: num });

  return (
    <div className="cards-container">
      <div className="row">
      <div className="cards-card-scroll-container">
      <div className="cards-card-stack">
        {/* Loop through the `cardArray` and generate cards */}
        {cardArray.map((_, index) => (
          <div className="col-md-3" key={index}>
            <div className="card">
              <Card.Img variant="top" src={plans[index]?.imageUrl || "placeholder.jpg"} />
              <Card.Body>
                <Card.Title>{plans[index]?.name || "Card Title"}</Card.Title>
                <Button variant="primary">View</Button>
              </Card.Body>
            </div>
          </div>
        ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
