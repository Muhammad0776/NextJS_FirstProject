import Dashboard from "../containers/Dashboard"
import TodosData from "../containers/Todos/TodosData"

const Todos = () => {
    return (
        <div>
            <Dashboard menu={"todos"}>
                <TodosData />
            </Dashboard>
        </div>
    )
}

export default Todos