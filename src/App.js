import React from 'react'
import './App.css';
import {Navbar} from './component/Navbar'
import { Home_Page } from './component/Home';
import { Wishlist_Page } from './component/Wishlist';
import { Route,Routes} from "react-router-dom"

import {Globalprovider} from './context/Globalstates'
function App() {
  return (
    <Globalprovider>
    <div className="App">
      <Navbar />
        <Routes>  
          <Route path="" element = {<Home_Page/>} /> 
          <Route path="/component/Wishlist" element = {<Wishlist_Page/>} />
      </Routes>

    </div>
    </Globalprovider>
  );
}

export default App;
