import React from "react";
import "./styles.scss";
import ReactPlayer from "react-player";

function Video () {
    return (
        <div className="Vidz">
            <div className="HomeVid">
                 <ReactPlayer
                     width="800px"
                     controls url="https://www.youtube.com/watch?v=625KnrabXdI" />
                 <div className="Des">
                     <p className="DanName">Audemars Piguet Design </p><br />
                     <p className="DanName">AP has for years, been the most subtle yet aggressive timepiece every produced. Want one? Drop in at the Global Watch Dealer Store and secure yourself a timepiece worth purchasing.</p>
                </div>
            </div>
            <div className="Aud">
                <img src="/Images/Audemars.jpg" alt=""/>
                <p className="LearnButt">Learn More</p>
            </div>
        </div>
    )
}

export default Video;