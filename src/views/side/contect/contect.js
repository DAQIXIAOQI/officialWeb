import React, { Component } from 'react';

class Contect extends Component {
	componentDidMount() {
	}
	render() {
		return (
				<div className='contect-box'>
					<div className="contect-header inside-header">
						<span className="contect-logo inside-logo iconfont icon-zhaopin"></span><span className="inside-des">（联系方式）</span>
					</div>
					<div className="contect-main inside-main-box">
						<div className="contect-link">
							<span className="contect-phpne">
								<i className="iconfont"></i>+020-12345678
							</span>
							<span className="contect-email">
								<i className="iconfont"></i>info@zhisiyun.net
							</span>
						</div>
						<div className="contect-message">
						<span>交通：</span>公司在龙洞街道龙眼洞森林公园旁边，地铁六号线植物园站下车，走路15分钟即到。
						</div>
						<div className="contect-message">
						<span>生活：</span>附近有华润万家大型超市、龙洞商业步行街，购物就餐非常便利。周边有广东工业大学、广东金融学院、广东食品药品职业学院等大专院校。
						</div>
					</div>
				</div>
			);
	}
}
export default Contect;
