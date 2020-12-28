## 文件结构
	1. babel.min.js:
		es6转es5, jsx转js
	2. react.development.js:
		react核心库
	3. react-dom.development.js：
		react扩展库
	引入顺序： 231
	```
	<script type="text/babel">
		//1.创建虚拟DOM
		const VDOM = <h1>hello, react</h1>
		//2.渲染虚拟dom到页面
		//ReactDOM.render(虚拟DOM， 容器)
		ReactDOM.reader(VDOM, document.getElementById('test'))
	</script>
	```
	
	```
	const VDOM = (
		<h1 id="title>
			<span>Hello, React</span>
		</h1>
	)
	```