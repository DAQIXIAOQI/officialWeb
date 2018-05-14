import React, { Component } from 'react';
import './header.css';
import Logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	constructor(){
		super();
		this.state = {
			single:true
		};
		this.getNav = this.getNav.bind(this);
		this.toggleNav = this.toggleNav.bind(this);
	}
	componentWillMount() {
		this.getNav();
	}
	getNav(){
		this.setState({
			headerNav:[{name:'首页',path:'/'},{name:'服务',path:'/#service'},{name:'案例',path:'/#example'},{name:'招募精英',path:'/recruit'},{name:'关于我们',path:'/about'},{name:'联系我们',path:'/contect'}],
		});
	}
	toggleNav(e){
		this.setState({
			single: e
		});
	}
	currentTopic(match,location) {
		if(match && (match.path === location.pathname)) {
			return true
		}
	}
	render() {
		let nav = this.state.headerNav.map((item,index)=>{
			return <NavLink key={index} to={item.path} activeClassName = 'current' isActive = {this.currentTopic} ><li key={index} >{item.name}</li></NavLink>
		});
		return (
				<div className={`header ${this.state.single ? "single" : "couple"} bg-blue`}>
						<div className='header-logo logo-out' >
							<img src={Logo} alt ='logo' ></img>
						</div>
					<div className='header-box min-box'>
						<div className='header-logo logo-in'>
							<img src={Logo} alt ='logo' ></img>
						</div>
						<div className='header-nav'>
							<ul>
								{nav}
							</ul>	
						</div>
					</div>
				</div>
			);
	}
}
export default Header;
