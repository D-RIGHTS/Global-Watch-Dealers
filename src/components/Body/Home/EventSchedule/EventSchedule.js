import React from "react";
import "./styles.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons";

function EventSchedule () {
    return (
        <div className="EventScheduleCont">
            <p className="Name">Global Watch Dealer</p><br />
                 <div className="NameAnEvent">
                      <div className="UpComing">Up Coming Events & Dates</div>
                         <div className="SchedIcons">
                             <div className="Calender"><FontAwesomeIcon icon={faCalendar} /></div>
                             <div className="EnvIcon"><FontAwesomeIcon icon={faEnvelopeOpenText} /></div>
                         </div>
                 </div>
                <div className="Twe">
                    <div className="Zwa">
                        <p className="Zu">12 Nov</p>
                        <p className="Zus">Amphi-Theatre</p>
                        <p className="Zus">Bulawayo, ZWE</p>
                    </div>
                    <div className="Not">
                        Notify Me
                    </div>
                </div>

            <div className="Twe">
                <div className="Zwa">
                    <p className="Zu">15 Nov</p>
                    <p className="Zus">Show Grounds</p>
                    <p className="Zus">Harare, ZWE</p>
                </div>
                <div className="Not">
                    Notify Me
                </div>
            </div>

            <div className="Twe">
                <div className="Zwa">
                    <p className="Zu">19 Nov</p>
                    <p className="Zus">Park Station</p>
                    <p className="Zus">JHB, South Africa</p>
                </div>
                <div className="Not">
                    Notify Me
                </div>
            </div>

            <div className="Twe">
                <div className="Zwa">
                    <p className="Zu">22 Nov</p>
                    <p className="Zus">Music  Theatre</p>
                    <p className="Zus">Nairobi, Kenya</p>
                </div>
                <div className="Not">
                    Notify Me
                </div>
            </div>

            <div className="Twe">
                <div className="Zwa">
                    <p className="Zu">25 Nov</p>
                    <p className="Zus">Partizo Square</p>
                    <p className="Zus">Paris, France</p>
                </div>
                <div className="Not">
                    Notify Me
                </div>
            </div>
        </div>


    )
}

export default EventSchedule;