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
		
## react中的事件处理
	（1）通过onXxx属性指定事件处理函数（注意大小写）
			a. React使用的是自定义（合成）事件，而不是使用的原生DOM事件----为了更好的兼容性
			b.Reakct中的事件是通过事件委托方式处理的（委托给组件最外层的元素）----为了高效
	（2）通过event.target得到发生事件的DOM元素对象（勿过度使用ref）
	
## react收集表单数据
		### 受控组件
			随着输入维护状态就是受控,最大的优势就是可以省略ref
		```
			class Login extends React.Component {
				state = {
					username: '', // 用户名
					password: '' // 密码
				}
				
				render() {
					return (
						<form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
							用户名： <input type="text" 
							onChange={this.saveUsername}
							name="username>
							密码 <input type="passsword" 
							onChange={this.savePassword}
							name="password">
							<button>登录</button>
						</form>
					)
				}
				handleSubmit = (event) => {
					// 阻止表单默认提交
					
				}
				// 保存用户名到状态中
				saveUsername = (event) => {
					console.log(event.target.value)
				}
			}
			ReactDOM.reander(<Login />, document.getElementById('test'))
		```
		### 非受控组件
			dom元素是现用现取
		```
			class Login extends React.Component {
				render() {
					return (
						<form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
							用户名： <input type="text" ref={c => this.username = c} name="username>
							密码 <input type="passsword" ref={c => this.password = c}  name="password">
							<button>登录</button>
						</form>
					)
				}
				handleSubmit = (event) => {
					// 阻止表单默认提交
					event.preventDefault()
					
				}
			}
			ReactDOM.reander(<Login />, document.getElementById('test'))
		```
	
## 函数柯里化
		
			通过函数调用继续返回函数的方式，实现多次接受参数最后统一处理的函数编码形式
			通过事件调用添加括号是直接执行返回一个值，可以返回一个函数解决返回undefined的问题。
		```
			saveFormDate = dataType => {
				//在这里传入event，获
				取event
				return (event) => {
					this.setState({
						[dataType]: event.target.value
					})
				}
			}
		```
		### 不用柯里化的写法
		```
			saveFormData = (dataType, event) => {
				this.setState([dataType]: event.target.value)
			}
			
			<input onChange={(event) => {this.saveFormData('username', event)}} />
		```
	
## 高阶函数
		接收的参数是一个函数、或者返回值仍然是一个函数，满足以上其中一点就是高阶函数。
		
		比如Promise、setTimeout、arr.map()等数组常用的方法
	
## 组件的生命周期
	render()
	挂载
		### constructor () {
			// 构造函数
		}
		### componentWillMount() {
			// 组件将要挂载
		}
		每当组件状态改变时都会调用一次render
		### render () {
			// 初始化渲染，状态更新之后
		}
		### componentDidMount() {
			// 组件已挂载,常用，一般做一些初始化的事
		}
		### componentWillUnmount () {
			// 组件将要卸载
		}
	更新 3种情况
		1.父组件render
		2.setState() -> shouldComponentUpdate(组件是否应该被更新,自动调用，默认返回false，写的话需要添加返回布尔值)->componentWillUpdate(组件将要更新)->render->componentDidUpdate(组件已经更新)->componentWillUnmount
		3.forceUpdate()强制更新 -> componentWillUpdate-> render->componentDidUpdate->componentWillUnmount 
	
	### componentWillReceiveProps即组件即将接受新的参数，但是组件第一次渲染不调用，可以接收参数props
	
	### 新的生命周期（新版本下的生命周期）
		componentWillMount、componentWillReceiveProps、componentWillUpdate将要废弃
		
		新增两个钩子： getDeriveStateFromProps、getSnapshotBeforeUpdate
		
	
## 组件的生命周期总结
	1. 初始化阶段： 由ReactDOM.render()触发---初次渲染
		1.constructor()
		2.componentWillMount()
		3.render()
		4.componentDidMount() ====> 常用,一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求，订阅消息
	2. 更新阶段，由组件内部this.setState()或父组件render触发
		1.shouldComponentUpdate()
		2.componentWillUpdate()
		3.render()
		4.componentDidUpdate()
	3. 卸载组件： 由ReactDOM.unmountComponentAtNode() 触发
		1. componentWillUnmount() ====>常用，一般在这个钩子中做一些收尾的事，例如：关闭定时器，取消订阅消息

## 卸载组件
	```			  	ReactDOM.unmountComponentAtNode(document.getElementById('test'))
	```

## 新的生命周期钩子
	### getDerivedStateFromProps(props)
		即状态值都取决于props，少用
		
	### getSnapshotBeforeUpdate
		在更新之前获取快照，可以参考官网新闻列表滚动

