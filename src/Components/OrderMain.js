
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import "../Css/OrderMain.css";
import axios from "axios";
import Ingredient from '../Components/Ingredient';
import Glass from "../Components/Glass";


export default function OrderMain(props) {
    let history = useHistory();

    const [bigButton, setBigButton] = useState(true);
    const [mediumButton, setMediumButton] = useState();
    const [smallButton, setSmallButton] = useState();
    const [newIngArr, setIngArr] = useState([]);
    const [newColorArr, setNewColorArr] = useState([]);
    const [ingredient, setIngredient] = useState([]);
    const [shake, setShake] = useState(false);
    const [chooseText, setChooseText] = useState("Choose four ingredients");
    const [totalPrice, setTotalPrice] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetchIngs();

    }, [])



    //get ingredients from firebase
    const fetchIngs = () => {

        axios.get('https://organic-juice-bar-default-rtdb.firebaseio.com/ingredients.json')
            .then((response) => {
                setIngredient(response.data);
                setLoaded(true);
            })
    };

    //cup size btn choose
    const onBigCupSize = () => {
        setBigButton(true);
        setMediumButton(false);
        setSmallButton(false);
        setChooseText('Choose four ingredients');


    };
    //cup size btn choose
    const onMediumCupSize = () => {
        setBigButton(false);
        setMediumButton(true);
        setSmallButton(false);
        setChooseText('Choose three ingredients');
    };
    //cup size btn choose
    const onSmallCupSize = () => {
        setBigButton(false);
        setMediumButton(false);
        setSmallButton(true);
        setChooseText('Choose two ingredients');
    };

    //shake btn
    const onDoneBtn = () => {
        setTimeout(() => {
            setIngArr([]);
            setTotalPrice(0);
            setShake(false);
            setBigButton(true);
            setMediumButton(false);
            setSmallButton(false);
            setChooseText('Choose four ingredients');
        },3000);
        setShake(!shake);
    }
    const onClearBtn = () => {
        setIngArr([]);
        setTotalPrice(0);
        setShake(false);
        setBigButton(true);
        setMediumButton(false);
        setSmallButton(false);
        setChooseText('Choose four ingredients');
    }

    //back to home btns
    const backToHomePage = () => {
        history.push("/");
    }

    //pick ingredients
    const ingArr = [];
    const colorArr = [];
    const priceArr = [];

    const pickIngredient = (name, color, price, id) => {

        ingArr.push(name)
        colorArr.push(color)
        priceArr.push(price)

        if (mediumButton) {
            if (ingArr.length >= 3 && colorArr.length >= 3) {
                const reducePrice = (a, b) => a + b;
                setTotalPrice(priceArr.reduce(reducePrice).toFixed(2));

                setIngArr(ingArr);
                setNewColorArr(colorArr);
                setChooseText('great, now shake it !!!');
            }
        } else if (bigButton) {
            if (ingArr.length >= 4 && colorArr.length >= 4) {
                const reducePrice = (a, b) => a + b;
                setTotalPrice(priceArr.reduce(reducePrice).toFixed(2));

                setIngArr(ingArr);
                setNewColorArr(colorArr);
                setChooseText('great, now shake it !!!');
            }
        } else if (smallButton) {
            if (ingArr.length >= 2 && colorArr.length >= 2) {
                const reducePrice = (a, b) => a + b;
                setTotalPrice(priceArr.reduce(reducePrice).toFixed(2));

                setIngArr(ingArr);
                setNewColorArr(colorArr);
                setChooseText('great, now shake it !!!');
            }
        }

        
    }


    return (
        <section className="order-section">
            <div className="menu-container">
                <h1 className="menu-title">MENU</h1>
                <div className="amount-ing-container">
                    <h4 className="cupSize">Cup size</h4>
                    <div className="cup-btn">
                        {
                            <React.Fragment>
                                <button style={bigButton ? { backgroundColor: 'orange', color: 'white' } : { backgroundColor: 'transparent' }} onClick={onBigCupSize} className="size-btns">Big</button>
                                <button style={mediumButton ? { backgroundColor: 'orange', color: 'white' } : { backgroundColor: 'transparent' }} onClick={onMediumCupSize} className="size-btns">Medium</button>
                                <button style={smallButton ? { backgroundColor: 'orange', color: 'white' } : { backgroundColor: 'transparent' }} onClick={onSmallCupSize} className="size-btns">Small</button>
                            </React.Fragment>

                        }
                    </div>
                </div>
                <span className="amount-of-ings-to-pick">{chooseText}</span>
                <div className="ing-container">
                    {loaded ?
                        Object.values(ingredient).map(ing => {
                            return (
                                <Ingredient
                                    pickIngredient={() => pickIngredient(ing.name, ing.color, ing.price, ing.id)}
                                    key={ing.id}
                                    color={ing.color}
                                    price={ing.price}
                                    name={ing.name}

                                />
                            )
                        })
                        : <h1 className="loading">Loading...</h1>}
                </div>
                <div className="buttons-container">
                    <button onClick={onDoneBtn} disabled={bigButton && newIngArr.length < 4 ? true : mediumButton && newIngArr.length < 3 ? true : smallButton && newIngArr.length < 2 ? true : false} className="btn-Shake">
                        Shake!
                    </button>
                    <button onClick={onClearBtn} className="btn-Clear">
                        Clear!
                    </button>
                </div>
                <div className="total-price">
                    <h1>total price : {totalPrice}$</h1>
                    <h3>{newIngArr.join(' , ')}</h3>
                </div>
            </div>
            <div className="glass-container">
                <button onClick={backToHomePage} className="back-btn">{'<= Back'}</button>
                <Glass
                    smallCup={smallButton}
                    mediumCup={mediumButton}
                    bigCup={bigButton}
                    ColorArr={newColorArr}
                    newIngArr={newIngArr}
                    shake={shake}

                />
            </div>
        </section >
    )
}
