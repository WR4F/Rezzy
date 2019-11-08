import React, { Component } from "react"
import { CardPanel, Col } from "react-materialize"
import monogram1light from "../img/monogram1light.svg"

class Sidebar extends Component {
	render() {
		return (
			<Col l={2} m={3} s={3}>
				<CardPanel className="transparent z-depth-0">
					{this.props.children}
				</CardPanel>
			</Col>
		)
	}
}
export default Sidebar
