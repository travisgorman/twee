import Backbone from 'backbone'
import settings from '../settings'

const Session = Backbone.Model.extend({
	urlRoot: `http://baas.kinvey.com/user/${settings.appKey}`,
	idAttribute: '_id',

	defaults: {
		username: 'defaultUsername',
		authtoken: false,
	},

	signup(newName, newUser, newPass) {
		this.save({
			name: newName,
			username: newUser,
			password: newPass
		}, {
			url: `http://baas.kinvey.com/user/${settings.appKey}`,
			success: (model, response) => {
				model.unset('password')
				this.set('username', newUser)
				this.set('authtoken', response._kmd.authtoken)
				router.navigate('app', {trigger: true})
				console.log('SUCCESS: you created a user', 
					response, model )
			},
			error: (model, response) => {
				console.log('ERROR: signup failed', response )
			}
		})
	},

	parse(response) {
		return {
			username: response.username,
			authtoken: response._kmd.authtoken,
			userId: response._id
		}
	},

	retrieve() {
		this.fetch({
			url: `${this.urlRoot}/_me`
		})
	}

});

let session = new Session;
export default session;