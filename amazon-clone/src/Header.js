import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import amazonlogo from "./images/amazon_logo2.jpg";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo" src={amazonlogo} alt=""
        />
      </Link>

      {/* search box */}
      <div className="header_search" >
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* 3 Links */}
      <div className="header_nav">
        {/* 1st link */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionlineOne"  > Hello anik</span>
            <span className="header_optionline2"> Sing In</span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionlineOne"> Returns </span>
            <span className="header_optionline2"> & Orders</span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionlineOne"> Your </span>
            <span className="header_optionline2"> prime </span>
          </div>
        </Link>
      </div>

      {/* 4th link */}
      <Link to = "/checkout" className ="header_link">
        <div className ="header_optionBasket">
          <ShoppingBasketIcon />
          <span className ="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
      </Link>

    </nav>
  );
}

export default Header;
