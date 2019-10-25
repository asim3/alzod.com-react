// ==========================================XXX

window.onerror = function (message, url, line, column) {
    var e = "message=" + message;
    e += "&url=" + url;
    e += "&line=" + line;
    e += "&column=" + column;
    var request = new XMLHttpRequest();
    request.open("GET", "/?err=" + e, true);
    request.send(e);
    return false;
};





var view_home = {id: "view_home", className: "view_root", append: []};
var logo_div = { className: "logo", innerHTML: '<svg viewBox="0 0 100 100" style="width: 3rem;height: 3rem;" height="100" width="100"><circle cx="50" cy="50" r="40" fill="green" /></svg>'}
logo_div.append = {element: "span", innerHTML: "Alzod"};
view_home.append.push(logo_div);

var search_form = {
    element:"form",
    className:"search_box",
    action:"/api/item/",
    method:"POST",
    append: [
        {
            element:"input",
            type:"textbox",
            name:"type",
            placeholder: "type"
        },
        {
            element:"input",
            type:"submit",
            value:"Search"
        }
    ]
};

var icons_root = {
    className: "icons_root", 
    append: [
    {   
        element:"a", 
        href: "/1", 
        className: "icon_larg",
        append: {
            element: "span", 
            innerHTML: "المفضلة"
        },
        onclick: function(){
            alzod.Controller.fetch(this.href);return false;
        }
    },
    {   
        element:"a", 
        href: "/2", 
        className: "icon_larg",
        append: {
            element: "span", 
            innerHTML: "السلة"
        },
        onclick: function(){
            alzod.Controller.fetch(this.href);return false;
        }
    },
    {   
        element:"a", 
        href: "/login/", 
        className: "icon_larg",
        append: {
            element: "span", 
            innerHTML: "تسجيل"
        },
        onclick: function(){
            alzod.Controller.fetch(this.href);return false;
        }
    },
    {   
        element:"a", 
        href: "/logout/", 
        className: "icon_larg",
        append: {
            element: "span", 
            innerHTML: "Logout"
        },
        onclick: function(){
            alzod.Controller.fetch(this.href);return false;
        }
    },
    {   
        element:"a", 
        href: "/4", 
        className: "icon_larg",
        append: {
            element: "span", 
            innerHTML: "إضافة"
        },
        onclick: function(){
            alzod.Controller.fetch(this.href);return false;
        }
    },
    {   
        element:"a", 
        href: "/login/", 
        className: "icon_larg",
        append: {
            element: "span", 
            innerHTML: "/login/"
        },
        onclick: function(){
            alzod.Controller.fetch(this.href);return false;
        }
    },
    {   
        element:"a", 
        href: "/logout", 
        className: "icon_larg",
        append: {
            element: "span", 
            innerHTML: "/logout"
        },
        onclick: function(){
            alzod.Controller.fetch(this.href);return false;
        }
    },
    {   
        element:"a", 
        href: "login/", 
        className: "icon_larg",
        style: "border: 2px solid red;",
        append: {
            element: "span", 
            innerHTML: "error: login/ "
        },
        onclick: function(){
            alzod.Controller.fetch(this.href);return false;
        }
    },
    {   
        element:"a", 
        href: "https://jsonplaceholder.typicode.com/users/3", 
        className: "icon_larg",
        style: "border: 2px solid red;",
        append: {
            element: "span", 
            innerHTML: "https json place holder "
        },
        onclick: function(){
            alzod.Controller.fetch(this.href);return false;
        }
    }
]};

view_home.append.push(search_form);
view_home.append.push(icons_root);
document.getElementById('all_views').append_by_obj(view_home);
