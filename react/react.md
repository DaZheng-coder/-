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
	
## 虚拟dom
		1.本质是Object类型的对象（一般对象）
		2.虚拟dom最终会被react转化为真实dom
		```
		cosnt myId = 'aTgUiGu'
		const myDate = "Hellom,REaCt'
		const VDOM = (
			<h2 id={myId.toLowerCase()}>
				<span>{myDate.toLowerCase()}</span>
			</h2>
		)
		```

## jsx语法
		1. 定义虚拟dom时，不要写引号，
		2. 标签中混入js表达式时要用{}，
		3. 样式的类名指定不要用class，要用className(因为class是es6的关键字)
		4. 内联样式，要用style={{key: value}}的形式去写
		5. 虚拟dom里jsx括号里只能有一个根标签
		6. 标签必须闭合
		7. 标签首字母，小写字母开头则将标签转为html同名元素，大写字母开头React则渲染对应的组件

## 区分表达式和代码
	表达式： 一个表达式会产生一个值，可以放在任何一个需要值的地方
	代码： if(){} for(){}

## react for循环
	```
	{
		arr.map((item,index) => {
			return <li key={index}>{item}</li>
		})
	}
	```

## 模块与组件
	模块： 向外提供特定功能的js程序，一般是个js文件
	组件： 用来实现局部功能效果的代码和资源的集合(html/css/js/iamge)等
	
## 组件：
	函数式组件(适用于简单组件)：
	```
		function Demo() {
			return <h2>适用于简单组件</h2>
		}
		ReactDom.render(<Demo/>, document.getElementById('text))
	```
	类式组件：
	```
		class MyComponent extends React.Component{
			// render是放在哪里的？ 类的原型对象上，供实例使用
			render() {
				return <h2>适用于复杂组件</h2>
			}
		}
		ReactDom.render(<MyComponent />, document.getElementById('test'))
	```
	render中的this指的是MyComponent的实例对象，也就是MyComponent组件实例对象 
	
		
## 执行了ReactDOM.reader(<MyComponent />)...之后，发生了什么？
		1.React解析组件标签，找到MyComponent组件，
		2.发现组件是
		①使用函数定义的，随后调用该函数
		②发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法
		3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中
		
## 简单组件 和 复杂组件
	简单组件无状态，复杂组件有状态
	
## react中的事件绑定
	原版： onclick react： onClick
	要在构造器里使用bind函数改变事件方法的this指向
	
## 为什么类式组件里的事件方法的this为undefined？
	类中自动开启严格模式，由于事件方法是作为onClick的回调，所以不是通过实例调用的，是直接调用的。类中默认开启严格模式，所以事件方法中的this是undefined
	
## setState
	react的状态state不可直接更改, 必须使用setState，更新是合并，不是替换
	```
		this.setState({isHot: !isHot}
	```