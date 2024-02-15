import { AiFillDashboard } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { CiViewTimeline } from "react-icons/ci";
import { RiContactsBook2Line } from "react-icons/ri";
import { RxBackpack } from "react-icons/rx";
import { TiMessages } from "react-icons/ti";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // const pages = [];

  return (
    <aside className="sidebar">
      <nav className="menu">
        <button className="menu-btn" type="button">
          <MdOutlineClose className="menu-btn-icon" />
        </button>

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
            <Link className="menu-link current">
              <RiContactsBook2Line className="menu-icon" /> Contacts
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link current">
              <RxBackpack className="menu-icon" /> Companies
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link current">
              <TiMessages className="menu-icon" /> Message
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link current">
              <TbReportSearch className="menu-icon" /> Report
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
