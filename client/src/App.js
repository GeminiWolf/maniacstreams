import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	useLocation,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/nav.jsx";
import Trending from "./pages/trending/trending";
import Profile from "./pages/profile/profile.jsx";
import Series from "./pages/series/series.jsx";
import Watching from "./pages/watching/watching.jsx";
import Movies from "./pages/movies/movies";
import Search from "./pages/search/search";

import axios from "axios";

class App extends Component {
	constructor() {
		super();
		this.state = {
			isloaded: false,
			shows: [],
			searchRes: false,
			term: "",
			msg: "",
			searched: "",
		};
		this.apikey = process.env.REACT_APP_MOVIEAPI;
	}

	componentDidMount = () => {
		axios.get("/api/trending").then((res) => {
			console.log("trending", res.data);
			this.setState({
				isloaded: true,
				shows: res.data,
			});
		});
	};

	// handleChange = (e) => {
	//   console.log(e.target.value)
	//   this.setState({
	//     searched: e.target.value
	//   })
	// }

	// handleSubmit = (e) => {
	//   e.preventDefault();
	//   // this.setState({
	//   //   term: e.target.value
	//   // })
	//   console.log(this.state.searched)
	//   // return <Redirect to='/search' />
	//   props.his
	// }

	render() {
		const { isloaded, shows, searched } = this.state;
		return (
			<div className="App">
				<Router>
					<Nav
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
					/>
					<div className="content">
						<Switch>
							<Route
								exact
								path={"/"}
								component={() => <Trending loaded={isloaded} shows={shows} />}
							/>
							<Route path={"/profile"} component={Profile} />
							<Route path={"/movies"} component={Movies} />
							<Route path={"/series"} component={Series} />
							<Route path={"/watching/:type/:id"} component={Watching} />
							<Route path={"/search/:search"} component={() => <Search />} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
