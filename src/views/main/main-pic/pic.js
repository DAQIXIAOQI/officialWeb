import React, { Component } from 'react';
import Img1 from '../../../images/icon/des1.png';
import Img2 from '../../../images/icon/options2.png';
import Img3 from '../../../images/icon/options3.png';
import Img4 from '../../../images/icon/options4.png';


class Picbox extends Component {
	constructor(){
		super();
		this.state = {
			nowOption:0
		};
		this.toggleMain = this.toggleMain.bind(this);
		this.getOption = this.getOption.bind(this);
	}
	componentWillMount() {
		this.getOption();
	}
	getOption(){
		this.setState({
			option:[{name:'页面设计',ename:'Ui Design'},{name:'页面设计',ename:'Ui Design'},{name:'页面设计',ename:'Ui Design'},{name:'页面设计',ename:'Ui Design'}]
		});
	}
	toggleMain(e){
		const type = e.currentTarget.getAttribute('option');

		this.setState({
			nowOption:type
		});
	}
	render() {
		let option = new Array();
		option = this.state.option.map((item,index)=>{
			return (
					<span className={`option ${index == this.state.nowOption ?"current" : ""}`} option={index} key = {index} onClick={this.toggleMain}>
							<span className='option-img'></span>
							<span className='option-name'>{item.name}</span>
							<span className="option-ename">{item.ename}</span>
					</span>
				);
		});
		return (
				<div className='main-pic min-box'>
					<div className="pic-title">我们的服务体系</div>
					<div className="pic-option">
						{option}
					</div>
					<div className="pic-mline">
						<div className="mline-sq" style={{left:this.state.nowOption*250 + 100}}>
							<span className="mline-sq-main"></span>
						</div>
					</div>
					<div className="pic-main">
						<img src={Img1} alt='option-des'/>
					</div>
				</div>
			);
	}
}
export default Picbox;
