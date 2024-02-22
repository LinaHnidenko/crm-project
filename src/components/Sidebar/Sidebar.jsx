import { AiFillDashboard } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { CiViewTimeline } from "react-icons/ci";
import { RiContactsBook2Line } from "react-icons/ri";
import { RxBackpack } from "react-icons/rx";
import { TiMessages } from "react-icons/ti";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = ({ isLarge, setIsOpenBurger }) => {
  return (
    <aside className="sidebar is-open">
      <nav className="menu">
        {!isLarge && (
          <button
            className="menu-btn"
            type="button"
            onClick={() => setIsOpenBurger(false)}
          >
            <MdOutlineClose className="menu-btn-icon" />
          </button>
        )}

        <Link to="/" className="logo">
          <AiFillDashboard className="logo-icon" />
          Speed CRM
        </Link>

        <ul className="menu-list">
          <li className="menu-item">
            <Link className="menu-link current">
              <CiViewTimeline className="menu-icon" />
              Overview
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link ">
              <RiContactsBook2Line className="menu-icon" /> Contacts
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link ">
              <RxBackpack className="menu-icon" /> Companies
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link ">
              <TiMessages className="menu-icon" /> Message
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link ">
              <TbReportSearch className="menu-icon" /> Report
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