## DOM的diffing算法
	对比的最小力度是标签(节点)
	1.虚拟DOM中key的作用：
		1）简单地说，key是虚拟DOM对象的标识，在更新显示时key起着极其重要的重要
		2）详细地说，当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】，随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：
			a.旧虚拟DOM中找到了与新虚拟DOM相同的key：
				（1）若虚拟DOM中内容没变，直接使用之前的真实DOM
				（2）若虚拟DOM中内容变了，则生成新的真实DOM，随后替换页面中之前的真实DOM
			
			b.旧虚拟DOM中未找到与新虚拟DOM相同的key
				根据数据创建新的真实DOM，随后渲染到页面
	2.用index作为key可能会引发的问题：
		1. 若对数据进行： 逆序添加、逆序删除等破坏顺序操作：
			会产生没有必要的真实DOM更新 ===》 界面效果没有问题，但效率低
		2. 如果结构中还包含输入类的DOM：
			会产生错误DOM更新 ===》 界面有问题
		3. 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的
		
	3. 开发中如何选择key？
		1.最好使用每条数据的唯一标识作为key，比如id，手机号，身份证号，学号等唯一值
		2.如果确定只是简单的展示数据，用index也是可以的
	
## React脚手架	
	1.创建项目 create-react-app 项目名
	2. css模块化
		css文件名： index.module.css
		jsx文件中引入： import hello from './index.module.css'
		className={hello.title}

##TodoList
	### checkbox标签有个defaultChecked是否默认确认
	### 键盘事件 
		keydown、keyup一般用keyup确保键盘确认抬起
		```
			handleKeyUp = (event) => {
				const {keyCode, target} = event 
				// 判断按下是否是回车键
				if(keyCode !== 13) return 
				
			}
		```

## React子传父
	父组件通过props传给子组件一个函数，子组件调用该函数传递数据
	
	```
		// 父组件代码
		class Father extends React.Component {
			childrenData = (data) => {
				//获得子组件传递过来的数据
				console.log(data)
			}
			
			render() {
				return (
					<Children data={this.childrenData}/>
				)
			}
		}
		
		// 子组件代码
		class Children extends React.Component {
			sendDataToFather = (event) => {
				this.props.childrenData(event.target.value)
			}
		}
	```
	
## 随机生成id的库 UUID
		yarn add nanoid
		```
			import {nanoid} from 'nanoid'
			
			//调用
			const id = nanoid()
		```

## todoList案例相关知识点
	1.拆分组件、实现静态组件。注意：className、style写法
	2.动态初始化列表，如何确定将数据放在哪个组件的state中？
		-某个组件使用： 放在其自身的state
		-某些组件使用：放在他们共同的父组件state中
	3.关于父子之间通信：
		1. 【父组件】和【子组件】传递数据：通过props传递
		2. 【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
	4.注意defaultChecked和checked的区别，类似的还有：defaultValue和Value
	5.状态在哪里，操作状态的方法就在哪里

## react ajax
	### 解决跨域
		 1.开启代理
			（1）在package.json中最后添加
				"proxy": "http://localhost:5000"
				*** 如果遇到需要请求多个服务器的情况：
					在src中建立文件：setupProxy.js
						在这个文件中用CJS（node）方式编写代码：
							```
								const proxy = require('http-proxy-middleware')
								module.exports = function(app){
									app.use(
										proxy('/api1', {
											target: 'http://localhost:5000',
											changeOrigin:true,
											pathRewrite:{'^/api1':''}
										}),
										proxy('/api2', {
											target: 'http://localhost:5001',
											changeOrigin:true,
											pathRewrite:{'^/api2':''}
										})
									)
								}
							```
	
## axios发送请求
	```
		import axios from 'axios'
		
		axios.
	```
	
## 连续解构赋值
	结构this中的keyWordElement中的value
	const {keyWordElement:{value}} = this
	### 连续解构赋值改名
	//取出obj2中的a中的b并改名为data
	const {a:{b:data}} = obj2
	
## 兄弟组件间通信/消息订阅、发布机制
	1.工具库： PubSubJS
	2.下载：npm install pubsub-js --save
	3.使用:
		1) import PubSub from 'pubsub-js' //引入
		2) PubSub.subscribe('delete', function(data){}) //订阅 
		3) PubSub.publish('delete', data) //发布消息
	4.案例：
		A组件：
			class A extends Component {
				componentDidMount() {
					// 订阅消息，并获取该消息的独有特征
					this.token = PubSub.subscribe('messageName', (msg,data) => {
						//参数：msg消息名称、data数据
						console.log(data)
					})
				}
				
				componentWillUnmount() {
					// 取消订阅
					PubSub.unsubscribe(this.token)
				}
			}
		
		B组件：
			class B extends Component {
				// 触发事件
				methodName = () => {
					// 发布消息
					PubSub.publish('messageName', {name: 'li', age: 18})
				}
			}

