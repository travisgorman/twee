import $ from 'jquery'
import Backbone from 'backbone'
import session from './models/session'
import settings from './settings'
import router from './router'
require('./styles/main.scss')

session.set('authtoken', localStorage.getItem('authtoken'))
session.set('username', localStorage.getItem('username'))
session.set('name', localStorage.getItem('name'))

console.log('session.authtoken:', session.get('authtoken') )
console.log('session.username:', session.get('username') )
console.log('session.name:', session.get('name') )
console.log('kinveyAuth:', `Kinvey ${session.get('authtoken')}` )
console.log('localStorage authtoken:', localStorage.getItem('authtoken') )
console.log('localStorage username:', localStorage.getItem('username') )

$(document).ajaxSend(function(evt, xhr, jquerySettings) {
	if (session.get('authtoken')) {
		xhr.setRequestHeader('Authorization', 'Kinvey ' + session.get('authtoken'))
	} else {
		xhr.setRequestHeader('Authorization', settings.basicAuth)
	}
})

// start backbone history
Backbone.history.start();



// if I have an authtoken, call session.retrieve
if (!localStorage.getItem('authtoken')) {
	console.log('you are not logged in:', localStorage.getItem('authtoken') )
	router.navigate('login', {trigger: true})
} else {
	session.retrieve();
}