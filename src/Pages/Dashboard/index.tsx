import { TelaDashboard } from "./style";
import ButtonSubmit from "../../Components/Button";
import { useAuth } from "../../Provider/Auth";

const Dashboard = () => {
  const { Logout } = useAuth();
  return (
    <>
      <TelaDashboard>
        <ButtonSubmit name="Logout" onClick={Logout} />
      </TelaDashboard>
    </>
  );
};

export default Dashboard;
