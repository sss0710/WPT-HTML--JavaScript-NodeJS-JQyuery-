import React from 'react'
import GoodEvening from './GoodEvening';


function HelloWorld() {

const returnDataHandler = (inputGreetData) => {
    const greet = {...inputGreetData}
}

    return (
        <div>
            <GoodEvening onGreetings = {returnDataHandler}/>    
            <h2>{inputGreetData}</h2>
            <h3>Welcome to React</h3>
        </div>
    )
}

export default HelloWorld
