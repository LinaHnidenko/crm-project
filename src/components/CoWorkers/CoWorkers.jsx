import { IoMdArrowDropdown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { GrRefresh } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";

const CoWorkers = () => {
  const workers = [
    {
      name: "Andrew Mike",
      position: "Developer",
      since: "2013",
    },
    {
      name: "Ann Bleets",
      position: "Manager",
      since: "2014",
    },
    {
      name: "Dan Sam",
      position: "Analyst",
      since: "2018",
    },
    {
      name: "Mary Smith",
      position: "Director",
      since: "2021",
    },
    {
      name: "Erik Math",
      position: "Engineer",
      since: "2019",
    },
    {
      name: "Alex Miss",
      position: "DevOps",
      since: "2014",
    },
    {
      name: "Alice Morthy",
      position: "Manager",
      since: "2021",
    },
    {
      name: "Kate Smith",
      position: "Assistant",
      since: "2022",
    },
  ];

  return (
    <section className="co-workers">
      <div className="co-workers-wrapper">
        <h2 className="co-workers-title">
          <span>Co-workers</span> | Marketing department
        </h2>
        {/* Mobile */}
        <div className="co-workers-container">
          {workers.map(({ name, position, since }) => (
            <details className="co-workers-details" key={name}>
              <summary className="co-workers-data">
                <div className="details-left">
                  <IoMdArrowDropdown className="co-worker-icon" />

                  <div className="co-workers-bio">
                    <RxAvatar className="thumb" />
                    <p className="co-workers-caption">{name}</p>
                  </div>
                </div>

                <div className="co-workers-controls">
                  <button className="controls-btn ">
                    <GrRefresh className="controls-btn-icon success" />
                  </button>
                  <button className="controls-btn">
                    <MdOutlineClose className="controls-btn-icon error" />
                  </button>
                </div>
              </summary>

              <div className="co-workers-info">
                <h3 className="co-workers-position">Job Position</h3>
                <p>{position}</p>
                <h3 className="co-workers-accept">Since</h3>
                <p>{since}</p>
              </div>
            </details>
          ))}
          {/* For Tablet and Desktop */}
          <table className="co-workers-table">
            <caption className="visually-hidden">Co-workers info</caption>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Job Position</th>
                <th>Since</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {workers.map(({ name, position, since }) => (
                <tr key={name}>
                  <td>
                    <RxAvatar className="thumb" />
                  </td>
                  <td>{name}</td>
                  <td>{position}</td>
                  <td>{since}</td>
                  <td>
                    <div className="co-workers-controls">
                      <button className="controls-btn">
                        <GrRefresh className="controls-btn-icon success" />
                      </button>
                      <button className="controls-btn">
                        <MdOutlineClose className="controls-btn-icon close" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Board */}
      <ul className="co-workers-board board">
        <li className="board-item">
          <div className="board-left">
            <h3 className="board-caption">Sent benefit review by Sunday</h3>
            <p className="board-details">
              Due date: <time>December 23, 2023</time>
            </p>
            <div className="board-coworker person">
              <div className="person-thumb">
                <RxAvatar className="person-avatar" />
              </div>
              <p className="person-caption">George Fields</p>
            </div>
          </div>
          <div className="board-right">
            <p className="board-tag">Warning</p>
            <p className="badge-warning">Ending Soon</p>
          </div>
        </li>
        <li className="board-item">
          <div className="board-left">
            <h3 className="board-caption">Sent benefit review by Sunday</h3>
            <p className="board-details">
              Due date: <time>December 23, 2023</time>
            </p>
            <div className="board-coworker person">
              <div className="person-thumb">
                <RxAvatar className="person-avatar" />
              </div>
              <p className="person-caption">Amanda Pitt</p>
            </div>
          </div>
          <div className="board-right">
            <p className="board-tag">Call</p>
            <p className="badge-danger">Ended</p>
          </div>
        </li>
        <li className="board-item">
          <div className="board-left">
            <h3 className="board-caption">Sent benefit review by Sunday</h3>
            <p className="board-details">
              Due date: <time>December 23, 2023</time>
            </p>
            <div className="board-coworker person">
              <div className="person-thumb">
                <RxAvatar className="person-avatar" />
              </div>
              <p className="person-caption">Erik Math</p>
            </div>
          </div>
          <div className="board-right">
            <p className="board-tag">Reminder</p>
            <p className="badge-success">Completed</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default CoWorkers;
