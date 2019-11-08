import React, { Component } from "react"
import { CardPanel, Col, Card } from "react-materialize"
import monogram1light from "../img/monogram1light.svg"

class Section extends Component {
	render() {
		return (
			<div>
				<div className="section-title">
					<h5>{this.props.title}</h5>
				</div>
				{this.props.children}
			</div>
		)
	}
}
export default Section
