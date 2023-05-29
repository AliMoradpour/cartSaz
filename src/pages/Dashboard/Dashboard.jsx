import DashboardMenu from "./DashboardMenu";
import Dheader from "../Dashboard/Dheader";

const Dashboard = () => {
  return (
    <>
      <Dheader />
      <div className="flex items-center">
      <DashboardMenu />
      <h2>Main Dashboard</h2>
      </div>
    </>
  );
};

export default Dashboard;
