import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'

function Header(){
    let navigate = useNavigate();

    const clickedLogo = () => {
        navigate("/");
    }
    return (
        <div className="Header">
            <img src={'/dsu_logo.png'} style={{
                width: 60,
                height: 60,
                float: "left",
                marginTop: 20,
                marginLeft: 10
            }} alt="" onClick={clickedLogo}/>
            <p>동서대학교 공유 택시 서비스</p>
        </div>
    )
}

export default Header;