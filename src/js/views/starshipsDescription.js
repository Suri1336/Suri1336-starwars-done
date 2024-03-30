import React, { useState, useContext, useEffect } from "react";
import { Context } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import "../../styles/descriptionCard.css";

export default function StarshipDescription() {
    const [starship, setStarship] = useState({})
    const { id } = useParams()
    useEffect(() => {
        async function getStarship() {
            const response = await fetch("https://www.swapi.tech/api/starships/" + id)
            const data = await response.json()
            setStarship(data.result.properties)
        }
        getStarship()
    }, [])
    return (
        <section>
            
            <div className="post">
                <div className="left">
                    <img className="wordmark"
                        src="http://res.cloudinary.com/prvnbist/image/upload/v1508603572/starwars.png" alt="star wars" />
                </div>
                <div className="right">
                    <img className="helmet"
                    src="http://res.cloudinary.com/prvnbist/image/upload/v1508603573/helmet.png" alt="helmet" />
                    <div className="productInfo">
                        <h1>{starship.name} </h1>

                        <div className="details">
                            <div className="size">
                            <h4>cargo_capacity: {starship.cargo_capacity}</h4>
                              <h4>consumables: {starship.consumables}</h4>
                                <h4>cost_in_credits: {starship.cost_in_credits}</h4>
                                <h4>created: {starship.created}</h4>
                            </div>

                        </div>

                      
                    </div>
                </div>
            </div>

        </section>
    )
}
