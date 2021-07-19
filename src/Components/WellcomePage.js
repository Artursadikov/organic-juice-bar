import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth';
import "../Css/WellcomePage.css";


const WellcomePage = () => {

    const { currentUser } = useContext(AuthContext);


    const onMouseLeave = () => {
        changeAnimation('btn-order2');
    };

    const onMouseEnter = () => {
        changeAnimation('btn-order');
    };

    const [btnclassAnimationChange, changeAnimation] = useState('btn-order');

    return (
        <section>
            <div className="wellcome-box">
                <h1 className="title">Organic - Juice - Bar</h1>
                <h2 className="lets-make-juice">Let's make some juice...</h2>
                <Link to={currentUser ? '/order-main' : './login'}>
                    <button onMouseOut={onMouseLeave} onMouseOver={onMouseEnter} className={btnclassAnimationChange}>Order</button>
                </Link>
                <p className="organic-explain">Our products are 100% organic , chemical-free and freshest
                    We use pure and healty ingredients
                    And all for your health and enjoyment.
                </p>
            </div>
            <h2 className="healthy">Healthy Drinks</h2>
        </section>
    );

};

export default WellcomePage;