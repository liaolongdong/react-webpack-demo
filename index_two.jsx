ReactDOM.render(
	<h1>Hello, World !</h1>,
	document.getElementById('example')
);

var names = ['xiaoxin', 'xiaonian', 'xiaowu'];
ReactDOM.render(
	<div>
	{
		names.map(function(name){
			return <h1>Hello, {name} !</h1>
		})
	}
	</div>,
	document.getElementById('example')
);