import { useState } from "react"

const Page404 = () => {
    const [margin, setmargin] = useState(100)

    return (
        <div className="d-flex justify-content-center align-items-center" style={{
            margin: `${margin}px`
        }}>
            <div className="border-end px-4 text-danger"><h1>404</h1></div>
            <p className="d-flex justify-content-center align-items-center ms-4 text-danger">This page could not be found</p>
        </div>
    )
}

export default Page404