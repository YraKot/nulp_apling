var keystone = require('keystone');
 
exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    locals.section = 'Про Кафедру';
    locals.subsection = 'Історія';
    view.query('history', keystone.list('History').model.find());
    view.render('history');
}