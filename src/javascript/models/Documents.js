var Backbone = require('backbone');
var Document = require('./Document')

module.exports = Backbone.Collection.extend({
	// url: '/documents',
	model: Document,
	// localStorage: new Backbone.LocalStorage("Documents")
});