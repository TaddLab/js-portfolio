import React from "react";
import "../styles/Home.css";
import programmingBackground from "../assets/images/background/programming.jpg";
import foregroundCoding from "../assets/images/foreground/codeing.jpg";
import computer from "../assets/images/foreground/computer.jpg";
import analysis from "../assets/images/foreground/analysis.jpg";

export default function Home() {
	return (
		<div className="home-wrapper">
			<pre className="basic-text"> Hello, I´m T-Al-D ! </pre>
			<div className="animated-background">
				<img src={programmingBackground} alt=""></img>
				<div className="floating-images">
					<img
						src={foregroundCoding}
						alt=""
						className="foregroundCoding"
					></img>
					<img src={computer} alt="" className="computer"></img>
					<img src={analysis} alt="" className="analysis"></img>
				</div>
			</div>
		</div>
	);
}
