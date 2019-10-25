(function(view) {
    var View = alzod.View;
    var Model = alzod.Model;
    var Controller = alzod.Controller;
    if("View" in alzod) { view(View, Model, Controller); }
    else { throw new Error('View not in alzod') }
})(function(View, Model, Controller) {

}); // end of view function.