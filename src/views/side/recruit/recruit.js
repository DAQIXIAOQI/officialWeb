import React, { Component } from 'react';

class Recruit extends Component {
	constructor(){
		super();
		this.state={
			nowJob : 0
		};
		this.getJob = this.getJob.bind(this);
	}
	componentWillMount() {
		this.getJob();
	}
	getJob(){
		this.setState({
			jobList:[
			{name:'PHP开发工程师',
			resp:'<p>1、负责内容管理系统功能模块及系统的设计，开发与维护；</p><p>2、具有团队精神和协作能力，学习能力和吃苦耐劳的精神；</p><p>3、有独立负责的工作能力，独立完成模块代码编写、代码维护工作；</p><p>4、根据项目进度安排及时沟通协调，按时按质完成工作；</p><p>5、工作细致，有责任心，能够主动解决问题。</p>',
			requirment:'<p>1、熟练使用ThinkPHP/PHP+MYSQL 进行 WEB 开发，熟悉MVC开发模式，独立自己制作简易后台（不能制作后台请不要投简历）；<p><p>2、熟悉JavaScript、Ajax、Css、HTML等，熟悉JQuery，其他JS框架技术；<p><p>4、主要基于手机端开发和PC端开发；<p><p>5、熟练掌握常用的Linux命令、shell脚本，Windows、Server的各项服务、应用配置；<p><p>6、有良好代码书写、注释和单元测试习惯，熟练运用多种软件设计模式；<p>'
			},{
			name:'前端开发工程师',
			resp:'<p>1、负责内容管理系统功能模块及系统的设计，开发与维护；</p><p>2、具有团队精神和协作能力，学习能力和吃苦耐劳的精神；</p><p>3、有独立负责的工作能力，独立完成模块代码编写、代码维护工作；</p><p>4、根据项目进度安排及时沟通协调，按时按质完成工作；</p><p>5、工作细致，有责任心，能够主动解决问题。</p>',
			requirment:'<p>1、熟练使用ThinkPHP/PHP+MYSQL 进行 WEB 开发，熟悉MVC开发模式，独立自己制作简易后台（不能制作后台请不要投简历）；<p><p>2、熟悉JavaScript、Ajax、Css、HTML等，熟悉JQuery，其他JS框架技术；<p><p>4、主要基于手机端开发和PC端开发；<p><p>5、熟练掌握常用的Linux命令、shell脚本，Windows、Server的各项服务、应用配置；<p><p>6、有良好代码书写、注释和单元测试习惯，熟练运用多种软件设计模式；<p>'
			},{
			name:'前端开发工程师',
			resp:'<p>1、负责内容管理系统功能模块及系统的设计，开发与维护；</p><p>2、具有团队精神和协作能力，学习能力和吃苦耐劳的精神；</p><p>3、有独立负责的工作能力，独立完成模块代码编写、代码维护工作；</p><p>4、根据项目进度安排及时沟通协调，按时按质完成工作；</p><p>5、工作细致，有责任心，能够主动解决问题。</p>',
			requirment:'<p>1、熟练使用ThinkPHP/PHP+MYSQL 进行 WEB 开发，熟悉MVC开发模式，独立自己制作简易后台（不能制作后台请不要投简历）；<p><p>2、熟悉JavaScript、Ajax、Css、HTML等，熟悉JQuery，其他JS框架技术；<p><p>4、主要基于手机端开发和PC端开发；<p><p>5、熟练掌握常用的Linux命令、shell脚本，Windows、Server的各项服务、应用配置；<p><p>6、有良好代码书写、注释和单元测试习惯，熟练运用多种软件设计模式；<p>'
			}]
		});
	}
	toggleJob(){

	}
	render() {
		let job = new Array();
		job = this.state.jobList.map((item,index) => {
			return <li className={`job-item ${this.state.nowJob == index ? "current" : ""}`} onClick={this.toggleJob} index={index} key={index}>{item.name}</li>	
		});
		let requirment = {
			__html:this.state.jobList[this.state.nowJob].requirment,
		};
		let resp = {
			__html:this.state.jobList[this.state.nowJob].resp,
		};
		return (
				<div className="recruit-box">
					<div className="recruit-header inside-header">
						<span className="recruit-logo inside-logo">聘</span>（人才招聘/招聘咨询）
					</div>
					<div className="job-list">
						<div className='job-list-str'>岗位名称:
						</div>
						<ul>
							{job}
						</ul>
					</div>
					<div className="recruit-main inside-main-box">
					岗位职责：
					<div className="recurit-resp" dangerouslySetInnerHTML={resp}></div>
					任职要求：
					<div className="recruit-requirment" dangerouslySetInnerHTML={requirment}></div>
				</div>
				</div>
			);
	}
}
export default Recruit;
