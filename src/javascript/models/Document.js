var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	url: '/document',
	defaults: {
		title: "Untitled"
	},
	initialize: function(){

	}
});

