import Backbone from 'backbone'
import $ from 'jquery'
import store from '../store'
import session from '../models/session'

const Item = Backbone.View.extend({

	tagName: 'li',

	className: 'twee-item',

	events: {
		'click .editBtn' : 'editHandler',
		'click .deleteBtn' : 'deleteHandler',
		'click .body' : 'bodyHandler',
		'submit .update' : 'updateTwee',
		'change' : () => console.log( 'your view has changed' )
	},
	
	editHandler(e) {
		this.$el.context.innerHTML = `
				<header>
					<div class='whois'>
						<h5 class="author">${this.model.get('author')}</h5>
						<h5 class="username">@${this.model.get('username')}</h5>
						<h5 class="timestamp">${this.model.get('timestamp')}</h5>
					</div>
					<div class="actions">
						<button class="editBtn">Edit</button>
						<button class="deleteBtn">Delete</button>
					</div>	
				</header>
				<form class="update">
					<input type="text" class="newBody" placeholder="${this.model.get('body')}"/>
					<input type="submit" class="updateBtn" value="update"/>
				</form>		
		`;
	},

	updateTwee(e) {
		let newBody = this.$('.newBody').val()
		this.model.save({
			body: newBody
		},{
			success: function(model, response) {
				console.log('SUCCESS! model:', model )
				console.log('SUCCESS! response:', response )
			}
		});
		this.renderNew()
	},

	renderNew(e) {
		this.$el.context.innerHTML = `
				<header>
					<div class='whois'>
						<h5 class="author">${this.model.get('author')}</h5>
						<h5 class="username">@${this.model.get('username')}</h5>
					</div>
					<div class="actions">
						<button class="editBtn">Edit</button>
						<button class="deleteBtn">Delete</button>
					</div>	
				</header>
				<p class="body">${this.model.get('body')}</p>
				<footer>
					<h5 class="timestamp">${this.model.get('timestamp')}</h5>
				</footer>
		`;
	},

	deleteHandler(e) {
		this.model.destroy({
			success: function(model, response) {
				console.log('SUCCESS! model:', model)
				console.log('SUCCESS! response:', response)
			}
		})
	},

	template() {
		let userItem = `
				<header>
					<div class='whois'>
						<h5 class="author">${this.model.get('author')}</h5>
						<h5 class="username">@${this.model.get('username')}</h5>
					</div>
					<div class="actions">
						<button class="editBtn">Edit</button>
						<button class="deleteBtn">Delete</button>
					</div>	
				</header>
				<p class="body">${this.model.get('body')}</p>
				<footer>
					<h5 class="timestamp">${this.model.get('timestamp')}</h5>
				</footer>
		`;
		if (this.model.get('username') === session.get('username')) {
			return userItem;
		}
		return `
				<header>
					<div class='whois'>
						<h5 class="author">${this.model.get('author')}</h5>
						<h5 class="username">@${this.model.get('username')}</h5>
					</div>
				</header>
				<p class="body">${this.model.get('body')}</p>
				<footer>
					<h5 class="timestamp">${this.model.get('timestamp')}</h5>
				</footer>
		`;
	},

	render() {
		this.$el.html(this.template());
		return this;
	}

});

export default Item;

