import Backbone from 'backbone'
import $ from 'jquery'
import store from '../store'
import session from '../models/session'

const Item = Backbone.View.extend({
	tagName: 'li',
	className: 'twee-item',
	// events: {},

	template() {
		console.log('this:', this.model )
		return `
		<li>
			<div class='whois'>
				<h5 class="author">${this.model.get('author')}</h5>
				<h5 class="username">@${this.model.get('username')}</h5>
				<h5>${this.model.get('timestamp')}</h5>
			</div>			
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

