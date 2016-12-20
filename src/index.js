import $ from 'jquery'
import Backbone from 'backbone'
import session from './models/session'
import settings from './settings'
import router from './router'

console.log('session.authtoken:', session.get('authtoken') )
console.log('session.username:', session.get('username') )

$(document).ajaxSend((e, xhr) => {
	if (session.get('authtoken')) {
		xhr.setRequestHeader('Authorization', `Kinvey ${session.get('authtoken')}`)
	} else {
		xhr.setRequestHeader('Authorization', `Basic ${settings.basicAuth}`)
	}
});

// start backbone history
Backbone.history.start();

// if I have an authtoken, call session.retrieve
if (session.get('authtoken')) {
	session.retrieve()
	router.navigate('app', {trigger: true})
}