import Backbone from 'backbone'
import $ from 'jquery'
import session from '../models/session'

const List = Backbone.View.extend({
	className: 'twee-list-view',
	// initialize: {},

	// events: {
	// 	'change' : () => this.render
	// }
	
	template: function() {
		return `
		<h3>Aww shucks ${session.get('name')}</h3>
		<ul class="twee-list">
			<li class="twee-item">
				<h5>${session.get('name')}</h5>
				<span>timestamp</span>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ipsa ut culpa vitae, impedit consectetur aliquid qui suscipit eligendi.</p>
			<li>
		</ul>
		`
	},

	render() {
		this.$el.html(this.template())
		return this
	}

});

export default List;
