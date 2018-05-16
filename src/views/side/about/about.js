import React, { Component } from 'react';

class About extends Component {
	componentDidMount() {
	}
	render() {
		const intr = {__html:"<p>广东智思云信息科技有限公司成立于2015年，是一家专注为企业、自媒体、政府机构提供移动互联网新媒体应用及营销服务的创新型高新技术企业。智思云为用户打造一个基于移动互联网内容分发、品牌推广、产品营销、用户转化的整体解决方案。主要合作伙伴中国气象局，北京气象局，广东国土资源厅，南方电网有限公司，南方报业集团，羊城晚报报业集团、广东食品药品职业学院等。</p><p>未来，智思云将打造一个完整的移动互联网营销闭环，为用户提供移动互联网营销工具、广告分发渠道、粉丝引导转化工具的全方位移动互联网营销解决方案，并整合优质企业服务商引进智思云企业服务平台，实现企业与企业服务商无缝对接，联合构建开放式的企业移动互联网商业生态圈。</p><p>为天地立心，为生民立命，为往圣继绝学，为万世开太平。智思云立志成为有情怀有格局有责任有担当的四有企业。不忘初心砥砺前行,为实现中华民族伟大复兴的中国梦而奋斗。</p>"} 
		return (
				<div className="about-box">
					<div className="about-header inside-header">
						<span className="about-logo inside-logo iconfont icon-fuli"></span><span className="inside-des">（公司福利/薪酬福利/人才理念）</span>
					</div>
					<div className="about-main inside-main-box">
						<div className="about-welfare">
							<ul>
								<li className="welfare-item">
									<span className="iconfont icon-jiangbei"  style={{backgroundColor:"#E4BC29"}}>
									</span>
									<div className="text">
									基于绩效的奖金奖励
									</div>
								</li>
								<li className="welfare-item">
									<span className="iconfont icon-shebao" style={{backgroundColor:"#F55463"}}>
									</span>
									<div className="text">
									基于绩效的奖金奖励
									</div>
								</li>
								<li className="welfare-item" >
									<span className="iconfont icon-shebao" style={{backgroundColor:"#54B8F4"}}>
									</span>
									<div className="text">
									基于绩效的奖金奖励
									</div>
								</li>
								<li className="welfare-item" >
									<span className="iconfont icon-jiangpin" style={{backgroundColor:"#F7B52F"}}>
									</span>
									<div className="text">
									基于绩效的奖金奖励
									</div>
								</li>
							</ul>
						</div>
						<div className="about-text" dangerouslySetInnerHTML={intr}>
						</div>
					</div>
				</div>
			);
	}
}
export default About;
