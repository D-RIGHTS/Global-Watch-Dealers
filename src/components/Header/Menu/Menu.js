import React from "react";
import "./styles.scss";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faEnvelope, faShoppingCart} from "@fortawesome/free-solid-svg-icons";


function Menu () {
    return (
        <div className="DefaultTag">
            <div className="MenuContainer">
                <div className="Logo">Global Watch Dealer</div>
                    <hr />
                        <div className="MenuDiv">
                            <ul className="MenuUl">
                                 <li><Link to="/Home">Home</Link></li>
                                 <li><Link to="/Blog">Blog</Link></li>
                                 <li><Link to="/Shop">Shop</Link></li>
                                 <li><Link to="/BookOnline">Book Online</Link></li>
                                 <li><Link to="/Plans">Plans & Pricing</Link></li>
                                 <li><Link to="/Menus">Menus</Link></li>
                                 <li><Link to="/Orders">Orders</Link></li>
                                 <li><Link to="/Members">Members</Link></li>
                                 <li><Link to="/Groups">Groups</Link></li>
                                 <li><Link to="/Forum">Forum</Link></li>
                            </ul>
                            <div className="FontAwe">
                                <div className="Cart"><FontAwesomeIcon icon={faShoppingCart} /></div>
                                <div className="Bell"><FontAwesomeIcon icon={faBell} /></div>
                                <div className="Envelope"><FontAwesomeIcon icon={faEnvelope} /></div>
                            </div>

                        </div>
            </div>
        </div>
    )
}

export default Menu;