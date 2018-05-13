import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
	componentDidMount() {
	}
	render() {
		return (
				<div className='footer'>
					<div className='footer-box min-box'>
						<div className='footer-message'>
							<span className='footer-address'>广东省广州市天河区</span>
							<span className='footer-email'>info@163.com</span>
							<span className='footer-phone'>+020-123456789</span>
						</div>
						<div className='footer-copyright'>
							© 2015-2017 广东智思云信息科技有限公司 粤ICP备17124655号-1
						</div>
					</div>
				</div>
			);
	}
}
export default Footer;