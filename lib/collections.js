Hackers = new Mongo.Collection('Hackers');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('Hackers', function hackersPublication() {
    return Hackers.find({allegiance:'White Hat'});
  });
}