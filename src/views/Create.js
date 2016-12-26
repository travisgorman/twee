import Backbone from 'backbone'
import $ from 'jquery'
import session from '../models/session'
import store from '../store'


const Create = Backbone.View.extend({
	tagName: 'form',

	className: 'create-twee',

	events: {
		'submit' : 'submitHandler'
	},

	submitHandler(e) {
		let body = this.$('#compose').val()
		let author = session.get('name')

		console.log('body:', body )
		console.log('author:', author )
		console.log('submit event:', e)

		store.twees.publish(author, body)

		console.log('this.$(compose):', this.$('#compose') )

		// this.reset()

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
