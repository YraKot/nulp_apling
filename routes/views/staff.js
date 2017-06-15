

    // locals.filters = {
	// 	 product: req.params.staff
	// }
    // locals.data = {
	// 	staffs: []
	// }

    // view.on('init', function(next){
    //     var q = keystone.list('Staff').model.findOne({
    //         slug: locals.filters.staff
    //     });
    //     q.exec(function(err, result){
    //         locals.data.staff = result;
    //         next(err);
    //     });
    // });


var keystone = require('keystone');
 
exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    locals.section = 'Про Кафедру';
    locals.subsection = "Колектив";

    locals.filters = {
		 staff: req.params.staff
	}
    
    locals.data = {
		staffs: []
	}


    view.on('init', function(next){
        var q = keystone.list('Staff').model.findOne({
            slug:  locals.filters.staff
        });
            q.exec(function(err, result){
            locals.data.staff = result;
            next(err);
        });
    });

    
    view.render('staff');
}