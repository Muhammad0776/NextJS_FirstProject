import Dashboard from "../containers/Dashboard"
import PostsData from "../containers/Posts"

const Posts = () => {
    return (
        <div>
            <Dashboard menu={"posts"}>
                <Posts />
            </Dashboard>
        </div>
    )
}

export default Posts