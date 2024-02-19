import { RxHamburgerMenu } from "react-icons/rx";
import { ImSearch } from "react-icons/im";
import { FaRegBell } from "react-icons/fa";
import { useState } from "react";

const Header = ({ isOpenBurger, setIsOpenBurger, isLarge }) => {
  return (
    <header className="header">
      {/* burger */}
      {!isLarge && !isOpenBurger && (
        <button className="menu-btn" onClick={() => setIsOpenBurger(true)}>
          <RxHamburgerMenu className="menu-btn-icon" />
          Overview
        </button>
      )}

      <label className="search-field">
        <ImSearch className="search-icon" />
        <input
          type="search"
          className="search-input"
          placeholder="Search here..."
        />
      </label>

      <button className="notification-btn">
        <FaRegBell className="notification-icon" />
      </button>
    </header>
  );
};

export default Header;
