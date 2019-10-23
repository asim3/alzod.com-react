import React from 'react';

var icons_root = {
    className: "icons_root", 
    innerHTML: "aaaa",
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
            console.log("111");return false;
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
            console.log("222");return false;
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
            console.log("333");return false;
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
            console.log("444");return false;
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
            console.log("555");return false;
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
            console.log("666");return false;
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
            console.log("777");return false;
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
            console.log("888");return false;
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
            console.log("999");return false;
        }
    }
]};


export default function() {
    return <h1>H1</h1>
};