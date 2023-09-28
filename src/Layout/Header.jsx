import React from "react";
import NavAnchor from "../Components/SharedComponents/NavAnchor";
import Button from "../Components/SharedComponents/Button";
const Header = ({ onClickFav, onClickDark }) => {
  return (
    <header className="w-screen pt-5 pb-5 bg-bgDefaultLight dark:bg-bgDefaultDark flex justify-between items-center shadow-md px-[60px]">
      <NavAnchor>Web Topics</NavAnchor>
      <nav className="flex gap-[5px]">
        <Button buttonTheme="default" onClickDarkMode={onClickDark}>
          <ion-icon name="moon-outline"></ion-icon>Dark Mode
        </Button>
        <Button buttonTheme="default" onClickFav={onClickFav}>
          <ion-icon name="heart-outline"></ion-icon>Favourites
        </Button>
      </nav>
    </header>
  );
};

export default Header;
