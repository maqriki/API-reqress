const newman = require('newman');

newman.run({
    collection: require('./src/moduit-take-home-test.postman_collection.json'),
    environment: require('./src/moduit-env-api.postman_environment.json'),
    reporters: 'htmlextra'
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});