import React, { Component } from "react"
import {
	MediaBox,
	Modal,
	Card,
	Button,
	CardPanel,
	Col,
	Row,
	Icon,
} from "react-materialize"
import Title from "../components/Title"
import Sidebar from "../components/Sidebar"
import Main from "../components/Main"
import Section from "../components/Section"

class MainPage extends Component {
	render() {
		return (
			<Row id="App" className="sepia serif">
				<Title name="William H. Gates III" />
				<Sidebar>
					<h6>Programming</h6>
					<ul>
						<li>FORTAN</li>
						<li>COBOL</li>
						<li>ALGOL</li>
						<li>BASIC</li>
						<li>PL/I</li>
						<li>SNOBOL</li>
						<li>LISP</li>
						<li>GPSS</li>
						<li>APL</li>
						<li>JOSS</li>
					</ul>
					<h6>Systems</h6>
					<ul>
						<li>PDP-10/11/8</li>
						<li>CDC-6400</li>
						<li>Burroughs B-5500</li>
						<li>XDS Sigma 5</li>
						<li>IBM 360/67</li>
						<li>Nova 1200</li>
						<li>Interdata models 3 and 4</li>
					</ul>
				</Sidebar>
				<Main>
					<Section title="Education">
						<p>
							Currently a Junior at Washington State University in computer
							science.
						</p>
						<p>Courses taken include:</p>
						<ul className="circles">
							<li>Data Structures</li>
							<li>Survey of Programming Languages</li>
							<li>Numerical Analysis</li>
							<li>etc.</li>
						</ul>
						<p>
							Special projects on an APL interpreter and on the development of a
							Microcomputer Microprogrammed Multiprocessor.
						</p>
					</Section>

					<Section title="Experience">
						<p>
							Working familiarity with the following machines: PDP-10, PDP-8,
							PDP-11, PDP-1, CDC-6400, Burroughs B-5500, Nova 1200, MCS-8008.
							Languages used include FORTRAN, COBCL, ALGOL, BASIC, LISP, JOSS
							and machine languages for rest of the above computers.
						</p>
						<h6>TRW Systems Group, Vancouver, Washington 1/8/73 - 9/3/73</h6>
						<p>
							Systems programmer involved with file design and modifications to
							Operating System, System library, and Utilities (flow- charting,
							coding, debugging and documentation). The project involved setting
							up a real-tire system for power control around two large PDP-10's
							and three PDP-21's.
						</p>
						<h6>In partnership with Paul G. Allen 6/2/72 - Present</h6>
						<p>
							Designed and put together a system for traffic engineers to study
							traffic flow. The system is built around Intel's MCS-8008
							microconputer. The software and hardware setup has been fully
							tested using a prototype. Demonstrations to customers are planned
							for May 1974.
						</p>
						<h6>
							On contract to Lakeside School, Seattle, Washington 6/1/71 -
							9/10/71 and 6/1/72 - 3/10/72.
						</h6>
					</Section>
				</Main>
			</Row>
		)
	}
}

export default MainPage
