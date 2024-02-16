import { MdOutlineDone } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const Tasks = () => {
  const tasks = [
    {
      heading: "Update the documentation",
      decs: "Dwuamish Head, Seattle, WA",
      time: "8:47 AM",
    },
    {
      heading: "GDPR Compliance",
      decs: "Alki Ave SW, Seattle, WA",
      time: "12:29 PM",
    },
    {
      heading: "Export the processed filesn",
      decs: "Capitol Hill, Seattle, WA",
      time: "12:34 AM",
    },
    {
      heading: "Release v2.0.0",
      decs: "Ra Ave SW, WA",
      time: "11:19 AM",
    },
    {
      heading: "Solve the issues",
      decs: "Capitol Hill, LA",
      time: "12:34 AM",
    },
  ];

  return (
    <section className="tasks">
      <h2 className="tasks-title">
        <span>Tasks (5)</span> | Today
      </h2>
      <ul className="tasks-list">
        {tasks.map(({ heading, decs, time }) => (
          <li className="tasks-item" key={heading}>
            <label className="tasks-checkbox">
              <input
                type="checkbox"
                className="tasks-input visually-hidden"
                value="unfinished"
              />
              <MdOutlineDone />
            </label>

            <div className="tasks-info">
              <h3 className="tasks-heading">{heading}</h3>
              <p className="tasks-decs">
                {decs} <time>{time}</time>
              </p>
            </div>
            <button className="tasks-btn">
              <IoSettingsOutline className="tasks-btn-icon" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
