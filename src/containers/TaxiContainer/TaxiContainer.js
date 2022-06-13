import React from "react";
import './TaxiContainer.css'
import moment from "moment";

const openPopup = (obj)=>{    
    window.open('/detail/'+obj.id,'_blank', 'width=250,height=250,resizable=no')
}

const TaxiContainer = ({taxi})=>(
    <div id={taxi.id} className="taxi-container" onClick={()=>{openPopup(taxi)}}>
        <p>요청인: {taxi.name}</p>
        <p>현재 위치: {taxi.location}</p>
        <p>목적지: {taxi.dest}</p>
        <p>요청 시간: {moment(taxi.create_at).format('YYYY-MM-DD HH:mm:ss')}</p>
    </div>
)

export default TaxiContainer;