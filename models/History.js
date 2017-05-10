var keystone = require('keystone');
var Types = keystone.Field.Types;

var History = new keystone.List('History');

History.register();