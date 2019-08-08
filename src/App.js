import React, { Component } from "react"

import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import MainPage from "./pages/MainPage"

class App extends Component {
	render = () => {
		console.info(">> App")

		console.log("Loaded redux state in App is:")
		// console.log(state)

		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={MainPage} exact />
					{/* <Route path="/cart" component={CartPage} exact /> */}
				</Switch>
			</BrowserRouter>
		)
	}
}

// export default React.memo(App)
export default App
