import React from "react";
import "./styles.scss";
import WatchListPrev from "./WatchListPrev/WatchListPrev";
import WorkingHours from "./WorkingHours/WorkingHours";
import Video from "./WorkingHours/Video/Video";
import UpComingEvents from "./UpComingEvents/UpComingEvents";
import EventSchedule from "./EventSchedule/EventSchedule";
import Reservation from "./Reservation/Reservation";

function Home () {
    return(
        <div className="ForStarter">
            <div className="ContainerUnleash">
                <div className="Unleash">
                    <p className="GWD">Global Watch Dealer</p>
                    <br />
                    <p className="Imagination">Unleash Your Imagination</p>
                    <br />
                    <div className="Learn">Learn More</div>
                </div>
            </div>
                <WatchListPrev />
                <WorkingHours />
                <Video />
                <UpComingEvents />
                <EventSchedule />
                <Reservation />

        </div>
    )
}

export default Home;