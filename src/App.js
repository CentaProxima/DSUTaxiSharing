import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main, Detail, Search, NotFound, NewRequest, Delete } from './routes';

class App extends Component{
	render() {
		return (
			<Router>
				<Routes>
					<Route path="/" element={<Main />}/>
					<Route path="/newreq" element={<NewRequest />}/>
					<Route path="/del/:user_id" element={<Delete />}/>					
					<Route path="/detail/:user_id" element={<Detail />}/>
					<Route path="/search" element={<Search />} />
					<Route path="*" element={<NotFound status={404}/>}/>
				</Routes>
			</Router>
		);
	}
}

export default App;
