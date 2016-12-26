import Backbone from 'backbone'
import settings from '../settings'
import Twee from '../models/Twee'

const Twees = Backbone.Collection.extend({
	model: Twee,
	url: `https://baas.kinvey.com/appdata/${settings.appKey}/twees/`,

	publish: function(author, body, username){

		// console.log('author from collection:', author )
		// console.log('body from collection:', body )

		this.create({
			author,
			body,
			username,
		},{
			success: function(response) {
				console.log('SUCCESS! You created a new Twee:', response )
			},
			error: function(response) {
				console.log('ERROR!:', response )
			}
		});

	}
	
});

export default Twees;