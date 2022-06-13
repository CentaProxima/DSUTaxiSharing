import React, { Component } from "react";
import * as api from '../../AjaxAPI';

class NewRequest extends Component{
    clickedSubmit = ()=>{
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const location = document.getElementById('location').value;
        const destination = document.getElementById('destination').value;

        api.postUser(name, phone, password, location, destination).then(() => {                        
            alert("요청이 정상적으로 등록되었습니다.");
            window.close()
        }).catch(() => {            
            alert("요청 등록에 실패했습니다.");
            window.close()
        })
    }

    render(){
        document.body.style.backgroundColor = '#A0A0A0';
        return (
            <div style={{display: "block", textAlign: 'center'}}>
                <div style={{backgroundColor: '#E0E0E0', padding: '15px'}}>
                    이름: <input type="text" id="name" style={{marginTop: '10px'}}/><br />
                    전화번호: <input type="text" id="phone" style={{marginTop: '10px'}}/><br />
                    비밀번호: <input type="text" id="password" style={{marginTop: '10px'}}/><br />
                    현재 위치: <input type="text" id="location" style={{marginTop: '10px'}}/><br />
                    목적지: <input type="text" id="destination" style={{marginTop: '10px'}}/><br />
                <button onClick={this.clickedSubmit} style={{marginTop: '10px'}}>제출</button>
                </div>                
            </div>
        );
    }
}

export default NewRequest;