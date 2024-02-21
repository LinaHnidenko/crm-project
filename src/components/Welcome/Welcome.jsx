import { FaPlus } from "react-icons/fa6";

const Welcome = () => {
  return (
    <section className="welcome">
      <h1 className="page-title">
        <span className="page-title-accent">Hi, Lina</span> Welcome into Speed
        CRM Dashboard
      </h1>

      <button className="welcome-btn btn btn--primary">
        <FaPlus className="welcome-icon btn-icon" />
        <span className="btn-inner">Primary normal</span>
      </button>
    </section>
  );
};

export default Welcome;
