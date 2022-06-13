import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";
import { Header, TaxiList } from "../../components";
import * as api from '../../AjaxAPI'

class Search extends Component{
    state = {
        invalid: false,
        rows: [],
		next: 0,
		loading: false,
		fetching: false
    }

    ajaxSearch = async()=>{
        this.setState({loading: false})

		let resp = await api.getSearchResult(this.props.params.get('query'), this.props.params.get('type'), 0)		
		this.setState({
			rows: resp.data.content.rows,	
			next: resp.data.content.n_offset,
			total: resp.data.content.total
		})        

		this.setState({loading: true})
    }

    ajaxMoreSearch = async()=>{
        if(this.state.n_offset >= this.state.total)
			return

		this.setState({fetching: true})

		await api.getSearchResult(this.props.params.get('query'), this.props.params.get('type'), this.state.next).then(res => {
			const fetchedData = res.data.content.rows;
			const mergedData = this.state.rows.concat(...fetchedData)
			this.setState({
				rows: mergedData,
				next: res.data.content.n_offset,
				total: res.data.content.total
			})
		})

		this.setState({fetching: false})
    }

    handleScroll = ()=>{
        const scrollHeight = document.documentElement.scrollHeight;
  		const scrollTop = document.documentElement.scrollTop;
  		const clientHeight = document.documentElement.clientHeight;        
  		if (scrollTop + clientHeight >= scrollHeight && this.state.fetching === false) {
    		// 페이지 끝에 도달하면 추가 데이터를 받아온다
    		this.ajaxMoreSearch();
  		}
    }

    componentDidMount(){                
        if(this.props.params.get('type') === '' || 
            this.props.params.get('query') === '' ||
            !(
                this.props.params.get('type') === 'name' ||
                this.props.params.get('type') === 'source' ||
                this.props.params.get('type') === 'dest'
            )
        ){
            this.setState({invalid: true})
            return
        }        
        
        this.ajaxSearch()
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }

    render(){
        if(!this.state.invalid){
            document.body.style = 'background-color:#F9E076;';
            return (
                <div>
				    <Header />   
				    <TaxiList list={this.state.rows} />	
			    </div>
            )
        }else{
            return (
                <h1>Invalid Parameter Error</h1>
            )
        }
    }

}

export default ()=>{
    const [searchParams, ] = useSearchParams();

    return (
        <Search params={searchParams}/>
    )
}