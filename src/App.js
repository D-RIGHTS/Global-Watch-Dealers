import React from 'react';
import "./styles.scss"
import Header from "./components/Header/Header";

import {

    Route,

} from "react-router-dom";
import Blog from "./components/Header/Menu/Blog/Blog";
import Shop from "./components/Header/Menu/Shop/Shop";
import BookOnline from "./components/Header/Menu/BookOnline/BookOnline";
import Plans from "./components/Header/Menu/Plans/Plans";
import Menus from "./components/Header/Menu/Menus/Contacts";
import Orders from "./components/Header/Menu/Orders/Reviews";
import Members from "./components/Header/Menu/Members/Members";
import Groups from "./components/Header/Menu/Groups/Groups";
import Forum from "./components/Header/Menu/Forum/Forum";
import Home from "./components/Body/Home/Home";




function App() {
  return (
    <div className="App">
              <Header />
              <Route path="/Home" render={() => <Home />} />
            <Route path="/Blog" render={() =>  <Blog />} />
            <Route path="/Shop" render={() => <Shop />} />
            <Route path="/BookOnline" render={() => <BookOnline />} />
            <Route path="/Plans" render={() => <Plans />} />
            <Route path="/Menus" render={() => <Menus /> } />
            <Route path="/Orders" render={() => <Orders /> } />
            <Route path="/Members" render={() => <Members />} />
            <Route path="/Groups" render={() => <Groups />} />
            <Route path="/Forum" render={() => <Forum />} />
    </div>
  );
}

export default App;
