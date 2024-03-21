import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      {/* NAVBAR */}
      <section className="align-element">
        <Outlet />
      </section>
    </>
  );
};
export default Dashboard;
