var keystone = require('keystone');
var Types = keystone.Field.Types;

var Teaching = new keystone.List('Teaching', {
     map: { name: 'title' },
     autokey: { path: 'slug', from: 'title', unique: true}
});

Teaching.add({
    title: { type: String, required: true },
    bachelor: { type: Types.Html, wysiwyg: true, height: 200 },
    master: { type: Types.Html, wysiwyg: true, height: 200 },
    prof: { type: Types.Html, wysiwyg: true, height: 200 }
});

Teaching.register();