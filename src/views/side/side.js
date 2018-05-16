import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './side.css';
import About from './about/about';
import Contect from './contect/contect';
import Recruit from './recruit/recruit';

class Side extends Component {
	componentDidMount() {
	}
	render() {
		return (
			<div className="inside min-box">
				<div className="side">
					<div className="side-header">
						首页><span className="side-name">招募精英</span>
					</div>
					<div className="side-nav">
						<ul className="nav-box">
							<li className="nav-item"><span>企业理念</span></li>
							<li className="nav-item can-drop">
								<span><i>★</i>人才招聘</span>
								<ul className="item-box">
									<li className="item-child">>招聘资讯</li>
									<li className="item-child">>联系方式</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<div className='inside-main'>
				<Route path = '/side/contect' component = {Contect} />
				<Route path = '/side/recruit' component = {Recruit} />
				<Route path = '/side/about' component = {About} />
				</div>
			</div>
			);
	}
}
export default Side;