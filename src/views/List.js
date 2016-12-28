import Backbone from 'backbone'
import $ from 'jquery'
import session from '../models/session'
import Twee from '../models/Twee'
import Item from './Item'
// import twees from '../collections/Twees'
import store from '../store'

const List = Backbone.View.extend({
	className: 'twee-list-view',

	initialize: function() {
		store.twees.on('update', () => this.render());
		store.twees.fetch();
	},
	
	template: function() {
		return `
		<ul class="twee-list"></ul>
		`;
	},

	render() {
		this.$el.html(this.template())

		store.twees.forEach((twee, i) => {

						// console.groupCollapsed('twees in collection')
						// 	console.log(`twee #${i} author`, twee.get('author') )
						// 	console.log(`twee #${i} body`, twee.get('body') )
						// 	console.log(`twee #${i} time`, twee.get('timestamp') )
						// console.groupEnd('twees in collection')

			let item = new Item({
				model: twee
			});
			item.render();
			this.$('.twee-list').prepend(item.$el);
		});
		return this;
	}

});

export default List;
