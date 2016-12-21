import Backbone from 'backbone'
import $ from 'jquery'
import session from '../models/session'
import router from '../router'

const Login = Backbone.View.extend({
	tagName: 'form',
	className: 'login-form',
	events: {
		'submit' : 'submitHandler'
	},

	submitHandler(e) {
		e.preventDefault()
		let username = this.$('#username').val()
		let password = this.$('#password').val()
		session.login(username, password)
	},

	template() {
		return `
		<h2>Log In</h2>
		<input type="text" class="username" id="username" placeholder="username"/>
		<input type="text" class="password" id="password" placeholder="password"/>
		<input type="submit" class="loginBtn" value="login"/>
		<p>Not a member yet? <a href="#signup"> Sign up now</a> </p>
		`
	},

	render(){
		this.$el.html(this.template())
		return this
	}
});

export default Login;