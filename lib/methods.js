Meteor.methods({
	'hackers.insert': function(newHackerObject) {
		Meteor.setTimeout( function() {
			Hackers.insert(newHackerObject);
		}, 5000);
	}
});