import { RxHamburgerMenu } from "react-icons/rx";
import { ImSearch } from "react-icons/im";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      {/* burger */}
      <button className="menu-btn">
        <RxHamburgerMenu className="menu-btn-icon" />
        Overview
      </button>

      <label className="search-field">
        <ImSearch className="search-icon" />
        <input
          type="search"
          className="search-input"
          placeholder="Search here..."
        />
      </label>

      <button className="message-btn">
        <FaRegBell className="message-icon" />
      </button>
    </header>
  );
};

export default Header;