## fetch发送请求

## react-router-dom
	1.react的一个插件库
	2.专门用来实现一个SPA应用
	3.基于react的项目基本都会用到此库
	4.安装 yarn add react-router-dom
## react-router-dom相关API	
```
	//导入
	import {Link, BrowserRouter, Route} from 'react-router-dom'
	//引入组件
	import Home from './Home'
	import About from './About'
	
	// to路径不识别大小写和"."
	
	class Nav extends React.Component {
		render() {
			return (
				<BrowserRouter>
					<div className="nav>
						//编写路由链接
						<Link to="/about">About</Link>
						<Link to="/home">Home</Link>
					<div className="nav>
					<div className="router">
						//注册路由
						<Route path="/about" component={About} />
						<Route path="/home" component={Home} />	
					</div>
				</BrowserRouter>
			)
		}
	}
```	
可以在App外面包BrowseRouter
```
	App.jsx:
		import {BrowserRouter} from 'react-router-dom'
		ReactDOM.render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		, document.getElementById('root'))
```
	
### 路由组件放在pages里，区分components
### 路由的基本使用
		1.明确好界面中的导航区、展示区
		2.导航区的a标签改为Link标签
			<Link to="/xxxx">Demo</Link>
		3.展示区写Route标签进行路径的匹配
			<Route path="/xxxx" component={Demo}> />
		4.<App>的最外侧包裹一个<BrowserRouter>或<HashRouter/>

###	<Switch>组件包裹<Route>组件
		Route默认不中断匹配，使用Switch包裹Route组件可以提高效率

### <navLink>导航栏高亮，可传入属性activeClassName指定样式名
	```
		<NavLink activeClassName="demo-active" to="About">About</NavLink>
	```

### 标签体内容也是一个特殊的标签属性children，一样可以通过thisprops收集
		封装组件MyNavLink：
			<NavLink {...this.props}></NavLink>
		使用组件MyNavLink:
			<MyNavLink to="/home">Home</MyNavLink>

## 路由组件与一般组件	
		1.区别：
			（1）写法不同： 
					一般组件：<Demo />
					路由组件：<Route path="/demo" component={Demo} />
			（2）存放位置不同：
					一般组件： components
					路由组件：pages
			（3）接收到的props不同：
					一般组件： 写组件标签时传递了什么，就能收到什么
					路由组件：接收到三个固定的属性：
						history：
							go:f go(n)
							goBack: f goBakc()
							goForward: f goForward()
							push: f push(path,state)
							replace: f replace(path, state)
						location：
							pathname: '/about'
							search: ""
							state: undefined
						match：
							params: {}
							path: '/about'
							url: '/about'
							
## 解决样式丢失问题： 							
	1. public/index.html 中 引入样式时不写 ./ 写 /（常用）
	2. public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
	3. 使用HashRouter
							
## 路由的模糊匹配和严格匹配
		1.默认使用的是模糊匹配（【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
		2.开启严格匹配：<Route exact={true} path="/about" component={About} />
		3.严格匹配不要随便开启，需要再开，有些时候会导致无法继续匹配二级路由

## Redirect重定向的使用
		1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
		2.具体编码：
			<Switch>
				<Route path="/about" component={About}/>
				<Route path="/home" component={Home}/>
				<Redirect to="/about" />
			</Switch>
							
							
		function replaceByIndex(str, index, chat) {
			if (!str.length || index < 0) return 
			return str.slice(0,index) + char + str.slice(index+1)
		}

## 嵌套路由
	1.注册子路由时要写上父路由的path值
	2.路由的匹配时按照注册路由的顺序进行的
							
## 向路由组件传递参数数据						
	1.携带params参数					
		路由链接（携带参数）： <Link to="/demo/test/tom/15">详情</Link>
		注册路由（声明接收）：<Route path="/demo/test/:name/:age" component={Test}>
		接受参数: const {id,title} = jthis.props.match.params
							
	2.search参数
		路由链接（携带参数）： <Link to='/demo/test?name=to&age=15'>详情</Link>
		注册路由（无需声明，正常注册即可）：<Route path="/demo/test" component={Test}>
		接收参数：const {search} = this.props.location
		备注：获取到的search是urlencoded编码字符串，需要借助querystring库解析
	
	3.state参数（不同于组件的state，是路由独有的一个属性）						
		路由链接（携带参数）： <Link to={{path:'/demo/test', state:{name: 'tom',age:18}}}>详情</Link>
		注册路由（无需声明，正常注册即可）：<Route path="/demo/test" component={Test}>
		接收参数：this.props.location.state
		备注：刷新也可以保留参数				
							
