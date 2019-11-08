import React, { Component } from "react"

import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Editor from "./components/Editor"
import MainPage from "./pages/MainPage"

class App extends Component {
	render = () => {
		console.info(">> App")

		console.log("Loaded redux state in App is:")
		// console.log(state)

		return (
			<div>
				<Editor />
				<BrowserRouter>
					<Switch>
						<Route path="/" component={MainPage} exact />
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}

// export default React.memo(App)
export default App
