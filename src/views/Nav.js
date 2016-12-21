import Backbone from 'backbone'
import $ from 'jquery'
import session from '../models/session'
import router from '../router'

const Nav = Backbone.View.extend({
	tagName: 'nav',
	className: 'nav',
	events: {
		'click .logoutBtn' : 'clickHandler'
	},

	clickHandler(e) {
		console.log( "log out" )
		session.logout();
	},

	template() {
		return `
			  <button class="logoutBtn">logout</button>
			  <div class="username">
			    <h3>hello, 
			      <span>${session.get('username')}</span> welcome to 
			      <span class="logo">TWEE</span>
			    </h3>
			  </div>
		`
	},

	render() {
		this.$el.html(this.template())
		return this
		console.log('authtokem:', session.get('authtoken') )
	}
	
});

export default Nav;