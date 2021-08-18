import React from 'react'
import { Fade } from "react-awesome-reveal";
import CardsContainerWrapper from './CardsContainerWrapper'

const CardsContainer = () => {
    return (
        <CardsContainerWrapper>
            <h1>Cards</h1>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <Fade className="p-4 rounded shadow">
                        <h2>Users</h2>
                    </Fade>
                </div>
                <div className="col-sm-6 col-md-4">
                    <Fade className="p-4 rounded shadow">
                        <h2>Todos</h2>
                    </Fade>
                </div>
                <div className="col-sm-6 col-md-4">
                    <Fade className="p-4 rounded shadow">
                        <h2>Albums</h2>
                    </Fade>
                </div>
            </div>
        </CardsContainerWrapper>
    )
}

export default CardsContainer