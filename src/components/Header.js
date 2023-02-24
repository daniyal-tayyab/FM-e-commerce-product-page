import React, { useState } from "react";

import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { ReactComponent as MenuIcon } from "../images/icon-menu.svg";
import DrawerMenu from "./DrawerMenu";
import CartIcon from "./CartIcon";
import CartDropDown from "./CartDropDown";

const navList = ["Collections", "Men", "Women", "About", "Contact"];

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleCartIcon = () => setIsCartOpen(!isCartOpen);

  return (
    <header className="header">
      <DrawerMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <MenuIcon className="header__icon-menu" onClick={toggleDrawer} />
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
        <div className="header__right__cart">
          <CartIcon toggleCartIcon={toggleCartIcon} />
        </div>
        <img className="header__right__avatar" src={avatar} alt="avatar" />
      </div>
      {isCartOpen && <CartDropDown />}
    </header>
  );
};

export default Header;
