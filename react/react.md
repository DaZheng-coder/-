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
	
## 函数式组件没有this，不能使用state，refs，但是能使用props,（hocks可以使用state）
	```
	 function Person (props) {
		const { name, age, sex } = props
		return (
			<ul>
				<li>例子</li>
			</ul>
		)
	 }
	```
		
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

## 精简代码
	class MyComponent {
		state = {
			key: "value"
		}
		
		methodName = () => {
			console.log('简写代码')
		}
	}

## props
```
	ReactDOM.reander(<Person name="tom" age="18"/>, document.getElementById('test'))
```	
	name、age等属性自动存放到Person实例中的props里，在类中通过this.props.xxx调用
	
	### 如果属性比较多的情况
	```
		const p = { name: 'zhang', age: 16 }
		ReactDOM.reander(<Person {...p}/>, document.getElementById('test'))
	```
		注意这里的{...p}不是es5新增的展开运算符复制对象的表达式，这里并没有复制对象，而是在jsx语法中...p通过react和babel处理后展开对象，原生无法展开对象。但是不能随意使用，仅仅适用于标签属性的传递。
	
	### 对props进行限制
	```
		// 引入依赖包prop-types, 用于对标签属性进行限制
		<script type="text/javascript" src="../js/prop-type.js" />
		class Person extends React.Component {
		}
		// 对标签属性类型、必要性进行限制
		Person.propTypes = {
			// 已被弃用
			// name: React.PropTypes.string
			// 限制 字符串 和 必需
			name: PropTypes.string.isRequired,
			sex: PropTypes.string,
			age: PropType.number
			// 对方法进行限制,注意是func
			speak: PropTypes.func
		}
		// 指定标签属性默认值
		Person.defaultProps = {
			sex: '默认性别',
			age: 18
		}
	```
	
	### props是只读的
	### props简写方式
	```
		class Person extends React.Component {
			static propTypes = {
				
			}
			static defaultTypes = {
				
			}
		}
	```

## react中构造器的作用：初始化state，修改一般方法this指向
## 构造器是否接收props，是否传递给super，取决于是否希望在构造器中通过this访问props
	
## 展开运算符
	1.展开数组
	2.连接数组 let arr3 = [...arr1, ...arr2]
	3.函数传参 
	```
		function sum(...numbers) {
			return numbers.reduce((preValue, 	currentValue) => {
				return preValue + currentValue
			})
		}
	```
	4.展开运算符不能展开对象，但是外边包一个{}可以复制
	```
		person1 = {
			name: 'li',
			age: '2'
		}
		
		const person2 = {...person1} //深度复制对象
	```
	5.复制对象时修改（合并）属性
		let person3 = {...person, name: 'jack',address: '地球'}
		复制对象的同时修改了name的属性，同时新增了address地球属性

## jsx里的注释{/* xxx */}
	
## refs 	
	### 字符串形式ref（不被react官方建议使用，可能删掉）
	```
		// 字符串形式ref
		<input ref="input1" placeholder="通过ref获取元素" />
		// 通过refs获取真实DOM，注意是真实dom
		const {input1} = this.refs
	```
	
	### 回调形式的ref
	```
		<input ref={c => this.input1 = c}  placeholder="通过ref获取元素" />
		const {input1} = this
	```	
		#### 更新的时候回调形式的ref调用两次，第一次为null，第二次为节点。因为每次更新的时候都要调用render的函数都不一样。
			避免这种情况，可以使用class的绑定函数，但是大多数情况下不用
			```
				<input ref={this.saveInput} placeholder="避免更新时两次调用" />
				
				saveInput = (c) => {
					this.input1 = c
					console.log('@', c)
				}
			```
	
	### createRef API的方式
		React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点，该容器是专人专用的，只能存一个
		```
			class Demo extends React.Component {
				myRef = React.createRef()
				render() {
					return (
						<input ref={this.myRef} />
					)
				}
			}
		```