import Backbone from 'backbone'
import $ from 'jquery'
import store from '../store'
import session from '../models/session'

const Item = Backbone.Item.extend({
	tagName: 'li',
	className: 'twee-item',
	// events: {},

	template() {
		return `
		<li>
			<h5>${session.get('name')}</h5>
			<time>${store.twee.timestamp}</time>
			<p>${store.twee.body}</p>
		</li>
		`;
	},
	render() {
		this.$el.html(this.template())
		return this
	}

});

export default Item;