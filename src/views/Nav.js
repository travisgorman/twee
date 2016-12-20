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
	},

	template() {
		return `
		<nav>
			<button class="logoutBtn">
				Logout
			</button>
			<h3 class="getUsername"> 
				Hello, ${session.get('username')}
			</h3>
		</nav>
		`
	},

	render() {
		this.$el.html(this.template())
		return this
	}
	
});

export default Nav;