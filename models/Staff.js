var keystone = require('keystone');
var Types = keystone.Field.Types;

var Staff = new keystone.List('Staff');

Staff.register();