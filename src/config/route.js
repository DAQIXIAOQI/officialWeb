import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../views/main/main';
import Side from '../views/side/side';

export default class Routes extends React.Component {
	render() {	
		return(
			<div>
				<Route path = '/' exact component = {Main} />
				<Route path = '/side' component = {Side} />
			</div>
			)
	}
}