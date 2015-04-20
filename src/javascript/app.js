

var Document = require('./models/Document');
var Documents = require('./models/Documents');

// var doc = new Document({
// 	title: "Super Doc"
// });
// doc.fetch();
// doc.save({ title: "Super" });

var DocumentView = require('./views/DocumentView');

// var docView = new DocumentView();
// docView.render().$el.appendTo( document.body );

var docs = new Documents();

docs.on('add', function(doc){
	var docView = new DocumentView({model:doc});
	docView.render().$el.appendTo( document.body );
})

docs.add([{
	title: "Super Doc"
},{
	title: "Another Doc"
}]);







