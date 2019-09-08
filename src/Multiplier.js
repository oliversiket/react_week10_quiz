import React, { Component } from "react";

const Multiplier = ({x, y}) => (
    <>
        <div className="jumbotron multiplier">
            <h2>Multiplier</h2>
            <p>Your numbers: {x} and {y}</p>
            <p>{ x * y }</p>
        </div>
    </>
)
export default Multiplier