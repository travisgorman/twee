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
			<li class="twee">
				<div class='whois'>
					<h5 class="author">${this.model.get('author')}</h5>
					<h5 class="username">@${this.model.get('username')}</h5>
					<h5 class="timestamp">${this.model.get('timestamp')}</h5>
					<button class="editBtn">Edit</button>
					<button class="deleteBtn">Delete</button>
				</div>
				<form class="update">
					<input type="text" class="newBody" placeholder="${this.model.get('body')}"/>
					<input type="submit" class="updateBtn" value="update"/>
				</form>		
			</li>
		`;
	},

	updateTwee(e) {
		console.log('update twee submit event:', e )
		let newBody = this.$('.newBody').val()
		// console.log('this.model:', this.model )
		console.log('newBody:', newBody )

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
		console.log('body handler:', e )
		console.log('body:', this.model.get('body'))
		this.$el.context.innerHTML = `
			<li class="twee">
				<div class='whois'>
					<h5 class="author">${this.model.get('author')}</h5>
					<h5 class="username">@${this.model.get('username')}</h5>
					<h5 class="timestamp">${this.model.get('timestamp')}</h5>
					<button class="editBtn">Edit</button>
					<button class="deleteBtn">Delete</button>
				</div>
				<p class="body">${this.model.get('body')}</p>
			</li>
		`;
	},

	deleteHandler(e) {
		console.log('delete click event:', e )
		console.log('this model id:', this.model.get('_id') )
		this.model.destroy({
			success: function(model, response) {
				console.log('SUCCESS! model:', model)
				console.log('SUCCESS! response:', response)
			}
		})
	},

	template() {
		let userItem = `
			<li class="twee">
				<div class='whois'>
					<h5 class="author">${this.model.get('author')}</h5>
					<h5 class="username">@${this.model.get('username')}</h5>
					<h5 class="timestamp">${this.model.get('timestamp')}</h5>
					<button class="editBtn">Edit</button>
					<button class="deleteBtn">Delete</button>
				</div>			
				<p class="body">${this.model.get('body')}</p>
			</li>
		`;
		if (this.model.get('username') === session.get('username')) {
			return userItem;
		}
		return `
		<li>
			<div class='whois'>
				<h5 class="author">${this.model.get('author')}</h5>
				<h5 class="username">@${this.model.get('username')}</h5>
				<h5 class="timestamp">${this.model.get('timestamp')}</h5>
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

