import Backbone from 'backbone'
import $ from 'jquery'
import session from '../models/session'
import router from '../router'

const Signup = Backbone.View.extend({
	tagName: 'form',
	className: 'signup-form',
	events: {
		'submit #signupBtn' : 'submitHandler'
	},

	submitHandler(e) {
		e.preventDefault()
		let name = this.$('#newName').val()
		let username = this.$('#newUser').val()
		let password1 = this.$('#newPass1').val()
		let password2 = this.$('#newPass2').val()

		session.signup(name, username, password1, password2)
	},

	template() {
		return `
		<h2>Sign Up</h2>
		<input type="text" id="newName" placeholder="Full Name"/>
		<input type="text" id="newUser" placeholder="Username"/>
		<input type="text" id="newPass1" placeholder="Password"/>
		<input type="text" id="newPass2" placeholder="Retype Password"/>
		<input type="submit" id="signupBtn" value="signup"/>
		<p>Already a member: <a href="#login"> Log in</a> </p>
		`
	},

	render(){
		this.$el.html(this.template())
		return this
	}
});

export default Signup;