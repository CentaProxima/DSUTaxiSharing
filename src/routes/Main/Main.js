import React, { Component } from "react";
import * as api from '../../AjaxAPI'
import { Header, TaxiList, Search } from '../../components';
import './Main.css';

class Main extends Component{
	state = {
		rows: [],
		next: 0,
		loading: false,
		fetching: false
	}

	componentDidMount(){
		this.ajaxList()
		window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll)
	}

	ajaxList = async () => {
		this.setState({loading: false})

		let resp = await api.getList(0)
		
		this.setState({
			rows: resp.data.content.rows,			
			next: resp.data.content.n_offset,
			total: resp.data.content.total
		})

		this.setState({loading: true})		
	}

	ajaxMoreList = async () => {		
		if(this.state.n_offset >= this.state.total)
			return

		this.setState({fetching: true})

		await api.getList(this.state.next).then(res => {
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

	handleScroll = () => {		
		const scrollHeight = document.documentElement.scrollHeight;
  		const scrollTop = document.documentElement.scrollTop;
  		const clientHeight = document.documentElement.clientHeight;
  		if (scrollTop + clientHeight >= scrollHeight && this.state.fetching === false) {
    		// 페이지 끝에 도달하면 추가 데이터를 받아온다
    		this.ajaxMoreList();
  		}
	}

	render(){
		return (			
			<div>
				<Header />
				<Search />
				<TaxiList list={this.state.rows}/>				
			</div>
		);
	}
}

export default Main;