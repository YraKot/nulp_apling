var keystone = require('keystone');
 
exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    locals.section = 'Про Кафедру';
    locals.subsection = "Колектив";
    view.query('staff', keystone.list('Staff').model.find());
    view.render('staff');
}