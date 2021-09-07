import Dashboard from "../containers/Dashboard";
import CardsContainer from "../containers/Home/CardsContainer";

export default function Home() {
  return (
    <div>
      <Dashboard menu={"home"}>
        <CardsContainer />
      </Dashboard>
    </div>
  );
}
