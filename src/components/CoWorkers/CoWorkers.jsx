import { HiOutlinePlusCircle } from "react-icons/hi";
import { HiOutlineMinusCircle } from "react-icons/hi";
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
  ];

  return (
    <section className="co-workers">
      <div className="co-workers-wrapper">
        <h2 className="co-workers-title">
          <span>Co-workers</span>| Marketing department
        </h2>

        <div className="co-workers-container">
          {workers.map(({ name, position, since }) => (
            <details className="co-workers-details" key={name}>
              <summary className="co-workers-data">
                <HiOutlinePlusCircle className="co-worker-icon plus" />
                <HiOutlineMinusCircle className="co-worker-icon minus" />
                <div className="co-workers-bio">
                  <div className="thumb">
                    <RxAvatar />
                  </div>
                  <p className="co-workers-caption">{name}</p>
                </div>

                <div className="co-workers-controls">
                  <button className="controls-btn">
                    <GrRefresh className="controls-btn-icon success" />
                  </button>
                  <button className="controls-btn">
                    <MdOutlineClose className="controls-btn-icon close" />
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
                    <div className="thumb">
                      <RxAvatar />
                    </div>
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
    </section>
  );
};

export default CoWorkers;
