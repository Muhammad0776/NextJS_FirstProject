import Dashboard from "../containers/Dashboard";
import AlbumsData from "../containers/Albums";

const Albums = () => {
  return (
    <div>
      <Dashboard menu={"albums"}>
        <AlbumsData />
      </Dashboard>
    </div>
  );
};

export default Albums;
