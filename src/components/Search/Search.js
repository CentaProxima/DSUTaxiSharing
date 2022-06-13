import React, { Component } from "react";
import './Search.css';

class Search extends Component{
    clickedNewRequest = ()=>{
        window.open('/newreq', '_blank', 'width=500px,height=200px')
    }

    render(){
        return (
            <div className="outer-search">
                <div className="inner-search" style={{marginTop: 30}}>
                    <form action="/search" method="GET">
                        <select name="type">
                            <option value="">선택</option>
                            <option value="name">이름</option>
                            <option value="source">출발지</option>
                            <option value="dest">목적지</option>
                        </select>
                        <input type="text" name="query" placeholder="Search" style={{marginLeft: '10px'}}/>
                        <input type="submit" value="검색" style={{marginLeft: '10px'}}/>                        
                    </form>
                    <button onClick={this.clickedNewRequest} style={{marginLeft: '75px', marginTop: '30px', height: '50px', width: '150px'}}>공유택시 요청하기</button>
                </div>
            </div>
        );
    }
}

export default Search;