import React, { Component } from "react"
import monogram1light from "../img/monogram1light.svg"
import { Col } from "react-materialize"

class Title extends Component {
	render() {
		return (
			<Col s={12}>
				<div className="page-title">
					<img src={monogram1light} alt="" />
					<h1>{this.props.name}</h1>
					<img src={monogram1light} alt="" />
				</div>
			</Col>
		)
	}
}
export default Title
