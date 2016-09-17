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
// 自定义属性
ReactDOM.render(
	// <div>
	// 	<h1>标题一</h1>
	// 	<h2>标题二</h2>
	// 	// 使用表达式，表达式写在花括号{}中
	// 	<h3>1 + 1 = {1 + 1}</h3>
	// 	// 在JSX中不能使用if else，但可以使用三元运算表达式
	// 	<h4>i == 1吗？{i == 1 ? 'true' : 'false'}</h4>
	// 	// 样式
	// 	<h5>这是10像素蓝色字体</h5>
	// 	// 注释
	// 	{/* 这是注释。。*/}
	// 	// JSX允许在模板中插入数组，数组会自动展开所有成员
	// 	<div>{arr}</div>
	// 	<p data-myattribute="somevalue">这是一个很不错的JavaSricpt库！</p>
	// </div>,
	<div>{arr}</div>,
	document.getElementById('example')
);



















