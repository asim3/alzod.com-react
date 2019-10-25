(function(controller) {
    var View = alzod.View;
    var Model = alzod.Model;
    var Controller = alzod.Controller;
    var timer = 0;
    var check_add_method = function() {
        if("add" in View && "fetch_script" in Model) {
            controller(View, Model, Controller);
        }
        else {
            clearTimeout(timer);
            if(Controller.handle_repetition < Controller.max_repetition) {
                timer = setTimeout(check_add_method, 100);
                console.warn('add not in View');
            }
        }
    };
    //check_add_method();
    setTimeout(check_add_method, 1000);
})(function(View, Model, Controller) {

document.onsubmit = function(event) {
    event.preventDefault();
    event.stopPropagation();
    try {
        Controller.fetch(event.target.action, "post", event.target);
    }
    catch(error) { 
        View.show_error("on submit form error: " + error); 
    }
};


window.onpopstate = function(event) {
    if(event.state) {
        if(event.state.index >= View.current_index) {
            View.current_index++;
            View.handle_200_ok(event.state.content);
            return null;
        }
    }
    View.current_index--;
    View.remove_last_view();
    View.hide_error();
};

// Controller attributes:



// Controller methods:







