import React, { Component } from 'react';
import './header.css';
import Logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import Util from '../../util';

class Header extends Component {
	constructor(){
		super();
		this.state = {
			single:true
		};
		this.getNav = this.getNav.bind(this);
		this.toggleNav = this.toggleNav.bind(this);
		this.scrollControl = this.scrollControl.bind(this);
	}
	componentWillMount() {
		this.getNav();
	}
	componentDidMount() {
		this.scrollControl();
	}
	getNav(){
		this.setState({
			headerNav:[{name:'首页',path:'/'},{name:'服务',path:'/#service'},{name:'案例',path:'/#example'},{name:'招募精英',path:'/side/recruit'},{name:'关于我们',path:'/side/about'},{name:'联系我们',path:'/side/contect'}],
		});
	}
	toggleNav(e){
		this.setState({
			single: e
		});
	}
	scrollControl(){
		Util.addEvent(window,"scroll",function(e){
			if(document.documentElement.scrollTop > 50){
				this.setState({
					single:false
				});
			}
			else {
				this.setState({
					single:true
				});
			}
		}.bind(this));
	}
	currentTopic(match,location) {
		if(match && (match.path === location.pathname)) {
			return true
		}
	}
	scrollInto(e){
		const id = e.currentTarget.getAttribute('skip') ;
		if(id){
			let ele = document.getElementById(id);
			if(!ele){
				let num = 0;
				const timer = setInterval(function(){
					ele = document.getElementById(id);
					num++;
					if(ele){
						clearInterval(timer);
						ele.scrollIntoView({
			    			behavior: "smooth",
			   				block: "start",
						});
					}
					if(num > 15){
						clearInterval(timer);
					}
				},100);
				return
			}  
			ele.scrollIntoView({
    			behavior: "smooth",
   				block: "start",
			});
		}
	}
	render() {
		let nav = this.state.headerNav.map((item,index)=>{
			const reg = /[#](.*)/;
			const to = item.path.match(reg) ? item.path.match(reg)[1] : "";

			return <NavLink key={index} to={item.path} activeClassName = 'current' isActive = {this.currentTopic} ><li key={index} skip={to} onClick={this.scrollInto}>{item.name}</li></NavLink>
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
