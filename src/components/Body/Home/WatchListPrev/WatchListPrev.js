import React from "react";
import "./styles.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";


function WatchListPrev () {
    return (
        <div className="WatchLine">
            <FontAwesomeIcon icon={faChevronLeft} />
            <div className="PP">
                <img src="./Images/PP.jpg" alt=""/>
                <p>Patek Philippe Geneve</p> <br />
                <p>$95 000</p>
            </div>

            <div className="Hublot">
                <img src="./Images/Hublot.jpg" alt=""/>
                <p>Hublot Big Bang jeans</p> <br />
                <p>$14 300</p>
            </div>

            <div className="VC">
                <img src="./Images/VC.jpg" alt=""/>
                <p>Vacheron Constantin Overseas</p> <br />
                <p>$4 800</p>
            </div>

            <div className="Rolex">
                <img src="./Images/Rolex.jpg" alt=""/>
                <p>Rolex Oyster Perpetual</p> <br />
                <p>$21 500</p>
            </div>

            <div className="AP">
                <img src="./Images/AP.jpg" alt=""/>
                <p>Audemars Piguet Jumbo</p> <br />
                <p>$27 500</p>
            </div>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    )
}

export default WatchListPrev;