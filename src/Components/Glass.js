
import React from 'react';
import "../Css/Glass.css";


export default function Glass(props) {

    const clear = props.newIngArr;
    let color = props.ColorArr;
    const shake = props.shake;
    let thank = props.thank;


    if (!thank) {
        return (
            <React.Fragment>


                {
                    props.bigCup ? shake ? <div className="loader"></div> :
                        <div className="glass-three">
                            <div className="glass-wrapper-three">
                                <div style={{ backgroundColor: clear.length === 0 ? `transparent` : `#${color[3]}` }} className="glass-top-three">

                                </div>
                                <div style={{ backgroundColor: clear.length === 0 ? `transparent` : `#${color[2]}` }} className="glass-top-middle-three">

                                </div>
                                <div style={{ backgroundColor: clear.length === 0 ? `transparent` : `#${color[1]}` }} className="glass-bottom-middle-three">

                                </div>
                                <div style={{ backgroundColor: clear.length === 0 ? `transparent` : `#${color[0]}` }} className="glass-bottom-three">

                                </div>
                            </div>
                        </div>
                        : props.smallCup ? shake ? <div class="loader"></div> :
                            <div className="glass-two">
                                <div className="glass-wrapper">
                                    <div style={{ backgroundColor: clear.length === 0 ? `transparent` : `#${color[1]}` }} className="glass-top-two">

                                    </div>
                                    <div style={{ backgroundColor: clear.length === 0 ? `transparent` : `#${color[0]}` }} className="glass-bottom-two">

                                    </div>
                                </div>
                            </div>
                            : props.mediumCup ? shake ? <div class="loader"></div> :
                                <div className="glass-one">
                                    <div className="glass-wrapper">
                                        <div style={{ backgroundColor: clear.length === 0 ? `transparent` : `#${color[2]}` }} className="glass-top">

                                        </div>
                                        <div style={{ backgroundColor: clear.length === 0 ? `transparent` : `#${color[1]}` }} className="glass-middle">

                                        </div>
                                        <div style={{ backgroundColor: clear.length === 0 ? `transparent` : `#${color[0]}` }} className="glass-bottom">

                                        </div>
                                    </div>
                                </div>
                                : null
                }


            </React.Fragment>


        )

    } else if (thank) {
        return (
            <h1 className="thanks">Thank you for buying!!!</h1>
        )
    }

}
