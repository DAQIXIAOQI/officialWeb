import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../views/main/main';
import About from '../views/about/about';
import Contect from '../views/contect/contect';
import Recruit from '../views/recruit/recruit';

export default class Routes extends React.Component {
	render() {	
		return(
			<div>
				
				<Route path = '/' exact component = {Main} />
				<Route path = '/about' exact component = {About} />
				<Route path = '/contect' exact component = {Contect} />
				<Route path = '/recruit' exact component = {Recruit} />
			</div>
			)
	}
}