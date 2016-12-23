import Backbone from 'backbone'
import $ from 'jquery'
import session from '../models/session'


const Create = Backbone.View.extend({
	tagName: 'form',
	className: 'create-twee',
	events: {
		'submit' : 'submitHandler'
	},

	submitHandler(e) {
		let myTwee = this.$('#compose').val()

		console.log('myTwee:', myTwee )
		console.log('submit event:', e)

	},
	
	template() {
		return `
			<input 
				type="text" 
				class="compose" 
				id="compose" 
				placeholder="compose a twee!"/>
			<input 
				type="submit" 
				class="publish" 
				value="publish"/>
		`;
	},

	render() {
		this.$el.html(this.template())
		return this
	}
	
});

export default Create;