## 编程式路由：
	1.this.props.history.push('/demo/test', {name: 'lihua', age: 18})
	2.this.props.history.replace()
	
## withRouter
	1.用处：withRouter可以加工一般组件，让一般组件具备路由组件所特有的API，比如history
	withRouter的返回值是一个新组件
	2.使用：
		一般组件:
			Header.jsx
			```
				import {withRouter} from 'react-router-dom'
				class Header extends React.Component {}
				export default withRouter(Header)
			```

## BrowserRouter 与 HashRouter 的区别
	1. 底层原理不一样：
		BrowserRouter使用的是H5的history API 不兼容ie9及以下版本
		HashRouter使用的是URL的哈希值
	2. url表现形式不一样
		BrowserRouter的路径中没有#，例如:localhost:3000/demo/test
		HashRouter的路径包含# localhost:3000/#/demo/test
	3. 刷新后对路由state参数的影响
		(1)BrowserRouter没有任何影响，因为state保存在history对象中
		(2)HashRouter刷新后会导致路由由state参数的丢失
	4.备注：HashRouter可以解决一些路径错误相关的问题
							
## antd的按需引入+自定主题
	1.安装依赖： yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
	2.修改package.json
	```javascript
		"scripts":{
			"start": "react-app-rewired start",
			"build":"react-app-rewired build",
			"test":"react-app-rewired test",
			"eject":"react-scripts eject"
		}
	```
	3.根目录下创建config-overrides.js
	```javascript
		//配置具体的修改规则
		const {override, fixBabelImports, addLessLoader} = require('customize-cra')
		module.exports = override(
			fixBabelImports('import', {
				libraryName: 'antd',
				libraryDirectory: 'es',
				style: true
			}),
			addLessLoader({
				lessOptions:{
				javascriptEnabled: true,
					modifyVars: {
						'@primary-color': 'green'
					}
				}
			})
		)
	```
	4.备注： 不用在组件里亲自引入样式了，即： import 'antd/dist/antd.css'应该删除						
## redux
	### 求和案例--redux精简版
		（1）去除Count组件自身的状态
		（2）src下建立：
			-src
				-redux
					-store.js
					-count_reducer.js
		（3）store.js
			1）引入redux中的createStore函数，创建一个store
			2）createStore调用时要传入一个为其服务的reducer
			3）记得暴露store对象
		（4）count_reducer.js
			1.reducer本质是一个函数，接受：preState，action，返回加工后的状态
			2.reducer有两个作用：初始化状态，加工状态
			3.reducer被第一次调用时 ，是store自动触发的
				传递的preState是undefined，
				传递的action：@@REDUX/INIT
		（5）在index.js中检测store中状态的改变，一旦发生改变重新渲染<App/>
			备注： redux只负责管理状态，至于状态的改变驱动着页面的展示，只靠我们自己写
			
	### 求和案例--redux完整版
			新增文件：
				1.count_actiojn.js 专门用于创建action对象
				2.constantjs 放置容易写错的type值
			
	### 求和案例--redux异步action版
		（1）明确：延迟的动作不想交给组件自身，想交给action
		（2）何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回
		（3）具体编码：
			1）yarn add redux-thunk，并配置在store中
			2）创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务
			3）异步任务有结果后，分发一个同步的action去真正操作数据
		（4）备注：异步action不是必须要写的，完全可以自己等待异步任务的结果再去分发同步action
		
	### 求和案例--react-redux基本使用
		（1）明确两个概念：
			1）UI组件：不能负责使用任务redux的api，只负责页面的呈现、交互等
			2）如何创建一个容器组件--靠react-redux的connect函数
				connect(mapStateToProps, mapDispatchToProps)(UI组件)
					-mapStateToProps:映射状态，返回值是一个对象
					-mapDispatchToProps:映射操作状态的方法，返回值是一个对象
			3）备注：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
			4）备注2：mapDispatchToProps也可以是一个对象

	## 求和案例_react_redux数据共享版
		（1）定义一个Person组件，和Count组件通过redux共享数据
		（2）为Person组件编写：reducer和count的Reducer要使用combineReducer进行合并
		（3）交给store的是总reducer，最后注意在组建中取出状态的时候，记得“取到位”

	## 求和案例_react_redux开发者工具的使用
		（1）yarn add redux-devtools-extension
		（2）store中进行配置
			import {composeWithDevTools} from 'redux-devtools-extension'
			const store = createStore(allReducer, composeWithDevTools(applayMiddleware(thunk)))