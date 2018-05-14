import React, { Component } from 'react';

class Service extends Component {
	constructor(){
		super();
		this.state = {
		};
		this.getItem = this.getItem.bind(this);
	}
	componentWillMount() {
		this.getItem();
	}
	getItem(){
		this.setState({
			item:[{
				src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526212624842&di=a4d451d8a7f1e37b93a3d5e0280f8586&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Ff11f3a292df5e0feb4cad66c5d6034a85fdf7288.jpg',
				name:'气象应用开发',
				des:'一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串'
			},{
				src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526212624842&di=a4d451d8a7f1e37b93a3d5e0280f8586&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Ff11f3a292df5e0feb4cad66c5d6034a85fdf7288.jpg',
				name:'气象应用开发',
				des:'一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串'
			},{
				src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526212624842&di=a4d451d8a7f1e37b93a3d5e0280f8586&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Ff11f3a292df5e0feb4cad66c5d6034a85fdf7288.jpg',
				name:'气象应用开发',
				des:'一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串'
			},{
				src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526212624842&di=a4d451d8a7f1e37b93a3d5e0280f8586&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Ff11f3a292df5e0feb4cad66c5d6034a85fdf7288.jpg',
				name:'气象应用开发',
				des:'一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串'
			},{
				src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526212624842&di=a4d451d8a7f1e37b93a3d5e0280f8586&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Ff11f3a292df5e0feb4cad66c5d6034a85fdf7288.jpg',
				name:'气象应用开发',
				des:'一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串'
			},{
				src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526212624842&di=a4d451d8a7f1e37b93a3d5e0280f8586&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Ff11f3a292df5e0feb4cad66c5d6034a85fdf7288.jpg',
				name:'气象应用开发',
				des:'一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串一段字符串'
			}]
		});
	}
	render() {
		let itemArr = new Array();
		itemArr = this.state.item.map((item,index)=>{
			return (<div className="service-item" key={index}>
				<div className="service-img">
					<img src={item.src} alt={`item${index}`}/>
				</div>
				<div className="service-title">{item.name}</div>
				<div className="service-des">{item.des}</div>
			</div>)
		});
		return (
				<div className='main-service min-box'>
					<div className="mheader">
							<div className="mtitle">服务</div>
							<div className="mtext">我们能为您提供的</div>
					</div>	
					<div className="service-box">
						{itemArr}
					</div>
				</div>
			);
	}
}
export default Service;
