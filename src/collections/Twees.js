import Backbone from 'backbone'
import settings from '../settings'
import Twee from '../models/Twee'

const Twees = Backbone.Collection.extend({
	model: Twee,
	url: `https://baas.kinvey.com/appdata/${settings.appKey}/twees/`,
});

export default Twees;