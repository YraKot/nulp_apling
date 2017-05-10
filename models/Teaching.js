var keystone = require('keystone');
var Types = keystone.Field.Types;

var Teaching = new keystone.List('Teaching');

Teaching.register();