import { IoPersonCircle } from "react-icons/io5";

const Reports = () => {
  const reports = [
    {
      worker: "Ibnu Mas’ud",
      progress: "89",
    },
    {
      worker: "Kelen Indah",
      progress: "65",
    },
    {
      worker: "Mas Indro",
      progress: "76",
    },
    {
      worker: "Geo Vanni",
      progress: "79",
    },
    {
      worker: "Avian Rizk",
      progress: "78",
    },
  ];
  return (
    <section className="reports">
      <h2 className="reports-title">
        <span>Task Report</span> | Last 2 Weeks
      </h2>
      <ul className="reports-list">
        {reports.map(({ worker, progress }) => (
          <li className="reports-item">
            <div className="reports-co-worker co-worker">
              <div className="co-worker-thumb">
                <IoPersonCircle className="co-worker-avatar" />
              </div>
              <h3 className="co-worker-caption">{worker}</h3>
            </div>
            <progress
              className="reports-bar"
              max="100"
              value={progress}
            ></progress>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reports;
