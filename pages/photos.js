import Dashboard from "../containers/Dashboard"
import PhotosData from "../containers/Photos"

const Photos = () => {
    return (
        <div>
            <Dashboard menu={"photos"}>
                <Photos />
            </Dashboard>
        </div>
    )
}

export default Photos