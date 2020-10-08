// Base
import React from 'react';
import { GetData } from './Tools';

// Materials

// CSS
import './index.css';

function App() {
    let requestType = 0;
    let requestID = 0;
    
    var requestedData = GetData(requestType, requestID);
    if (requestedData === "loading...") return <p>Loading...</p>;
    if (requestedData === "error!") return <p>Error!</p>;

    return (
        <React.Fragment>
            <h1> Movie List </h1>
            <div className="container">
                <p> {requestedData[0]} </p>
                <p> {requestedData[1]} </p>
            </div>
        </React.Fragment>

    );
}

export default App;