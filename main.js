import React from 'react';
import ReactDOM from 'react-dom';

// import App from './app.jsx';

// ReactDOM.render(<App/>, document.getElementById('app'));
// ReactDOM.render(
// 	<h1>Hello, World!</h1>,
// 	document.getElementById('app')
// );

var style = {
	fontSize : 10,
	color : 'blue'
};
var arr = [
	<h1>数组的第一个元素</h1>,
	<h2>数组的第二个元素</h2>
];
var i = 1;
// 自定义属性
// ReactDOM.render(
// 	<div>
// 		<h1>标题一</h1>
// 		<h2>标题二</h2>
// 		// 使用表达式，表达式写在花括号{}中
// 		<h3>1 + 1 = {1 + 1}</h3>
// 		// 在JSX中不能使用if else，但可以使用三元运算表达式
// 		<h4>i == 1吗？{i == 1 ? 'true' : 'false'}</h4>
// 		// 样式
// 		<h5>这是10像素蓝色字体</h5>
// 		// 注释
// 		{/* 这是注释。。*/}
// 		// JSX允许在模板中插入数组，数组会自动展开所有成员
// 		<div>{arr}</div>
// 		<p data-myattribute="somevalue">这是一个很不错的JavaSricpt库！</p>
// 	</div>,
// 	// <div>{arr}</div>,
// 	document.getElementById('example')
// );

// React组件
// var HelloMessage = React.createClass({
// 	render: function(){
// 		return <h1>Hello {this.props.name} ! </h1>;
// 	}
// });
// // 使用this.props对象传递参数
// ReactDOM.render(<HelloMessage name="Better"/>, document.getElementById('example'));

// 复合组件
// var WebSite = React.createClass({
// 	render: function(){
// 		return (
// 			<div>
// 				<Name name={this.props.name}/>
// 				<Link site={this.props.site}/>
// 			</div>
// 		);
// 	}
// });
// var Name = React.createClass({
// 	render: function(){
// 		return (
// 			<h1>{this.props.name}</h1>
// 		);
// 	}
// });
// var Link = React.createClass({
// 	render: function(){
// 		return (
// 			<a href={this.props.site}>{this.props.site}</a>
// 		);
// 	}
// });
// ReactDOM.render(
// 	<WebSite name="Better_github" site="https://github.com/liaolongdong"/>,
// 	document.getElementById('example')
// );

// React State(状态)
// var LikeButton = React.createClass({
// 	getInitialState: function(){
// 		return {liked: false};
// 	},
// 	handleClick: function(event){
// 		this.setState({liked: !this.state.liked});
// 	},
// 	render: function(){
// 		var text = this.state.liked ? '喜欢' : '不喜欢';
// 		return (
// 			<p onClick={this.handleClick}>
// 				你<b>{text}</b>我，点我切换状态。
// 			</p>
// 		);
// 	}
// });
// ReactDOM.render(<LikeButton/>, document.getElementById('example'));

// React props
// state和props主要区别在于props是不可变的，而state可以根据与用户交互来改变。
// var HelloMessage = React.createClass({
// 	getDefaultProps: function(){
// 		return {
// 			name: 'Better'
// 		};
// 	},
// 	render: function(){
// 		return <h1>Hello {this.props.name}</h1>;
// 	}
// });
// ReactDOM.render(<HelloMessage/>, document.getElementById('example'));

// 使用state和props
// var WebSite = React.createClass({
// 	getInitialState: function(){
// 		return {
// 			name: 'Better',
// 			site: 'https://github.com/liaolongdong'
// 		};
// 	},
// 	render: function(){
// 		return (
// 			<div>
// 				<Name name={this.state.name}/>
// 				<Link site={this.state.site}/>
// 			</div>
// 		);
// 	}
// });
// var Name = React.createClass({
// 	render: function(){
// 		return (
// 			<h1>{this.props.name}</h1>
// 		);
// 	}
// });
// var Link = React.createClass({
// 	render: function(){
// 		return (
// 			<a href={this.props.site}>
// 				廖龙东的github网址
// 			</a>
// 		);
// 	}
// });
// ReactDOM.render(<WebSite/>, document.getElementById('example'));

// props验证使用propTypes
// var title = '菜鸟教程';
// // var title = 123;
// var MyTitle = React.createClass({
// 	propTypes: {
// 		title: React.PropTypes.string.isRequired
// 	},
// 	render: function(){
// 		return <h1>{this.props.title}</h1>;
// 	}
// });
// ReactDOM.render(<MyTitle title={title}/>, document.getElementById('example'));

