import React from "react";

import { Drawer } from "@mui/material";
import { ReactComponent as CloseIcon } from "../images/icon-close.svg";

const navList = ["Collections", "Men", "Women", "About", "Contact"];

const DrawerMenu = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
      <CloseIcon className="icon-close" onClick={toggleDrawer} />
      <div className="drawer">
        <nav className="drawer__nav">
          <ul className="drawer__nav__list">
            {navList.map((item, index) => (
              <li className="drawer__nav__list__item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
