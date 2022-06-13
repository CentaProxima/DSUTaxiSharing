import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { getSearchResult } from '../../AjaxAPI';
import './Detail.css'

class Detail extends Component{
    state = {
        data: [],
        loading: false
    }

    async componentDidMount(){
        this.setState({loading: false})

        const user_id = this.props.params.user_id;        
        const res = await getSearchResult(user_id, 'user_id', 0, 1)        
        this.setState({
            data: res.data.content.rows
        })        

        this.setState({loading: true})
    }

    render(){
        document.body.style="background-color: #C0C0C0"        
        if(this.state.loading){
            return (
                <DetailView obj={this.state.data[0]} />
            )
        }        
    }
}

function clickedOk(){
    window.close()
}

function clickedDelete(obj){
    window.open('/del/'+obj.id, '_blank', 'width=350px, height=50px')
}

const DetailView = ({obj})=>{    
    return (
        <div id="detail">
            <p>이름: {obj.name}</p>
            <p>연락처: {obj.phone_number}</p>
            <button onClick={()=>{clickedDelete(obj)}}>삭제</button>
            <button onClick={clickedOk} style={{marginLeft: '10px'}}>확인</button>
        </div>
    )
}

export default (props) => (
    <Detail
    params={useParams()}
    />
);