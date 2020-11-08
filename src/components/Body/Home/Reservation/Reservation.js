import React from "react";
import "./styles.scss";

function Reservation() {
    return (
        <div className="Rez">
            <div className="Make">Make a Reservation</div>
            <form>
                <label className="EntNam">
                    <input type="name" placeholder="Enter Name"/>
                </label>

                <label className="EntNam">
                    <input type="email" placeholder="Email" required=""/>
                </label>

                <label>
                   <input type="date" name="name" placeholder="Select a Date"/>
                </label>


                <label className="EntNam">
                    <input type="submit"/>
                </label>
            </form>
        </div>
    )
}

export default Reservation;