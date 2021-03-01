import React from 'react';
import './Card.css';
const Card = (props) => {
    const {first_name,last_name,wage,image,current_club,position} = props.player;
    return (
        <div className="card">
            <div className="card-body">
                <img src={image} className="card-img-top" alt="..."></img>
                <h5 className="card-title">{first_name+' '+last_name}</h5>
                <h6> Club: {current_club}</h6>
                <h6> Position: {position}</h6>
                <p className="card-text">Wage: {wage} Million EUR</p>
                <button className="btn btn-primary" onClick={()=>props.handleAddPlayers(props.player)} >Add To Bid List</button>
            </div>
        </div>
    );
};

export default Card;