import React from "react";
import {useNavigate} from 'react-router-dom';
import waterSupply from '../../assets/images/water-supply.jpg';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/search-water-supplier");
    }

    return (
        <div className="home-page">
            <h1>Welcome to Mangle's Shop</h1>
            <img src={waterSupply} alt="Water Sales Tracking" onClick={handleClick} style={{cursor: "pointer"}} ></img>
        </div>
    )
}

export default HomePage;