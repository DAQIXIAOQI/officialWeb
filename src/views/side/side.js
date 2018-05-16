import React, { Component } from 'react';
import { Route,NavLink } from 'react-router-dom';
import './side.css';
import About from './about/about';
import Contect from './contect/contect';
import Recruit from './recruit/recruit';

class Side extends Component {
	constructor(){
		super();
		this.state = {};
		this.updataNav = this.updataNav.bind(this);
	}
	componentDidMount() {
		this.updataNav();
	}
	updataNav(){
		this.setState({
			path:window.location.pathname
		});
	}
	componentWillReceiveProps(){
		this.updataNav();
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
							<NavLink to='/side/about' ><li className={`nav-item ${this.state.path == '/side/about' ? "current":""}`}><span>企业理念</span></li></NavLink>
							<li className="nav-item can-drop">
								<span><i>▶</i>人才招聘</span>
								<ul className="item-box">
									<NavLink to='/side/recruit'><li className={`item-child ${this.state.path == '/side/recruit' ? "current":""}`}>>招聘资讯</li></NavLink>
									<NavLink to='/side/contect' ><li className={`item-child ${this.state.path == '/side/contect' ? "current":""}`}>>联系方式</li></NavLink>
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