import React, { Component } from 'react';
import './banner.css';

class Banner extends Component {
	componentDidMount() {
	}
	render() {
		return (
				<div className = 'banner' id='banner'>
					<div className="banner-box">
						<img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526212624842&di=a4d451d8a7f1e37b93a3d5e0280f8586&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Ff11f3a292df5e0feb4cad66c5d6034a85fdf7288.jpg' alt='banner'>
						</img>
					</div>
					<div className="banner-text">
						<span>打造一个完整的移动互联网营销闭环，为用户提供移动互联网营销工具、广告分发渠道、粉丝引导转化工具的全方位移动互联网营销解决方案</span>
					</div>
				</div>
			);
	}
}
export default Banner;
