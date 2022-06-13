import React,{ Component } from "react";
import { useParams } from "react-router-dom";
import { deleteUser } from "../../AjaxAPI";

class Delete extends Component{
    clickedDelete = ()=>{
        const password = document.getElementById('password').value;        
        deleteUser(this.props.params.user_id, password).then(res=>{
            alert('삭제하였습니다.')
            window.close()
        }).catch(err => {
            console.log(err)
            alert('삭제에 실패했습니다.')
        })
    }

    render(){
        document.body.style.backgroundColor = "#FFFFFF";
        return (
            <div style={{textAlign: 'center'}}>
                비밀번호: <input type="text" id="password"/>
                <button onClick={this.clickedDelete} style={{marginLeft: '20px'}}>삭제</button>
            </div>
        )                
    }
}

export default (props) => (
    <Delete params={useParams()}/>
)