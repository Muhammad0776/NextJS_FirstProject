import Dashboard from "../containers/Dashboard"
import CardsContainer from "../containers/Home/CardsContainer"

export default function Home() {
  return (
    <div>
      <Dashboard menu={"users"}>
        <CardsContainer />
      </Dashboard>
    </div>
  )
}
