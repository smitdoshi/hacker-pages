


	Meteor.subscribe('Hackers');
	
Template.hackerList.helpers({
	
	'Hackers': function() {
		return Hackers.find({});
	}
});