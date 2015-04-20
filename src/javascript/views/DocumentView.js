var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.View.extend({
	template: require('./DocumentTpl.hbs'),
	className: 'Document',
	events: {
		'click .close': 'close'
	},
	onClick: function(){
		alert( this.model.get('title') );
	},
	close: function(){
		this.$el.hide('slow');
	},
	initialize: function(){

	},
	render: function(){
		this.$el.html( this.template({
			title: this.model.get('title')
		}) );
		return this;
	}
});
