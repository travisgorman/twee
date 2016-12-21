import Backbone from 'backbone'
import settings from '../settings'
import router from '../router'

const Session = Backbone.Model.extend({
	urlRoot: `https://baas.kinvey.com/user/${settings.appKey}`,
	idAttribute: '_id',

	defaults: {
		username: 'defaultUsername',
		authtoken: false,
	},

	signup(newName, newUser, newPass) {
		console.log('name:', newName )
		console.log('username:', newUser )
		console.log('password:', newPass )
		console.log('url:', session.urlRoot )

		this.save({
			name: newName,
			username: newUser,
			password: newPass,
		}, {
			url: `https://baas.kinvey.com/user/${settings.appKey}`,
			success: (model, response) => {
				// model.unset('password')
				window.localStorage.setItem('username', response.username)
				window.localStorage.setItem('authtoken', response._kmd.authtoken)

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

	logout() {
		router.navigate('login', {trigger: true})
		console.log( this )
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
        console.log('response from Kinvey/user/_me: ', response)
        console.log('USER RETRIEVED: ', this)
      }
    })
  },

});

let session = new Session;
export default session;