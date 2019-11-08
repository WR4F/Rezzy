import React, { Component } from "react"
import { CardPanel, Col } from "react-materialize"
import monogram1light from "../img/monogram1light.svg"

class Main extends Component {
	render() {
		return (
			<Col l={10} m={9} s={9}>
				<CardPanel className="transparent z-depth-0">
					{this.props.children}
				</CardPanel>
			</Col>
		)
	}
}
export default Main
