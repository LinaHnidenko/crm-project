import { IoPersonCircle } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { GoDash } from "react-icons/go";

const Reports = () => {
  const reports = [
    {
      worker: "Ibnu Mas’ud",
      progress: "89",
      status: "up",
    },
    {
      worker: "Kelen Indah",
      progress: "65",
      status: "down",
    },
    {
      worker: "Mas Indro",
      progress: "76",
      status: "dash",
    },
    {
      worker: "Geo Vanni",
      progress: "79",
      status: "up",
    },
    {
      worker: "Avian Rizk",
      progress: "78",
      status: "dash",
    },
  ];
  return (
    <section className="reports">
      <h2 className="reports-title">
        <span>Task Report</span> | Last 2 Weeks
      </h2>
      <ul className="reports-list">
        {reports.map(({ worker, progress, status }) => (
          <li className="reports-item" key={worker} data-status={status}>
            <div className="reports-staff staff">
              <IoPersonCircle className="staff-avatar" />

              <h3 className="staff-caption">{worker}</h3>
            </div>
            <progress
              className="reports-bar"
              max="100"
              value={progress}
            ></progress>
            {status === "up" && <IoIosArrowUp className="reports-icon up" />}
            {status === "down" && (
              <IoIosArrowDown className="reports-icon down" />
            )}
            {status === "dash" && <GoDash className="reports-icon dash" />}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reports;
