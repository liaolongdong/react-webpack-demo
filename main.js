import React from 'react';
import ReactDOM from 'react-dom';

// import App from './app.jsx';

// ReactDOM.render(<App/>, document.getElementById('app'));
// ReactDOM.render(
// 	<h1>Hello, World!</h1>,
// 	document.getElementById('app')
// );

// 自定义属性
ReactDOM.render(
	<div>
		<h1>标题一</h1>
		<h2>标题二</h2>
		<p data-myattribute="somevalue">这是一个很不错的JavaSricpt库！</p>
	</div>,
	document.getElementById('example')
);



















