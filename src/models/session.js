import Backbone from 'backbone'
import settings from '../settings'

const Session = Backbone.Model.extend({
	urlRoot: `http://baas.kinvey.com/user/${settings.appKey}`,
	idAttribute: '_id',

	defaults: {
		username: 'defaultUsername',
		authtoken: false,
	},

	// signup(name, username, password1, password2) {
	// 	console.group('signup info')
	// 		console.log('Name:', name )
	// 		console.log('Username:', username )
	// 		console.log('Password1:', password1 )
	// 		console.log('Password2:', password2 )
	// 		console.log('PW1 = PW1:', password1 === password2 )
	// 	console.groupEnd('signup info')
	// },

	// login(username, password) {
	// 	console.group('login info')
	// 		console.log('Username:', username )
	// 		console.log('Password:', password )
	// 	console.groupEnd('login info')
	// },

});

let session = new Session;
export default session;