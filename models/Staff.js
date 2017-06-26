var keystone = require('keystone');
var Types = keystone.Field.Types;

var Staff = new keystone.List('Staff', {
     map: { name: 'title' },
     singular: 'Staff',
     plural: 'Staffs',
     autokey: { path: 'slug', from: 'title', unique: true}
});


Staff.add({
    title: { type: String, required: true },
    image: { type: Types.CloudinaryImage },
    email: { type: Types.Html, wysiwyg: true, height: 20 },
    degree: { type: Types.Html, wysiwyg: true, height: 50 },
    position: {type: Types.Html, wysiwyg: true, height: 50 },
    subjects: {type: Types.Html, wysiwyg: true, height: 100 },
    interests: {type: Types.Html, wysiwyg: true, height: 100 },
    scientific: {type: Types.Html, wysiwyg: true, height: 400 },
    methodological: {type: Types.Html, wysiwyg: true, height: 400 },
    biography: { type: Types.Html, wysiwyg: true, height: 400 },
    internship: { type: Types.Html, wysiwyg: true, height: 200 }
});

Staff.register();