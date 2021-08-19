import Dashboard from "../containers/Dashboard";
import UsersData from "../containers/Users";

const Users = () => {
  return (
    <div>
      <Dashboard menu={"users"}>
        <UsersData />
      </Dashboard>
    </div>
  );
};

export default Users;
