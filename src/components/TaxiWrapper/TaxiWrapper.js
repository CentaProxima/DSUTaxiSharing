import React from "react";
import './TaxiWrapper.css';

const TaxiWrapper = ({children}) => {
    return (
        <div className="taxi-wrap">
            {children}
        </div>
    )
}

export default TaxiWrapper;