import React, { Component } from 'react';

class Exs extends Component {
	constructor(){
		super();
		this.state = {};
		this.getNav = this.getNav.bind(this);
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleMain = this.toggleMain.bind(this);
	}
	componentWillMount() {
		this.getNav();
	}
	getNav(){
		this.setState({
			snav:[{name:'所有案例',type:0},{name:'微信案例',type:1},{name:'移动案例',type:2},{name:'数字报纸',type:3}],
			nowType:0,
			smain:[{
					type:0,
					name:'广东省国土资源厅',
					ename:'Department of Land resources of Guangdong Province',
					title:'政务新媒体一体化平台',
					des:'政务新媒体一体化平台充分利用移动技术同政务服务相结合，为政务人提供良好的用户体验，带来政务服务的新模式。使政府部门充分解放人力，发挥信息化优势，充分解放人力，发挥信息化优势，充分解放人力，发挥信息化优势，实现摆脱媒体限制的信息快速更新等目标。'	
				},{
					type:1,
					name:'广东省国土资源厅',
					ename:'Department of Land resources of Guangdong Province',
					title:'政务新媒体一体化平台',
					des:'政务新媒体一体化平台充分利用移动技术同政务服务相结合，为政务人提供良好的用户体验，带来政务服务的新模式。使政府部门充分解放人力，发挥信息化优势，充分解放人力，发挥信息化优势，充分解放人力，发挥信息化优势，实现摆脱媒体限制的信息快速更新等目标。'	
				},{
					type:2,
					name:'广东省国土资源厅',
					ename:'Department of Land resources of Guangdong Province',
					title:'政务新媒体一体化平台',
					des:'政务新媒体一体化平台充分利用移动技术同政务服务相结合，为政务人提供良好的用户体验，带来政务服务的新模式。使政府部门充分解放人力，发挥信息化优势，充分解放人力，发挥信息化优势，充分解放人力，发挥信息化优势，实现摆脱媒体限制的信息快速更新等目标。'	
				},{
					type:3,
					name:'广东省国土资源厅',
					ename:'Department of Land resources of Guangdong Province',
					title:'政务新媒体一体化平台',
					des:'政务新媒体一体化平台充分利用移动技术同政务服务相结合，为政务人提供良好的用户体验，带来政务服务的新模式。使政府部门充分解放人力，发挥信息化优势，充分解放人力，发挥信息化优势，充分解放人力，发挥信息化优势，实现摆脱媒体限制的信息快速更新等目标。'	
				}]
			});
	}
	toggleNav(e){
		const type = e.currentTarget.getAttribute('type');
		if(type == this.state.nowType) return;
		this.setState({
			nowType:type
		});
	}
	toggleMain(type){
		let data = new Array();
		if(type == 0){
			data = this.state.smain.map((item,index)=>{
				return (
				<div className="example-item" key={index}>
					<div className="example-header">
						<div className="example-name">{item.name}</div>
						<div className="example-ename">{item.ename}</div>
					</div>
					<div className="example-title">{item.title}</div>
					<div className="example-des">{item.des}</div>
				</div>
					)	
			});
		}
		else{
			data = this.state.smain.map((item,index)=>{
				if(item.type != type) return ;
				return (
				<div className="example-item" key={index}>
					<div className="example-header">
						<div className="example-name">{item.name}</div>
						<div className="example-ename">{item.ename}</div>
					</div>
					<div className="example-title">{item.title}</div>
					<div className="example-des">{item.des}</div>
				</div>
					)	
			});
		}
		return data ;
	}
	render() {
		let data , snav;
		snav = this.state.snav.map((item,index)=>{
			return (
					<span 
						className={`nav-item ${this.state.nowType == item.type ? "current" :" "}`} 
						type={item.type}
						key={`snav${index}`} 
						onClick={this.toggleNav}
						>
						{item.name}
					</span>
				);
		});
		data = this.toggleMain(this.state.nowType);
		return (
				<div className="main-example min-box" id='example'>
					<div className="mheader">
								<div className="mtitle">案例</div>
								<div className="mtext">优质案例推荐</div>
					</div>
					<div className="example-box">
						<div className="example-nav">
							{snav}
						</div>
						<div className="example-item-box">
							{data}
						</div>
					</div>
				</div>
			);
	}
}
export default Exs;