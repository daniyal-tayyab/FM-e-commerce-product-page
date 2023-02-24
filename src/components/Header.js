import React, { useState } from "react";

import logo from "../images/logo.svg";
import cartIcon from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import iconMenu from "../images/icon-menu.svg";
import DrawerMenu from "./DrawerMenu";

const navList = ["Collections", "Men", "Women", "About", "Contact"];

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    console.log(!isDrawerOpen);
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="header">
      <DrawerMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <img
        className="header__icon-menu"
        src={iconMenu}
        alt="menu"
        onClick={toggleDrawer}
      />
      <img className="header__logo" src={logo} alt="logo" />
      <nav className="header__nav">
        <ul className="header__nav__list">
          {navList.map((item, index) => (
            <li className="header__nav__list__item" key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header__right">
        <img className="header__right__cart" src={cartIcon} alt="cart-icon" />
        <img className="header__right__avatar" src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
