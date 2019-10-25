import Home from "./templates/home";
import User from "./templates/user";


export default function(obj) {
    return new Promise(function(resolver, reject, notify) {
        if(obj.type === "./home") { resolver(Home(obj)) }
        else if(obj.type === "./user") { resolver(User(obj)) }
        else { resolver(`${obj.type}`) }        
    });
};