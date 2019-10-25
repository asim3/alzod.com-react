(function(model) {
    var Model = alzod.Model;
    var Controller = alzod.Controller;
    if("Model" in alzod) { model(Model, Controller); }
    else { throw new Error('Model not in alzod'); }
})(function(Model, Controller) {

HTMLFormElement.prototype.serialize = function() {
    var obj = [].reduce.call(this.elements, function(data, elm) {
        var is_valid = false;
        if(elm.name && elm.value) {
            if(elm.type != 'radio' && elm.type != 'checkbox') {
                is_valid = true;
            }
            else { is_valid = elm.checked; }
        }
        if (is_valid) {
            if (elm.type === 'checkbox') {
                data[elm.name] = (data[elm.name] || []).concat(elm.value);
            }
            else if (elm.options && elm.multiple) {
                data[elm.name] = [].reduce.call(elm, function(val, option) {
                    return option.selected ? val.concat(option.value) : val;
                }, []);
            }
            else {
                data[elm.name] = elm.value;
            }
        }
        return data;
    }, {});
    if(obj.encode_url === "url") {
        var url_data = ""; var mark = "";
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                url_data += mark + key + "=" + encodeURIComponent(obj[key]);
                mark = "&";
            }
        }
        return url_data
    }
    return obj;
};

    
// Model attributes:


// Model methods:


}); // end of model function.