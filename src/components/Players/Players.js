import React, { useEffect, useState } from 'react';
import mockData from '../../fakeData/MOCK_DATA.json';
import BidCart from '../BidCart/BidCart';
import Card from '../Card/Card';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(mockData);

    }, []);
    const [cart, setCart] = useState([]);
    const handleAddPlayers = (player) => {
        // console.log('clicked', player);
        const newCart = [...cart, player];
        setCart(newCart);
        console.log(newCart);
        
        
    }


    return (
        <div className="players-container">
            <div className="players">
                <div className="auction">
                    <h1>Auction List <FontAwesomeIcon icon={faFutbol} /></h1>
                </div>
                {
                    players.map(player => <Card player={player} key={player.id} handleAddPlayers={handleAddPlayers} cart={cart}></Card>)
                }
            </div>

            <div className="bid-container">
                <h1>Player Bidding List</h1>
                <h5>Total Selected Players: {cart.length}</h5>

                {
                    cart.map(selectedPlayer => <div>
                        <li>{selectedPlayer.first_name + ' ' + selectedPlayer.last_name}</li>
                        <p>Wage: {selectedPlayer.wage} Million Euro</p>

                    </div>)

                }
                <BidCart cart ={cart}></BidCart>
            </div>

        </div>

    );
};

export default Players;