import Backbone from 'backbone'
import settings from '../settings'
import router from '../router'

const Session = Backbone.Model.extend({
	urlRoot: `https://baas.kinvey.com/user/${settings.appKey}`,
	idAttribute: '_id',

	defaults: {
		username: 'defaultUsername',
		name: 'defaultName',
		authtoken: false,
	},

	signup(newName, newUser, newPass) {
		console.log('name:', newName)
		console.log('username:', newUser)
		console.log('password:', newPass)
		console.log('url:', session.urlRoot)

		this.save({
			name: newName,
			username: newUser,
			password: newPass,
		}, {
			url: `https://baas.kinvey.com/user/${settings.appKey}`,
			success: (model, response) => {

				console.log('response.name:--->>', response.name )

				window.localStorage.setItem('username', response.username)
				window.localStorage.setItem('authtoken', response._kmd.authtoken)
				window.localStorage.setItem('name', response.name)

				this.set(this.parse(response))

				// this.set('username', newUser)
				// this.set('authtoken', response._kmd.authtoken)
				// this.set('userId', response._id)

				console.log('SUCCESS: you created a user! Response', response )
				console.log('SUCCESS: you created a user! Model', model )


				console.log('parse this:', this.parse(response) )

				router.navigate('app', {trigger: true})

			},
			error: (model, response) => {
				console.log('ERROR: signup failed', response )
			}
		})

	},

	login: function(username, password) {
	this.save({
		username: username,
		password: password
	}, {
		type: 'POST',
		url: `https://baas.kinvey.com/user/${settings.appKey}/login`,
		success: (model, response) => {
			window.localStorage.setItem('authtoken', response._kmd.authtoken)
			window.localStorage.setItem('username', response.username)
			console.log('SUCCESS! You are logged in. MODEL:', model)
			console.log('SUCCESS! You are logged in. RESPONSE:', response)
			router.navigate('app', {trigger: true})
		},
		error: function() {
			console.log('ERROR! You did not log in a user')
		}
	})
},

	logout: function() {
		this.clear()
		console.log('logout on session:', this )
		window.localStorage.clear()
		router.navigate('login', {trigger: true})
		console.log('USER LOGGED OUT:', this,)
		console.log('localStorage:', 
			localStorage.getItem('authtoken'),
			localStorage.getItem('authtoken'))

		// this.save(null, {
		// 	type: 'POST',
		// 	url: `https://baas.kinvey.com/user/${settings.appKey}/_logout`,
		// 	success: (model, response) => {
		// 		model.clear()
		// 		window.localStorage.clear()
		// 		this.trigger('change')
		// 		router.navigate('login', {trigger: true})
		// 		console.log('USER LOGGED OUT:', this,)
		// 		console.log('localStorage:', 
		// 			localStorage.getItem('authtoken'),
		// 			localStorage.getItem('authtoken'))
		// 	},
		// 	error: function() {
		// 		throw new Error('LOGOUT FAILED')
		// 	}
		// });

	},

  parse: function (response) {
    if (response) {
      console.log('response from Kinvey/user/{GET}:', response)
      return {
        authtoken: response._kmd.authtoken,
        username: response.username,
        userId: response._id,
        name: response.name,

      }
    }
  },

		retrieve: function () {
    this.fetch({
      url: `https://baas.kinvey.com/user/${settings.appKey}/_me`,
      success: (model, response) => {
        console.log('response from Kinvey/user/_me: ', response.toJSON())
        console.log('USER RETRIEVED: ', this)
      }
    })
  },

});

let session = new Session;
export default session;