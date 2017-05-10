var keystone = require('keystone');

exports = module.exports = function(req, res){
    var view = new keystone.View(req, res);
    var locals = res.locals;

    locals.section = 'Навчання';
    view.query('teaching', keystone.list('Teaching').model.find());
    view.render('teaching');
}