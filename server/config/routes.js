var users = require('./../controllers/users');
module.exports = function(app){
    app.post("/login", function(request, response){
        users.login(request, response);
    });
}