// 更多验证器
// React.createClass({
// 	propTypes: {
// 		// 可以声明prop为指定的JS基本数据类型，默认情况，这些数据都是可选的
// 		optionalArray: React.PropTypes.array,
// 		optionalBool: React.PropTypes.bool,
// 		optionalFunc: React.PropTypes.func,
// 		optionalNumber: React.PropTypes.number,
// 		optionalObject: React.PropTypes.object,
// 		optionalString: React.PropTypes.string,
// 		// 可以被渲染的对象numbers, strings, elements或array
// 		optionalNode: React.PropTypes.node,
// 		//React元素
// 		optionalElement: React.propTypes.element,
// 		// 用JS的instanceof操作符声明prop为类的实例
// 		optionalMessage: React.PropTypes.instanceOf(Message),
// 		// 用enum来限制prop只接受指定的值
// 		optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),
// 		// 可以是多个对象类型中的一个
// 		optionalUnion: React.PropTypes.oneOfType([
// 			React.PropTypes.string,
// 			React.PropTypes.number,
// 			React.propTypes.instanceOf(Message)
// 		]),
// 		// 指定类型组成的数组
// 		optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),
// 		// 指定类型的属性构成的对象
// 		optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),
// 		// 特定shape参数的对象
// 		optionalObjectWithShape: React.PropTypes.shape({
// 			color: React.PropTypes.string,
// 			fontSize: React.PropTypes.number
// 		}),
// 		// 任意类型加上‘isRequired’来使prop不为空
// 		requiredFunc: React.PropTypes.func.isRequired,
// 		// 不可空的任意类型
// 		requiredAny: React.PropTypes.any.isRequired,
// 		// 自定义验证器，如果验证失败需要返回一个Error对象，不要直接使用‘console.warn’或者抛出异常，因为这样‘oneOfType’会失效
// 		customProp: function(props, propName, componentName){
// 			if(!/matchme/.test(props[propName])){
// 				return new Error('Validation failed!');
// 			}
// 		}

// 	}
// });

// 设置状态：setState
// setState(object nextState[, function callback])
// var Counter = React.createClass({
// 	getInitialState: function(){
// 		return {
// 			clickCount: 0
// 		};
// 	},
// 	handleClick: function(){
// 		this.setState(function(state){
// 			return {
// 				clickCount: state.clickCount + 1
// 			};
// 		});
// 	},
// 	render: function(){
// 		return (<h2 onClick={this.handleClick}>点我，点击次数为：{this.state.clickCount}</h2>);
// 	}
// });
// ReactDOM.render(<Counter/>, document.getElementById('message'));

// React组件生命周期
// var Hello = React.createClass({
// 	getInitialState: function(){
// 		return {
// 			opacity: 1.0
// 		};
// 	},
// 	componentDidMount: function(){
// 		this.timer = setInterval(function(){
// 			var opacity = this.state.opacity;
// 			opacity -= .05;
// 			if(opacity < 0.1){
// 				opacity = 1.0;
// 			}
// 			this.setState({
// 				opacity: opacity
// 			});
// 		}.bind(this), 100);
// 	},
// 	render: function(){
// 		return (
// 			<div style={{opacity: this.state.opacity}}>
// 				Hello {this.props.name}
// 			</div>
// 		);
// 	}
// });
// ReactDOM.render(<Hello name="World ! "/>, document.getElementById('example'));

var Button = React.createClass({
	getInitialState: function(){
		return {
			data: 0
		};
	},
	setNewNumber: function(){
		this.setState({
			data: this.state.data + 1
		});
	},
	render: function(){
		return (
			<div>
				<button onClick={this.setNewNumber}>increment</button>
				<Content myNumber={this.state.data}></Content>
			</div>
		);
	}
});
var Content = React.createClass({
	componentWillMount: function(){
		console.log('Component Will Mount!');
	},
	componentDidMount: function(){
		console.log('Component Did Mount!');
	},
	componentWillReceiveProps: function(newProps){
		console.log('newProps: ' + newProps);
		console.log('Component Will Receive Props!');
	},
	shouldComponentUpdate: function(newProps, newState){
		console.log('newProps:' + newProps + ',newState: ' + newState);
		console.log('Should Component Update! return true');
		return true;
	},
	componentWillUpdate: function(nextProps, nextState){
		console.log('nextProps: ' + nextProps + ',nextState: ' + nextState);
		console.log('Componnet Will Update!');
	},
	componentDidUpdate: function(prevProps, prevState){
		console.log('prevProps: ' + prevProps + ',prevState: ' + prevState);
		console.log('Component Did Update');
	},
	componentWillUnmount: function(){
		cosole.log('Componnet Will Unmount!');
	},
	render: function(){
		return (
			<div>
				<h3>{this.props.myNumber}</h3>
			</div>
		);
	}
});
ReactDOM.render(<div><Button/></div>, document.getElementById('example'));
















































