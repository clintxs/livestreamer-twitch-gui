define([
	"ember",
	"text!templates/games/game.html.hbs"
], function( Ember, Template ) {

	return Ember.View.extend({
		template: Ember.Handlebars.compile( Template ),
		tagName: "main",
		classNames: [ "content", "content-gamesgame" ]
	});

});
