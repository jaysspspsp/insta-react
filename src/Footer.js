import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import "./css/footer.css";
import { Avatar } from '@material-ui/core';
import {
    BrowserRouter as Link
  } from "react-router-dom";
function Footer() {
    return (
        <div className="footer">
            <div className="icons">

                <Link to="/"><HomeIcon className="icon"/></Link>
                <Link to=""><SearchIcon className="icon"/></Link>
                <Link to="/add"><AddIcon className="icon"/></Link>
                <Link to=""><Avatar className="icon"/></Link>
            </div>
        </div>
    )
}

export default Footer
