import Backbone from 'backbone'
import $ from 'jquery'
import store from '../store'
// import session from '../models/session'

const Item = Backbone.View.extend({
	tagName: 'li',
	className: 'twee-item',
	// events: {},

	template() {
		// console.log('this:', this.model )
		return `
		<li>
			<h5>${this.model.get('author')}</h5>
			<time>${this.model.get('timestamp')}</time>
			<p>${this.model.get('body')}</p>
		</li>
		`;
	},
	render() {
		this.$el.html(this.template());
		return this;
	}

});

export default Item;