import React from "react"

var theme = "sepia"
var font = "serif"

var setTheme = (event) => {
	event.target.parentNode.childNodes.forEach((el) => {
		el.className = el.classList[0]
	})
	event.target.className = event.target.classList[0] + " active"
	var classResult =
		document.getElementById("App").classList[0] +
		" " +
		event.target.classList[0] +
		" " +
		document.getElementById("App").classList[2]
	document.getElementById("App").className = classResult
}

var setFont = (event) => {
	event.target.parentNode.childNodes.forEach((el) => {
		el.className = el.classList[0]
	})
	event.target.className = event.target.classList[0] + " active"
	var classResult =
		document.getElementById("App").classList[0] +
		" " +
		document.getElementById("App").classList[1] +
		" " +
		event.target.classList[0]
	document.getElementById("App").className = classResult
}

const Themer = () => (
	<div id="Themer">
		<div onClick={(event) => setTheme(event)} className="theme-picker">
			<div className="light" style={{ backgroundColor: "#fff", color: "#222" }}>
				Light
			</div>
			<div
				className="sepia active"
				onClick={(event) => setTheme(event)}
				style={{ backgroundColor: "#f4e7cf", color: "#263238" }}
			>
				Sepia
			</div>
			<div
				className="dark"
				onClick={(event) => setTheme(event)}
				style={{ backgroundColor: "#263238", color: "#f4e7cf" }}
			>
				Dark
			</div>
		</div>
		<div className="font-picker">
			<div
				className="serif active"
				onClick={(event) => setFont(event)}
				style={{ backgroundColor: "#00000099", color: "white" }}
			>
				Serif
			</div>
			<div
				className="sans"
				onClick={(event) => setFont(event)}
				style={{ backgroundColor: "#00000099", color: "white" }}
			>
				Sans-serif
			</div>
		</div>
	</div>
)

export default Themer
