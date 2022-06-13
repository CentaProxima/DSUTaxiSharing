import React from "react";
import { TaxiWrapper } from "..";
import { TaxiContainer } from "../../containers";

const TaxiList = ({list}) => {
    const taxiList = list.map(
        (obj) => (
            <TaxiContainer
                taxi={obj}
                key={obj.id}
            />
        )
    )

    return (
        <TaxiWrapper>
            {taxiList}
        </TaxiWrapper>
    )
}

export default TaxiList;