import React, { Component } from 'react';
import Service from './main-service/service';
import Exs from './main-example/examples';
import Pic from './main-pic/pic';
import './main.css';

class Main extends Component {
	componentDidMount() {
	}
	render() {
		return (
				<div>
					<Service />
					<Exs />
					<Pic />
				</div>
			);
	}
}
export default Main;