import React, { Component } from "react"

import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Themer from "./components/Themer"
import MainPage from "./pages/MainPage"

class App extends Component {
	render = () => {
		console.info(">> App")

		console.log("Loaded redux state in App is:")
		// console.log(state)

		return (
			<div>
				<Themer />
				<BrowserRouter>
					<Switch>
						<Route path="/" component={MainPage} exact />
						<Route path="/cart" component={MainPage} exact />
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}

// export default React.memo(App)
export default App
