import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { FavContext } from "./Contexts/FavContext";
import { ThemeContext } from "./Contexts/ThemeContext";
function App() {
  const [fav, setFav] = useState(null);
  const [theme, setTheme] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("favMenu")) || [];
    setFav(storedFav);
    localStorage.getItem("theme");
  }, []);

  useEffect(() => {
    if (localStorage.getItem("theme") == null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      }
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleFavMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const handleThemeSwitch = () => {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <FavContext.Provider value={{ fav, setFav }}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/react_tap"
                element={
                  <Home
                    onClickFav={toggleFavMenu}
                    onClickDark={handleThemeSwitch}
                    menuVisible={menuVisible}
                  />
                }
              />
              <Route
                path={`/details/:id`}
                element={
                  <Details
                    onClickFav={toggleFavMenu}
                    onClickDark={handleThemeSwitch}
                    menuVisible={menuVisible}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </FavContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
