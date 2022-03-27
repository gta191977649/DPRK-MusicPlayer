import logo from './logo.svg';
import './App.css';
import './Sidebar.css';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import Home from "./routes/home";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [library, setLibrary] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:3001/api/lib")
		.then(res=>{
			if(res.data) {
				setLibrary(res.data)
			}
		})
	},[])

	
	return (
		<div className="App">
		<BrowserRouter>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2 d-flex flex-column flex-shrink-0 p-3 bg-light box-shadow" style={{"width": "280px","height":"100vh"}}>
						<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
							<span className="fs-4">Sparrow Music Player</span>
						</a>
						<hr/>
						<ul className="nav nav-pills flex-column mb-auto">
							<li className="nav-item">
								<a href="#" className="nav-link active" aria-current="page">
									Home
								</a>
							</li>
							<li>
								<a href="#" className="nav-link">
									Music
								</a>
							</li>
							<li>
								<a href="#" className="nav-link">
									Folder
								</a>
							</li>
						
						</ul>
					</div>
					<div className="col-md-10">
						<div className="main">
							<Routes>
							<Route path="/" element={<Home library={library}/>} />

							</Routes>
						</div>
						
					</div>
				</div>
				
			</div>
		</BrowserRouter>
		</div>
	);
}

export default App;
