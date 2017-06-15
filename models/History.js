var keystone = require('keystone');
var Types = keystone.Field.Types;

var History = new keystone.List('History');

History.add({
    name: { type: String, required: true },
    content: { type: Types.Html, wysiwyg: true, height: 400 },
});
History.register();