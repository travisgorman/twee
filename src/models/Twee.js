import Backbone from 'backbone'
import settings from '../settings'
// import moment from 'moment'

const Twee = Backbone.Model.extend({
	idAttribute: '_id',
	urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/twees`,
	defaults: {
		author: '',
		username: '',
		body: '',
		timestamp: new Date()
	},

});

export default Twee;