import Backbone from 'backbone'
import $ from 'jquery'
import Login from './views/Login'
import Signup from './views/Signup'
import Nav from './views/Nav'
import session from './models/session'
// import List from './views/List'
// import Create from './views/Create'

const Router = Backbone.Router.extend({

	routes: {
		'/*'   : 'loginRoute',
		login  : 'loginRoute',
		signup : 'signupRoute',
		app    : 'appRoute',
	},

	loginRoute() {
		let login = new Login()
		$('#app').empty().append(login.render().$el)
	},

	signupRoute() {
		let signup = new Signup()
		$('#app').empty().append(signup.render().$el)
	},

	appRoute() {
		let nav = new Nav()
		$('#app').empty().append(nav.render().$el)
		console.log('session:', session )
		console.log('session authtoken:', session.get('authtoken'))
		console.log('session username:', session.get('username') )
	},
	
});

let router = new Router()
export default router