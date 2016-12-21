import Backbone from 'backbone'
import $ from 'jquery'
import session from '../models/session'
import router from '../router'

const Signup = Backbone.View.extend({
	tagName: 'form',
	className: 'signup-form',
	events: {
		'submit' : 'submitHandler'
	},

	submitHandler(e) {
		e.preventDefault()
		let newPass;
		let newName = this.$('#newName').val()
		let newUser = this.$('#newUser').val()
		let newPass1 = this.$('#newPass1').val()
		let newPass2 = this.$('#newPass2').val()

		if (newPass1 === newPass2) {
			newPass = newPass1;
		} else {alert('Your passwords do not match. Please try again')}

		session.signup(newName, newUser, newPass)
	},

	template() {
		return `
		<h2>Sign Up</h2>
		<input type="text" id="newName" placeholder="Full Name"/>
		<input type="text" id="newUser" placeholder="Username"/>
		<input type="password" id="newPass1" placeholder="Password"/>
		<input type="password" id="newPass2" placeholder="Retype Password"/>
		<input type="submit" class="signupBtn" id="signupBtn" value="signup"/>
		<p>Already a member? <a href="#login"> Log in</a> </p>
		`
	},

	render(){
		this.$el.html(this.template())
		return this
	}
});

export default Signup;