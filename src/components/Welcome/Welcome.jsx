import { FaPlus } from "react-icons/fa6";

const Welcome = () => {
  return (
    <section className="welcome">
      <h1 className="welcome-title">Hi, Lina</h1>
      <p className="welcome-text">Welcome into Speed CRM Dashboard</p>
      {/* maybe delete */}
      <button className="welcome-btn">
        <FaPlus className="welcome-icon" />
        Primary normal
      </button>
    </section>
  );
};

export default Welcome;
